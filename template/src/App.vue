<template>
  <div>
  <h1 class="title"> This is from the App component</h1>
  <h2>{{msg}}</h2>
  <hr>
  <div class="container">
    
    <div class="navbar is-primary" >
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">menu1</div>
      <div class="navbar-item">menu2</div>
    </div>
    
    
  </div>
  </div>

  
  <div class="container">
  <div   class="columns">
    <div class="column is-half"></div>
    <div class="column is-one-quarter">

      <router-view></router-view>
    </div>

  </div>
  </div>

  <footer class="footer">
  <div class="container">
    <div class="content has-text-centered">
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </div>
  </div>
</footer>
  </div>
</template>


<script>
 
import Hello from './components/Hello.vue'
 export default {
   name :'App',
   data : function(){
     return {
       msg : "SUPERDUPER"
     }
   },
   methods: {


   },
   components:{
     'Hello':Hello
   }
 }
 
</script>

<style scoped>

</style>
