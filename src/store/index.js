import { createStore } from 'vuex'

export default createStore({
  state: {
    tarefas: [
      {id: 1 , titulo: 'Primeiro', concluido: false},
      {id: 2 , titulo: 'Segundo', concluido: true},
      {id: 3 , titulo: 'Terceiro', concluido: false},
      {id: 4 , titulo: 'Quarto', concluido: false},
      {id: 5 , titulo: 'Quinto', concluido: false}
    ]
  },
  getters: {
  },
  mutations: {
    adicionaTarefa(state, titulo){
      if(titulo){
        state.tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluido: false
        })
      }
    },
    removeTarefa(state, id){
     state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    }
  },
  actions: {
  },
  modules: {
  }
})
