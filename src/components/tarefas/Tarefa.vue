<template>
<div>
    <v-list-item :class="{'red lighten-1':tarefa.concluido}" @click="teste(tarefa.concluido)">
        <template v-slot:default="{}">
        <v-list-item-action>
            <v-checkbox :input-value="tarefa.concluido"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
            <v-list-item-title>{{tarefa.titulo}}</v-list-item-title>
        </v-list-item-content>
        </template>
    </v-list-item>

    <v-list-item-action>
      <v-btn icon @click.stop="handlerRemoveTarefa(tarefa.id)">
        <v-icon color="red lighten-1">
          mdi-trash-can
        </v-icon>
      </v-btn>
    </v-list-item-action>
</div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Tarefa',
    // eslint-disable-next-line
    props:['tarefa'],
    methods: {
        handlerRemoveTarefa(id){
            this.$store.commit('removeTarefa',id)
        },
        teste(status){
            status = !status
        }
    }
}
</script>

<style>

</style>