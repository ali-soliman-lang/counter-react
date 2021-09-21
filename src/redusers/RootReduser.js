// state
const initState = {
    count : 0,
}

// reduser 
const reduser = (state = initState , action) => {
    if (action.type === 'INCREASE') {
        return {count : state.count + 1 }
    } else if (action.type === 'DECREASE') {
        return {count : state.count - 1 }
    } else {
        return state;
    }
}



export default reduser;