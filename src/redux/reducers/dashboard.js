const initialState = {
    sidebar: 'full'
}

export default function dashboard(state = initialState, action) {
    switch (action.type) {
        case 'SET_SIDEBAR_STATE':
            return { ...state, sidebar: action.payload }

        default:
            return state;
    }
}