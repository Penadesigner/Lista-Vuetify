<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">

      <v-card>
        <v-card-title class="text-h5"> Excluir </v-card-title>
        <v-card-text>Deseja remover a tarefa?</v-card-text>
        
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="$emit('fechaModal')">
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="handleDeletaTarefa()">
            Aceitar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
    };
  },
  props: ['tarefa'],
  methods: {
    handleDeletaTarefa(){
      this.$store.dispatch('removerTarefa', this.tarefa.id)
      this.dialog = false
    }
  }
};
</script>

<style>
</style>