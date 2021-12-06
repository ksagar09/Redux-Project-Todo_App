// reducer holds current state and actions together

const initialData = {
    list: [] //we are getting input data here
}
// this is like const[list, setList] = useState([])

const Reducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;

            return {
                ...state, //previous state or data 
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data,
                    }

                ]
            }

        case "DELETE_TODO":
            const newList= state.list.filter((elem) => elem.id != action.id)
            return {
                ...state, //previous state or data 
                list: newList, 
            }
            case "REMOVE_TODO": return {
                ...state,
                list: [],
            }

        default: return state;
    }
}

export default Reducer;