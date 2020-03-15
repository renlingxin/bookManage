// 动态设置-浏览器标签的title
export const showTitle = (data) => {
  let {
    title
  } = data.meta
  let resTitle = title ? '书园-' + title : '书园-'
  window.document.title = resTitle
}
