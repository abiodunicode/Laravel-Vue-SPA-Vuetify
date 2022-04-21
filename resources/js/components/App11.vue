<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item >
        <v-list-item-content>
          <v-img
  lazy-src="https://nigerian-shipping.org/wp-content/uploads/2021/04/comet-590x357.png"
   height="40"
   width="250"
    contain
  src="https://nigerian-shipping.org/wp-content/uploads/2021/04/comet-590x357.png"
></v-img>   
</v-list-item-content>
  </v-list-item>
     <v-divider></v-divider>

        <navbar/>
      <!--  -->
         <template v-slot:append>
        <div class="pa-2">
          <v-btn
          
           block>
           <v-icon>mdi-logout</v-icon>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
 <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>
   

    <v-main>
      <!--  -->
      <div  class="pa-6">
 <router-view></router-view>
    </div>
    </v-main>
  </v-app>
</template>

<script>
    import Navbar from './Navbar'
   // import Head from './headerz'
    export default {
         name: 'App',
        components: {
            'navbar': Navbar,
        //    'head': Head,
          

        },
    data: () => ({ drawer: null }),
  }
</script>