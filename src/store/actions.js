import ApiCaller from "@/util/ApiCaller";
export default {
    async getAllTasks( {commit} ){
        const data = await ApiCaller('items','GET',null)
        commit('setAllTasks',data.data);
    },
    async getTask( {commit}, data ){
        const task = await ApiCaller(`items/${data}`,'GET',null)
        commit('setTask',task.data);
    },
    async changeComlateTask( {commit},data ){
        await ApiCaller(`items/${data.id}`,'PUT',{isDone : !data.isDone}).then(()=>{
            commit('mutationsChangeCompleteTask',data)
        }).catch(()=>{
            alert('that bai')
        })
    },
    async addTask(state,data){
        return await ApiCaller('items','POST',data)
    },
    async deleteTask({commit},data){
        await ApiCaller(`items/${data.id}`,'Delete',null)
        .then(() => {
            commit('mutationsDeleteTask',data)
        }).catch(()=>{
            alert('that bai')
        })
    }
}