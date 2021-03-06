import Vue from 'vue';
import VueRouter from "vue-router";
import ItemView from "../views/ItemView";
import UserView from "../views/UserView";
import createListView from "../views/CreateListView";

Vue.use(VueRouter);

export const router = new VueRouter({
   mode: 'history',
   routes: [
       {
           // path: url 주소
           path: '/news',
           name: 'news',
           // component: url 주소로 갔을 때 표시될 컴포넌트
           component: createListView('NewsView'),
       },
       {
           path: '/ask',
           name: 'ask',
           component: createListView('AskView'),
       },
       {
           path: '/jobs',
           name: 'jobs',
           component: createListView('JobsView'),
       },
       {
           path: '/item/:id',
           component: ItemView
       },
       {
           path: '/user/:id',
           component: UserView
       }
   ]
});