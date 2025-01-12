import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' }, // our-domamin.com => TeamsList
    {
      path: '/teams',
      component: TeamsList,
      children: [
        { path: ':teamId', component: TeamMembers, props: true }, // our-domamin.com/:teamId => TeamMembers
      ],
    }, // our-domamin.com/teams => TeamsList
    { path: '/users', component: UsersList }, // our-domamin.com/users => UsersList

    { path: '/:notFound(.*)', component: NotFound }, // our-domamin.com/something => NotFound
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);

app.use(router);

app.mount('#app');
