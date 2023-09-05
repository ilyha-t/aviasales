const initialState = {
    tab: 1,
    tickets: {
        tickets: [],
        sortedTickets: []
    },
    loading: false,
    error: null,
    showTicket: 3,
    filters: {
        total: 5,
        checked: [1, 2, 3, 4, 5]
    }
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_TICKETS_START':
            return {...state, loading: true, error: null};
        case 'GET_TICKETS_SUCCESS':
            return {...state, loading: false,error: null, tickets: {...state.tickets, ...action.payload}};
        case 'GET_TICKETS_ERROR':
            return {...state, loading: false, error: action.payload};
        case 'SORT_BYE_PRICE':
            return {...state, tab: action.payload.tab, tickets: {...state.tickets, ...action.payload.tickets}};
        case 'SORT_BYE_DURATION':
            return {...state, tab: action.payload.tab, tickets: {...state.tickets, ...action.payload.tickets}};
        case 'SORT_BYE_OPTIMAL':
            return {...state, tab: action.payload.tab, tickets: {...state.tickets, ...action.payload.tickets}};
        case 'SHOW_MORE_TICKETS':
            return {...state, showTicket: state.showTicket + action.payload};
        case 'FILTER_TICKETS':
            return {...state, filters: {...action.payload}}
        case 'CHANGE_TAB':
            return {...state, tab: action.payload};
        case 'APPLY_SELECTED_FILTERS':
            return {...state, tickets: {...state.tickets, sortedTickets: action.payload}}
        case 'GET_TICKETS':
            return {...state, tickets: {...state.tickets, ...action.payload}};
        default:
            return state;
    }
}

export default reducer;