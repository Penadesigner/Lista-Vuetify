<template>
  <div class="flex m-10">
    <draggable class="dragArea list-group w-full" :list="tarefasComputadas">
      <div
        class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center iten"
        v-for="element in tarefasComputadas"
        :key="element.id"
      >
        <Tarefa :tarefa="element"/>
      </div>
    </draggable>
  </div>
</template>
<script>
  import { defineComponent } from 'vue'
  import { VueDraggableNext } from 'vue-draggable-next'
  import Tarefa from '@/components/tarefas/Tarefa.vue'
  export default defineComponent({
    components: {
      draggable: VueDraggableNext,
      Tarefa
    },
    data() {
      return {
        enabled: true,
        dragging: false,
      }
    },
    computed: {
        tarefasComputadas(){
            return this.$store.state.tarefas
        }
    }
  })
</script>

<style scoped>
.iten {
  cursor: pointer;
}
</style>