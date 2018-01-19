import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from './../components/Login.vue'
import HomePage from './../components/Home.vue'

import UserWrapper from './../components/User/UserWrapper.vue'
import UserTable from './../components/User/UserTable.vue'
import UserProfileWrapper from './../components/User/UserProfileWrapper.vue'
import UserProfileDetail from './../components/User/Detail/UserProfileDetail.vue'
import UserTransDetail from './../components/User/Detail/UserTransDetail.vue'
import UserAnalysisDetail from './../components/User/Detail/UserAnalysisDetail.vue'

import TransactionPage from './../components/Transaction/Transaction.vue'
import TransactionDetailPage from './../components/Transaction/TransactionDetail.vue'
import TransactionTablePage from './../components/Transaction/TransactionTable.vue'

Vue.use(Router)

export default new Router( {
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/home',
      name: 'Home',
      component: HomePage,
      children: [
        // when /user/:id is matched
        // { path: ':id/type', component: TypePage, name: 'TypePage' },
        { 
          path: 'user', 
          component: UserWrapper, 
          name: 'UserWrapper',
          children: [
            { path: '', component: UserTable, name: 'UserTable' },
            { 
              path: 'profile/:id', 
              component: UserProfileWrapper, 
              name: 'UserProfileWrapper',
              children: [
                { path: '', component: UserProfileDetail, name: 'UserProfileDetail' },
                { path: 'trans', component: UserTransDetail, name: 'UserTransDetail' },
                { path: 'analysis', component: UserAnalysisDetail, name: 'UserAnalysisDetail' }
              ]
            },
          ]
        },
        { 
          path: 'transaction', 
          component: TransactionPage, 
          name: 'Transaction',
          children: [
            { path: '', component: TransactionTablePage, name: 'TransactionTable' },
            { path: 'detail/:id', component: TransactionDetailPage, name: 'TransactionDetail' }
            // { path: '/:id/detail', component: }
          ]
        },
      ],
    }
  ]
} )
