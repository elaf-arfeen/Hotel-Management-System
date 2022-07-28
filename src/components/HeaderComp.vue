<template>
<div class="nav">
    <router-link to="/"  >Home</router-link>
    <router-link to="/addrest"   >Add Restaurnet</router-link>
    <a v-on:click="logout" href="#" >Logout</a>
    </div>
    
</template>
<script>
export default {
    name:'HeaderComp',
    methods:{
        logout(){
            localStorage.clear();
             this.$router.push(`/signin`)
        }
    }
}

</script>
<style scoped>
.nav{
background-color: #333;
overflow: hidden;
}
.nav a{
        float: left;
    color: white;
    margin-right: 5px;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
}
.nav a:hover{
    background: #ddd;
    color: #333;
}
</style>