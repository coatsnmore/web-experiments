import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  created: function () {
    // initial lifecycle event
  },
  computed: {
    ViewComponent() {
      let matchingView = routes[this.currentRoute];
      //TODO fix uri matching or change to hashes
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render(h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
})