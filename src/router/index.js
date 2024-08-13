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
// female page import
import FaceCare from '@/components/femalePanel/ourServices/FaceCare.vue'
import HairStyle from '@/components/femalePanel/ourServices/HairStyle.vue'
import HairCut from '@/components/femalePanel/ourServices/HairCut.vue'
import Colouring from '@/components/femalePanel/ourServices/Colouring.vue'
import WaxList from '@/components/femalePanel/ourServices/WaxList.vue'
import HairTreatment from '@/components/femalePanel/ourServices/HairTreatment.vue'
import ThreadingList from '@/components/femalePanel/ourServices/ThreadingList.vue'
import MakeupList from '@/components/femalePanel/ourServices/MakeupList.vue'
import BridalList from '@/components/femalePanel/ourServices/BridalList.vue'
import Massage from '@/components/femalePanel/ourServices/Massage.vue'
import PedicureList from '@/components/femalePanel/ourServices/PedicureList.vue'
import ManicureList from '@/components/femalePanel/ourServices/ManicureList.vue'

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
    // Female routes
    ,
    {
      path: '/FaceCare',
      name: "FaceCare",
      component: FaceCare
    },
    {
      path: '/HairStyle',
      name: "HairStyle",
      component: HairStyle
    },
    {
      path: '/HairCut',
      name: "HairCut",
      component: HairCut
    },
    {
      path: '/Colouring',
      name: "Colouring",
      component: Colouring
    },
    {
      path: '/WaxList',
      name: "WaxList",
      component: WaxList
    },
    {
      path: '/HairTreatment',
      name: "HairTreatment",
      component: HairTreatment
    },
    {
      path: '/ThreadingList',
      name: "ThreadingList",
      component: ThreadingList
    },
    {
      path: '/MakeupList',
      name: "MakeupList",
      component: MakeupList
    },
    {
      path: '/BridalList',
      name: "BridalList",
      component: BridalList
    },
    {
      path: '/Massage',
      name: "Massage",
      component: Massage
    },
    {
      path: '/PedicureList',
      name: "PedicureList",
      component: PedicureList
    },
    {
      path: '/ManicureList',
      name: "ManicureList",
      component: ManicureList
    }
  ]
})

export default router
