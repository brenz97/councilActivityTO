import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '@/components/AppHome.vue';
import VoteDetail from '@/components/VoteDetail.vue';

const routes = [
  { path: '/', component: AppHome },
  { path: '/vote/:id', component: VoteDetail, name: 'VoteDetail', props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
