<template>
 <HeaderComp/>
    <h1>Hello {{users.name}} Welcome to Home Component</h1>
    <table border="1">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Contect</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in restaurnet" :key="item.id">
      <th scope="row">{{item.id}}</th>
      <td>{{item.name}}</td>
      <td>{{item.contact}}</td>
      <td>{{item.address}}</td>
      <td>
        <router-link :to="`/updatepage/`+item.id">Update</router-link>
        <button v-on:click="deleteUsers(item.id)" class="btn btn-link" >Delete</button>
        </td>
      
      
    </tr>
    
  </tbody>
</table>
   
</template>
<script>
import axios from 'axios'
import HeaderComp from './HeaderComp.vue';
export default {
    name:'HomeComp',
    components:{
        HeaderComp,
    },
    data(){
        return{
           users:{
            name:''
           },
           restaurnet:[]
        }
    },
    methods:{
       async getList(){
              let result = await axios.get('http://localhost:3000/restaurnet')
        this.restaurnet=result.data
        },
    deleteUsers(id){

            axios.delete(`http://localhost:3000/restaurnet/${id}`)
        .then((result)=>{
           if(result.status==200){
 alert("Succefully Deleted  Record")
           }
          
        
            this.getList()
        })
        }
    },
    async mounted(){
        let user=localStorage.getItem('user-info');
        this.users.name=JSON.parse(user).name
        if(!user){
            this.$router.push(`/signup`)
        }
        
         this.getList()
    }
}
</script>
<style scoped>
table{
 margin-left: auto;
 margin-right: auto;
    
}
td{
    width:160px;
    height: 40px;
}
</style>