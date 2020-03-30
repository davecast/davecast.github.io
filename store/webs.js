import axios from "axios";
import env from "@/config/env";

export const state = () => ({
  list: [],
  loadingList: false
});
export const mutations = {
  setList(state, list) {
    state.list = list;
  },
  setLoading(state, isLoad) {
    state.loadingList = isLoad;
  }
};
export const actions = {
  async getProjectWeb({ commit }, endpoit) {
    const data = await axios
      .get(`${env.api}/${endpoit}/`)
      .then(response => {
        if (response.status === 200) {
          commit("setLoading", false);
          return response.data.data;
        }
      });
    const projectsWeb = await data;
    commit("setList", projectsWeb);
  }
};
