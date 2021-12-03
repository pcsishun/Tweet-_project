import VueRouter from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import Tweet from './components/Tweet.vue'
import EditProfile  from './components/EditProfile.vue'

const routes = [
    {path:'/', component: LoginPage},
    {path:'/LoginPage', component: LoginPage},
    {path:'/tweetboard', component: Tweet},
    {path:'/updateprofile', component: EditProfile}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router