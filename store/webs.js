import axios from "axios";
import env from "@/config/env";

export const state = () => ({
  list: [],
  loadingList: false,
  nextPage: ""
});
export const mutations = {
  setList(state, list) {
    state.list = list.data;
    state.nextPage = list.next_page;
  },
  updateList(state, newList) {
    let pushArr = [...state.list, ...newList.data];
    state.list = pushArr;

    if (newList.next_page) {
      state.nextPage = newList.next_page;
    } else {
      state.nextPage = undefined
    }
  },
  setLoading(state, isLoad) {
    state.loadingList = isLoad;
  }
};
export const actions = {
  async getProjectWeb({ commit }, { endpoint, page }) {
    let url = !page
      ? `${env.api}/${endpoint}/`
      : `${env.api}/${endpoint}/?pag=${page}`;

    const data = await axios.get(url).then(response => {
      if (response.status === 200) {
        commit("setLoading", false);
        return response.data;
      }
    });

    const projectsWeb = await data;

    if (!page) {
      commit("setList", projectsWeb);
    } else {
      commit("updateList", projectsWeb);
    }
  }
};
