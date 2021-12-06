const initialState = 5;

const multTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "MULTIPLICATION": return state * 5;
        case "DIVISION": return state / 5;

        default: return state;
    }
}

export default multTheNumber;