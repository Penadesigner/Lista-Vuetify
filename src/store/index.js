import { createStore } from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('db')

export default createStore({
  state: {
    tarefas: [
      //{id: 1 , titulo: 'Primeiro', concluido: false},
      //{id: 2 , titulo: 'Segundo', concluido: true},
    ]
  },
  getters: {
  },
  mutations: {
    buscaTarefa(state) {
      db.collection('tarefas').get().then(tarefasdb => {
        state.tarefas = tarefasdb
      })
    },

    adicionaTarefa(state, titulo) {
      db.collection('tarefas').add({
        id: new Date().getTime(),
        titulo,
        concluido: false
      })
    },

/* aqui salva direto na store

adicionaTarefa(state, titulo){         
  if(titulo){
    state.tarefas.push({
      id: new Date().getTime(),
      titulo,
      concluido: false
    })
  }*/

/*removeTarefa(state, id) {
  state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
},

editarTarefa(state, novaTarefa){       
  let pegaTarefa = state.tarefas.filter(t => t.id == novaTarefa.id)[0]
  pegaTarefa.titulo = novaTarefa.titulo
}*/

  },
  actions: {
    async adicionarTarefa({ commit }, titulo) {
      await commit('adicionaTarefa', titulo)
      await commit('buscaTarefa')
    },

    async editarTarefa({ commit }, novaTarefa) {
      db.collection('tarefas').doc({ id: novaTarefa.id }).update({
        titulo: novaTarefa.titulo
      }).then(() => {
        commit('buscaTarefa')
      })
    },

    removerTarefa({ commit }, id) {
      db.collection('tarefas').doc({ id }).delete().then(() => {
        commit('buscaTarefa')
      })
    }

  },
  modules: {
  }
})
