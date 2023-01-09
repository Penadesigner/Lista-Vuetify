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
        >{{ tarefa.titulo }}
      </v-list-item-title>

      <template v-slot:append >
        <TarefaMenu :tarefa="tarefa" />
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import TarefaMenu from "./TarefaMenu.vue";
/* eslint-disable */
export default {
  components: { TarefaMenu },
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
    handleRemoveTarefa(id) {
      this.$store.commit("removeTarefa", id);
    },
  },
};
</script>

<style>
.red {
  background: #89a5e2;
}
</style>