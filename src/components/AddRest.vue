<template>
<HeaderComp/>
    <h1>Add Restaurnet</h1>
    <form class="add-rest">
          <input type="text" placeholder="Enter Restaurnet Name" v-model="rest.name" />
        <input type="text" placeholder="Enter Contact Number" v-model="rest.contact"/>
        <input type="text" placeholder="Enter Address" v-model="rest.address" />
        <button v-on:click="RegisterRest" >Add Restaurnet</button>
    </form>
    
</template>
<script>
import HeaderComp from './HeaderComp.vue'
import axios from 'axios'
export default {
    name:'AddRest',
    components:{
    HeaderComp,
},
data(){
        return{
            rest:{
                name:'',
                contact:'',
                address:''
            }
        }
},
methods:{
       async RegisterRest(e){
            e.preventDefault();
           
             let result= await axios.post('http://localhost:3000/restaurnet',this.rest)
            if(result.status==201){
                alert("Successfully Aded Restaunet")
                 this.$router.push({name:'HomeComp'})
            }
            
             
        }
},
 mounted(){
        let user=localStorage.getItem('user-info');
        if(!user){
            this.$router.push(`/signup`)
        }
    }
}
</script>