import { createWebHistory, createRouter } from 'vue-router';
import HomeComp from './components/HomeComp.vue';
import SignUp from './components/Sign-Up.vue';
import SignIn from './components/SignInComp.vue';
import UpdatePage from './components/UpdatePage.vue'
import AddRest from './components/AddRest.vue'



const routes = [
	
    {
		path: '/',
		name: 'HomeComp',
		component: HomeComp ,
	},
    {
		path: '/signup',
		name: 'SignUp ',
		component:SignUp ,
	},
    {
		path: '/signin',
		name: 'SignIn ',
		component:SignIn ,
	},
	{
		path: '/updatepage/:id',
		name: 'UpdatePage ',
		component:UpdatePage ,
	},
	{
		path: '/addrest',
		name: 'AddRest ',
		component:AddRest ,
	},
    
    
    
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;