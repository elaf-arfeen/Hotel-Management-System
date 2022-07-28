<template>
<img class="logo" alt="logo" src="../assets/logo.jpg"/>
    <h1>Sign In</h1>
    <div class="login">
        <input type="text" placeholder="Enter Email" v-model="signin.email"/>
        <input type="password" placeholder="Enter Password" v-model="signin.password" />
        <button v-on:click="SignIn">Sign In</button>
         <p>
            <router-link to="/signup">Sign Up</router-link>
        </p>
    </div>
    
</template>
<script>
import axios from 'axios'
export default {
    name:'SignInComp',
    data(){
        return{
             signin:{
                email:null,
                password:null,
            }
        }
    },
    methods:{
       async SignIn(){
           let result= await axios.get(`http://localhost:3000/users?email=${this.signin.email}&password=${this.signin.password}`)
           console.log(result);
            if(result.status==200 && result.data.length>0){
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'HomeComp'})
            }
        }
    },
    mounted(){
      let user=localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'HomeComp'})
        }
    }
}
</script>
