const routerTags = {
  state: {
    Tags: [{
      path: {
        path: '/'
      },
      title: '首页'
    }]
  },
  mutations: {
    ADD_TAGS: (state, data) => {
      console.log(data)
      let {meta,path} = data
      let o = {
        path:{
          path:path
        },
        title:meta.title
      }
      state.Tags.push(o)
    }
  },
  actions: {

  }
}

export default routerTags;
