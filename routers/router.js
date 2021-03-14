import Vue from 'vue'
import Router from 'vue-router'

import MonsterGame from "@/components/MonsterGame/MonsterGame";
import Authorization from "@/components/register/Authorization";
import Login from "@/components/register/Login";
import Broker from "@/components/Broker/Broker"
Vue.use(Router)

const router = new Router({
    routes:[
        {
            path:'/',
            component:{
             render(c){
                 return c('router-view');
             }
            },
            children:[
                {
                    path:'/game',
                    name:'MonsterGame',
                    component: MonsterGame
                },
                {
                    path:'/regist',
                    name:'register',
                    component: Authorization
                },
                {
                    path:'/login',
                    name:'register',
                    component: Login
                },
                {
                    path:'/broker',
                    name:'Broker',
                    component: Broker
                },
            ]
        }
    ]
})

export default router;