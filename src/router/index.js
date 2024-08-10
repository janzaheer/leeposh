import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/home/Home.vue'
import FemaleDashboard from '../components/femalePanel/homePage/FemaleDashboard.vue'
import MaleDashboard from '../components/malePanel/homePage/MaleDashboard.vue'
import HairCareList from '@/components/malePanel/ourServices/HairCareList.vue'
import FaceCareList from '@/components/malePanel/ourServices/FaceCareList.vue'
import ColouringList from '@/components/malePanel/ourServices/ColouringList.vue'
import WaxingList from '@/components/malePanel/ourServices/WaxingList.vue'
import MassageList from '@/components/malePanel/ourServices/MassageList.vue'
import GroomingList from '@/components/malePanel/ourServices/GroomingList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/femaledashboard',
      name: 'FemaleDashboard',
      component: FemaleDashboard
    },
    {
      path: '/maledashboard',
      name: 'MaleDashboard',
      component: MaleDashboard
    },
    {
      path: '/HairCareList',
      name: "HairCareList",
      component: HairCareList
    },
    {
      path: '/FaceCareList',
      name: "FaceCareList",
      component: FaceCareList
    },
    {
      path: '/ColouringList',
      name: "ColouringList",
      component: ColouringList
    },
    {
      path: '/WaxingList',
      name: "WaxingList",
      component: WaxingList
    },
    {
      path: '/MassageList',
      name: "MassageList",
      component: MassageList
    },
    {
      path: '/GroomingList',
      name: "GroomingList",
      component: GroomingList
    }
  ]
})

export default router
