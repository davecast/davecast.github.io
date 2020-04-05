export const state = () => ({
  message: "",
  delayIn: 0,
  delayOut: 0,
  backgroundColor: "#d8d8d8"
});
export const mutations = {
  setMessage(state, {message, delayIn, delayOut, backgroundColor}) {
    state.message = message;
    state.delayIn = delayIn;
    state.delayOut = delayOut;
    state.backgroundColor = backgroundColor
  }
};
export const actions = {
  initMessage ({ commit }, { message, delayIn, delayOut, backgroundColor }) {
    commit("setMessage", {message, delayIn, delayOut, backgroundColor});
  }
}