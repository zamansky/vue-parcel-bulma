<template>
  <div class="container">
    <h1 class="title"> hello {{msg}} ! </h1>

    <span class="has-text-info">
    <i class="icon fas fa-info-circle"></i>
</span>
    <i class="icon mdi is-primary is-large mdi-battery-10"></i>

    </div>
</template>


<script>

 export default {
   name :'hello',
   data : function(){
     return {
       msg: "Zowie"
     }
   },
   methods: {


   },
   components:{

   }
 }
 
</script>

<style scoped>

</style>
