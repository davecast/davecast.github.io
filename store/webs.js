import axios from "axios";
import env from "@/config/env";

export const state = () => ({
  list: [],
  loadingList: false,
  nextPage: "",
  project: undefined
});
export const mutations = {
  setProject(state, project) {
    state.project = project;
  },
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
  },
  async getProject({ commit }, { project }) {
    let url = `${env.api}/proyectos_web/${project}/`;

    const data = await axios.get(url).then(response => {
      console.log(response.data);
      return response.data;
    })
    
    const projectDetail = await data;
    commit("setProject", projectDetail);
  }
};
