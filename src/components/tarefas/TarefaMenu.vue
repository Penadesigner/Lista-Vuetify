<template>
  <div>
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
          @click.stop=""
        >
          <v-icon >
            mdi-dots-vertical
          </v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.click()"
        >
          <v-icon >
            {{ item.icone }}
          </v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <ModalEditar v-if="items[0].modal" @fechaModal="items[0].modal = false" :tarefa="tarefa"/>
    <ModalDelete v-if="items[1].modal" @fechaModal="items[1].modal = false" :tarefa="tarefa"/>
  </div>
</template>

<script>
import ModalEditar from '../Modal/ModalEditar.vue';
import ModalDelete from '../Modal/ModalDelete.vue';

  export default {
  components: { ModalEditar, ModalDelete },
  props: ['tarefa'],
    data: () => ({
      items: [
        { icone: 'mdi-pencil', title: 'Editar', modal: false, 
        click(){
            console.log('editar')
            this.modal = true
        }},
        { icone: 'mdi-trash-can', title: 'Excluir', modal: false,
        click(){
            console.log('excluir');
            this.modal = true
        }} 
      ],
    }),
  }
</script>

<style>

</style>