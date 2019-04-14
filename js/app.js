let app = new Vue({
  el: '#app',
  data: {
    msg: '路由测试',
    menus: []
  },
  router: router,
  mounted () {
    this.getMenus()
  },
  methods: {
    toThree () {
      this.$router.push('/three')
    },
    getMenus () {
      let routes = this.$router.options.routes
      let menus = []
      routes.forEach(item => {
        menus.push({ name: item.name , path: item.path })
      })
      this.menus = menus
    }
  }
})
