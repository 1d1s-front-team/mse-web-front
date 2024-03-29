import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _38e907de = () => interopDefault(import('../pages/board.vue' /* webpackChunkName: "pages/board" */))
const _84146d66 = () => interopDefault(import('../pages/gallery/index.vue' /* webpackChunkName: "pages/gallery/index" */))
const _03104762 = () => interopDefault(import('../pages/schedule.vue' /* webpackChunkName: "pages/schedule" */))
const _d66ef3bc = () => interopDefault(import('../pages/auth/register.vue' /* webpackChunkName: "pages/auth/register" */))
const _7db7ca5f = () => interopDefault(import('../pages/auth/register-failure.vue' /* webpackChunkName: "pages/auth/register-failure" */))
const _92ba1750 = () => interopDefault(import('../pages/auth/register-success.vue' /* webpackChunkName: "pages/auth/register-success" */))
const _130fbaf5 = () => interopDefault(import('../pages/gallery/_id.vue' /* webpackChunkName: "pages/gallery/_id" */))
const _68846bca = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/board",
      component: _38e907de,
      name: "board"
    }, {
      path: "/gallery",
      component: _84146d66,
      name: "gallery"
    }, {
      path: "/schedule",
      component: _03104762,
      name: "schedule"
    }, {
      path: "/auth/register",
      component: _d66ef3bc,
      name: "auth-register"
    }, {
      path: "/auth/register-failure",
      component: _7db7ca5f,
      name: "auth-register-failure"
    }, {
      path: "/auth/register-success",
      component: _92ba1750,
      name: "auth-register-success"
    }, {
      path: "/gallery/:id",
      component: _130fbaf5,
      name: "gallery-id"
    }, {
      path: "/",
      component: _68846bca,
      name: "index"
    }],

    fallback: false
  })
}
