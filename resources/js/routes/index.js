// import Homepage from '../pages/Homepage.vue'
// import About from '../pages/About.vue'
// import Contact from '../pages/Contact.vue'
// import Dashboard from '../pages/Dashboard.vue'
function lazyLoad(pages){
    //return() => import(`@/views/${pages}.vue`)
    return() => import(`../pages/${pages}.vue`)
  }

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: lazyLoad('Dashboard')
        },
        {
            path: '/Invoice_estimate',
            name: 'Invoice_estimate',
            component: lazyLoad('Invoice_estimate')
          },
          {
            path: '/Admin',
            name: 'Admin',
            component: lazyLoad('Admin')
          },
          {
            path: '/Admin-Ship-Schedule',
            name: 'Admin-Ship-Schedule',
            component: lazyLoad('Admin-Ship-Schedule')
          },
          {
            path: '/Admins',
            name: 'Admins',
            component: lazyLoad('Admins')
          },
      
          {
            path: '/Registration',
            name: 'Registration',
            component: lazyLoad('Registration')
          },
          {
            path: '/User-Table',
            name: 'User-Table',
            component: lazyLoad('User')
          },
          {
            path: '/Enquiries',
            name: 'Enquiries',
            component: lazyLoad('Enquiries')
          },
          {
            path: '/Payment',
            name: 'Payment',
            component: lazyLoad('Payment')
          },
          {
            path: '/Login',
            name: 'Login',
            component: lazyLoad('Login')
          },
          {
            path: '/about',
            name: 'about',
            component: lazyLoad('About')
          },
    ]
}
