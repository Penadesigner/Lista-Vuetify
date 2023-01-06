<template>
  <v-app id="inspire">
    <!-- MENU -->
    <v-navigation-drawer
      v-model="drawer"
      class="bg-deep-purple"
      theme="dark"
      permanent
    >
      <v-list>
        <v-list-item v-for="item in items" :key="item.id" :to="item.to">
        <v-icon>{{item.icon}}</v-icon>
        <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      </v-list>

      <template v-slot:append><div class="pa-2"><v-btn block> Logout</v-btn></div></template> 

    </v-navigation-drawer>
    <!-- MENU FIM -->

    <!-- CABECALHO -->
      <v-app-bar
        app
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Title</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
    <!-- CABECALHO FIM -->

    <!-- CONTEUDO -->
    <v-main>
      <router-view/>
    </v-main>
    <!-- CONTEUDO FIM -->
  </v-app>
</template>

<script>
export default {
  data: () => ({ 
    drawer: null,
    items: [
      {id: 1, title: "Nome", icon: 'mdi-view-dashboard', to:"/" },
      {id: 2, title: "Sobrenome", icon: 'mdi-view-dashboard', to:"/sobre" }
    ]
  
  }),
};
</script>



<style>
#corpo .v-navigation-drawer__content {
  box-shadow: rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px,
    rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px,
    rgb(0 0 0 / 9%) 0px -3px 5px;
}

.v-list-item__content {
  display: flex;
  align-items: center;
}

.v-list-item__content i {
  margin-right: 0.3em;
}
</style>