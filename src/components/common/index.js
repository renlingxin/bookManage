// 注册公共组件
const publicComs = {
  renPagination : () => import('./ren-pagination')
}
const publicCom = (Vue) => {
  Object.keys(publicComs).forEach(item => {
    Vue.component(item,publicComs[item])
  })
}
export default publicCom;
