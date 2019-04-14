// 根据路由名字创建组件实例
function createComponent (name) {
  let comp = null
  switch (name) {
    case 'one':
      comp = { template: '<div>One</div>' }
      break
    case 'two':
      comp = { template: '<div>Two</div>' }
      break
    case 'three':
      comp = { template: '<div>Three</div>' }
      break
    default:
      break
  }
  return comp
}

// 模拟从远程服务获取路由信息
function fetchRoutes () {
  /**
   *  ... ...
   */
  // 假如获取到的路由信息为
  let result = [
    { path: '/one', name: 'one'},
    { path: '/two', name: 'two'},
    { path: '/three', name: 'three'}
  ]
  let routes = []
  result.forEach(item => {
    routes.push({ path: item.path, name: item.name, component: createComponent(item.name) })
  })
  return routes
}

// 获取路由
const routes = fetchRoutes()

// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})