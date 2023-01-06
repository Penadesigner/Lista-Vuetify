<template>
  <div>
    <v-col cols="12">
      <v-text-field
        v-model="campoInput"
        label="Nome da Tarefa"
        variant="outlined"
        @keyup.enter="handleAddTarefa"
      ></v-text-field>
    </v-col>

    <v-list select-strategy="multiple">
      <v-list-subheader>General</v-list-subheader>
      <div v-for="(tarefa, index) in $store.state.tarefas" :key="index">
        <Tarefa :tarefa="tarefa" />
      </div>
    </v-list>
  </div>
</template>

<script>
import Tarefa from "@/components/tarefas/Tarefa.vue";
export default {
  components: { Tarefa },
  data() {
    return {
      campoInput: null,
    }
  },
  methods: {
    handleAddTarefa(){
        this.$store.commit('adicionaTarefa', this.campoInput)
        this.campoInput = ''
      }
    }
  }
</script>

<style>
</style>