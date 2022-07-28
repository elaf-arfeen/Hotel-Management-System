<template>
<HeaderComp/>
    <h1>Update Restaurnet</h1>
      <form class="add-rest">
          <input type="text" placeholder="Enter Restaurnet Name" v-model="rest.name" />
        <input type="text" placeholder="Enter Contact Number" v-model="rest.contact"/>
        <input type="text" placeholder="Enter Address" v-model="rest.address" />
        <button v-on:click="UpdateRest" >Update Restaurnet</button>
    </form>
</template>
<script>
import HeaderComp from './HeaderComp.vue'
import axios from 'axios'
export default {
    name:'UpdatePage',
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
    async UpdateRest(e){
         e.preventDefault();
        let id=this.$route.params.id;
        let result= await axios.put(`http://localhost:3000/restaurnet/${id}`,this.rest)
            if(result.status==200){
             alert("Successfully Aded Restaunet")
                 this.$router.push(`/`)
            }
    },
    
},
 async mounted(){
        let user=localStorage.getItem('user-info');
        if(!user){
            this.$router.push(`/signup`)
        }
        let id=this.$route.params.id;
        let result= await axios.get(`http://localhost:3000/restaurnet/${id}`)
        this.rest=result.data
        
    }
}
</script>