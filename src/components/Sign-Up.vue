<template>
 <img class="logo" alt="logo" src="../assets/logo.jpg"/>
<h1>Sign Up</h1>
    <div class="registration">
        <input type="text" placeholder="Enter Your Name" v-model="signup.name" />
        <input type="text" placeholder="Enter Email" v-model="signup.email"/>
        <input type="password" placeholder="Enter Password" v-model="signup.password" />
        <button v-on:click="SignUp">Sign Up</button>
        <p>
            <router-link to="/signin">Login</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Sign-Up',
    data(){
        return{
            signup:{
                name:null,
                email:null,
                password:null,
            }
        }
    },
    methods:{
       async SignUp(){
            let result= await axios.post('http://localhost:3000/users',this.signup)
        
            if(result.status==201){
                localStorage.setItem("user-info",JSON.stringify(result.data))
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
