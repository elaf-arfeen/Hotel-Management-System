<template>
 
 <router-view/>
  
</template>

<script>


export default {

  name: 'App',
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
body{
padding: 0;
margin: 0;
}
.logo{
    width:100px;
}
.registration input, .login input, .add-rest input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 20px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue
}
.registration button,.login button,.add-rest button{
    width: 200px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: white;
    cursor: pointer;
}
</style>
