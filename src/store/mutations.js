let findIndex = (list,id) =>{
    let result =-1;
    list.forEach((item,index)=> {
        if(item.id === id) {
            result = index
        }
    });
    return result
}
export default {
    setAllTasks ( state,data ){
        state.tasks = data
    },
    setTask ( state,data ){
        state.task = data
    },
    mutationsChangeCompleteTask(state,data){
        let index = findIndex(state.tasks,data.id)
        let tmp = state.tasks[index]
        tmp.isDone = !data.isDone
        state.tasks[index] = tmp
    },
    mutationsDeleteTask(state,data){
        let index = findIndex(state.tasks,data.id)
        let tmp = state.tasks
        tmp.splice(index,1)
        state.tasks = tmp
    }
}