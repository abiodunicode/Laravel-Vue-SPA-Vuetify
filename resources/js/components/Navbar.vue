<template>
         <v-list dense>
            <v-list-item 
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
          
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          
        </v-list>

        
   </template>

<script>
    export default {
        data() {
            return {
                drawer: true,
                 items: [
          { title: 'Dashboardss', icon: 'mdi-view-dashboard', to:'/' },
          { title: 'Dashboard', icon: 'mdi-view-dashboard', to:'/dashbaord' },
          { title: 'Login For Detials', icon: 'mdi-lock', to:'/Registration' },
          { title: 'Enquiries', icon: 'mdi-information-outline', to:'/Enquiries' },
          { title: 'Shpping Invoice', icon: 'mdi-receipt', to:'/Invoice_estimate' },
          { title: 'Payment', icon: 'mdi-cash', to:'/Payment' },
          { title: 'Admin', icon: 'mdi-cash', to:'/Admin' },
          { title: 'Admins', icon: 'mdi-cash', to:'/Admins' },
          
        ],
            }
            
        },
    }
</script>
