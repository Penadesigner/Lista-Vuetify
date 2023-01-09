<template>
  <div>
    <v-col cols="12">
      <v-text-field
        v-model="campoInput"
        label="Nova Tarefa"
        variant="outlined"
        @keyup.enter="handleAddTarefa"
      ></v-text-field>
    </v-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      campoInput: null,
    };
  },
  methods: {
    handleAddTarefa() {
      if (this.campoInput != "") {
        this.$store.dispatch("adicionarTarefa", this.campoInput);
        this.campoInput = "";
      }
    },
  },
};
</script>

<style>
</style>