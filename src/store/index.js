import {createStore} from "vuex";
export default createStore({
  state: { // само состояние, описываем даннные
    likes: 0  
  },
  getters: { // comuted свойства, своего рода кэшируемые вычисляемые значения
    doubleLikes(state) {
       return state.likes * 2;
    }
  },
  mutations: { // изменять состояние напрямую нельзя, но можно изменять с пом. мутаций
    incrementLikes(state) {
      state.likes += 1;
    },
    decrementLikes(state) {
      state.likes -= 1;
    }
  },
  actions: { // функции, которые используют внутри себя мутации

  }
})