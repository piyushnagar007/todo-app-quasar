export function addTask (state, data) {
    state.tasks.push(data);
}

export function removeTask(state, index){
    state.tasks.splice(index, 1);
}
