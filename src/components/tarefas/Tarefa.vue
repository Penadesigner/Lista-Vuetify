<template>
  <div>
    <v-list-item
      :value="tarefa.titulo"
      @click="status()"
      :class="{ red: tarefaStatus }"
    >
      <template v-slot:prepend="{}">
        <v-list-item-action>
          <v-checkbox-btn :model-value="tarefa.concluido"></v-checkbox-btn>
        </v-list-item-action>
      </template>

      <v-list-item-title
        :class="{ 'text-decoration-line-through': tarefaStatus }"
        >{{ tarefa.titulo }}</v-list-item-title
      >
        <template v-slot:append>
          <v-btn
            color="red-lighten-1"
            icon="mdi-trash-can"
            variant="text"
            @click.stop="handleRemoveTarefa(tarefa.id)"
          ></v-btn>
        </template>

    </v-list-item>

    <v-divider></v-divider>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Tarefa",
  data() {
    return {
      tarefaStatus: this.tarefa.concluido,
    };
  },
  props: ["tarefa"],
  methods: {
    status() {
      this.tarefa.concluido = !this.tarefa.concluido;
      this.tarefaStatus = !this.tarefaStatus;
    },
    handleRemoveTarefa(id){
        this.$store.commit('removeTarefa',id)
    }
  },
};
</script>

<style>
.red {
  background: #89a5e2;
}
</style>