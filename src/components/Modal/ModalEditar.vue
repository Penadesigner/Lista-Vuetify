<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">

      <v-card>
        <v-card-title class="text-h5"> Editar </v-card-title>
        <v-card-text>Informe um novo nome</v-card-text>
        <v-text-field
          label="Nome da Tarefa"
          outlined
          v-model="titulo"
        ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="$emit('fechaModal')">
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="handleEditarTarefa">
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
      titulo: null
    };
  },
  props: ['tarefa'],
  created(){
    this.titulo = this.tarefa.titulo
  },
  methods: {
    handleEditarTarefa(){
      let NovaTarefa = {
            titulo: this.titulo,
            id: this.tarefa.id
          }
      this.$store.dispatch('editarTarefa', NovaTarefa)
      this.dialog = false
    }
  }
};
</script>

<style>
</style>