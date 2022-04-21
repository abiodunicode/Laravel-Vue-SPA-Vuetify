<template>
  <v-data-table 
 
    :headers="headers"
    :items="op_info"
    :items-per-page="5"
    class="elevation-1 "
  >
  
   <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Vessel Arrival/Departure</v-toolbar-title>
          <v-spacer></v-spacer>
         
        </v-toolbar>
      </template>
  </v-data-table>
 
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'LINE/AGC',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'VESSEL NAME', value: 'vessl_name' },
          { text: 'VOY NO', value: 'voy_no' },
          { text: 'RTN NO', value: 'rtn_no' },
          { text: 'CARGO', value: 'cargo' },
          { text: 'STATUS', value: 'status' },
        ],
        op_info: [
          {
           
            vessl_name: 'MSC CAPRI',
            voy_no: "ZA145A",
            rtn_no: "TC21-000",
            cargo: "BERTHED",
            status: "INVOICING",
           
          },
          
        
        
         
         
        ],
      }
    },
  }
</script>


<style>

</style>