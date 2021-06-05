const initialState = {
    users: [],
}

const usersReducer = (prevState: any = initialState, action: any) => {
    switch (action.type) {
        /* payload { name: '', id: new Date().getTime() } */
        case 'USER_ADD':
            return {
                users: [...prevState.users, action.payload],
            }
        case 'USER_UPDATE':
            /* payload { id: 1231231341234234, name: 'Juan' } */
            const id = action.payload.id
            const nL = prevState.users.map((u: any) => {
                if (u.id === id) return action.payload
                return u
            })
            return {
                users: nL,
            }
        case 'USER_DELETE':
            return {
                users: [],
            }
        default:
            return prevState
    }
}

export default usersReducer