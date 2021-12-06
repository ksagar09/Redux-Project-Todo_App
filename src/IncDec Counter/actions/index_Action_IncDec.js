export const incNumber = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const decNumber = (num) => {
    return {
        type: 'DECREMENT',
        payload: num

    }
};

export const MulNumber = (num) => {
    return {
        type: 'MULTIPLICATION',
        payload: num

    }
};

export const DivNumber = () => {
    return {
        type: 'DIVISION',

    }
};

