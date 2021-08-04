interface actionsModel {
    commit:Function,
    state:Object
}
export default {
    namespaced: true,
    state: {
      token:"xxxxxx",
      isCollapse: false,
      title:"setting标题"
    },
    mutations: {
      setIsCollapse(state:Object, status:boolean):void {
        state.isCollapse = status
      },
      setTitle(state:Object, status:string):void {
        state.title = status
      }
    },
    actions:{
        actionSetTitle(action:actionsModel):void{
            action.commit('setTitle','新标题')
        }
    }
  }