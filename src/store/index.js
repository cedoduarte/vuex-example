import { createStore } from 'vuex'

export default createStore({
  state: {
    msg: "Vuex desde 0.",
    nombre: "Carlos",
    apellido: "Duarte",
    amigos: [],
    amigo: null
  },
  getters: {
    mensaje(state) {
      return state.msg;
    },
    nombreCompleto(state) {
      return `${state.nombre} ${state.apellido}`;
    }
  },
  mutations: {
    addAmigo(state) {
      state.amigos = [...state.amigos, state.amigo];
    }
  },
  actions: {
    addAmigoAction(context) {
      context.commit("addAmigo");
    }
  },
  modules: {
  }
})
