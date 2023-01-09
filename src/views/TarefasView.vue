<template>
  <div>
    <ListaTarefas/>

    <div class="animate__animated animate_bounceInUp" v-if="!$store.state.tarefas.length">
      <center>
        <v-icon
        size="100"
        color="primary">
          mdi-check
        </v-icon>
        <div class="primary--text">
          Sem Tarefas no momento
        </div>
      </center>
    </div>

  </div>
</template>

<script>
import ListaTarefas from "@/components/tarefas/ListaTarefas.vue";

export default {
  components: { ListaTarefas },
  created() {
    this.$store.commit("buscarTarefa");
  },
};
</script>

<style>
</style>