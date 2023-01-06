<template>
  <v-container>
  <v-col
    cols="12"
  >
    <v-text-field
      v-model="campoInput"
      solo
      label="Nome da tarefa"
      clearable
      @keyup.enter="handleAddTarefa"
    ></v-text-field>
  </v-col>

  <v-list
    flat
    subheader>

    <v-list-item-group
      multiple
      active-class="">

      <div class="tarefa" v-for="tarefa, index in $store.state.tarefas" :key="index">
        <Tarefa :tarefa="tarefa"/>
      </div>

    </v-list-item-group>
    
  </v-list>
  </v-container>
</template>

<script>
/* eslint-disable */
import Tarefa from '../components/tarefas/Tarefa.vue';

export default ({
  name: 'TarefaView',
  components: {
    Tarefa,
  },
  data(){
    return {
      campoInput: null  
    }
  },
  methods: {
    handleAddTarefa(){
        this.$store.commit('adicionaTarefa', this.campoInput)
        this.campoInput = null
      }
    }
  }
);
</script>

<style scoped>
.tarefa {
  display: flex;
  justify-content: space-between;
}
</style>
