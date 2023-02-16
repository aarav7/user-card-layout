import { useReducer } from 'react'
import UserContext from './user-context'

const initialValue = {
    users: [],
    isLoading: false,
    error: null
}

const reducer = (state, action) => {

    if (action.type === 'GET_USERS') {
        return {
            ...state,
            isLoading: true,
        }
    }

    if (action.type === 'GOT_USERS') {
        return {
            ...state,
            users: action.data,
            isLoading: false,
        }
    }

    if (action.type === 'ERROR') {
        return {
            ...state,
            isLoading: false,
            error: action.errMsg
        }
    }
}

const UserProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    function getUsers() {
        dispatch({ type: "GET_USERS" });
    }

    function gotUsers(users) {
        dispatch({ type: "GOT_USERS", data: users });
    }

    function errors(msg) {
        dispatch({ type: "ERROR", errMsg: msg });
    }

    const userContext = {
        ...state,
        getUsers,
        gotUsers,
        errors
    }

    return (
        <UserContext.Provider value={userContext}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;