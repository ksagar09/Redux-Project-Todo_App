// We are defining 3 actions here will be 
// 1. Add Data 
// 2. Delete Data 
// 3. Delete All Data 

export const AddTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload : {
            id: new Date().getTime().toString(),
            data: data,
        }
    }
}

export const DeleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id //we cau use payload also
    }
}

export const RemoveToDo = () => {
    return {
        type: 'REMOVE_TODO'
    }
}
