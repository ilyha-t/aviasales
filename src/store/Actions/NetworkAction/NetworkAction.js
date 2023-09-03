import NetworkService from "../../../services/Network/NetworkService";

const getTicketsStart = () => {
    return {
        type: 'GET_TICKETS_START',
    }
}

const getTicketsSuccess = (payload) => {
    return {
        type: 'GET_TICKETS_SUCCESS',
        payload,
    }
}

const getTicketsError = (error) => {
    return {
        type: 'GET_TICKETS_ERROR',
        payload: error,
    }
}

export const fetchDataFromServer = (searchId) => {
    return async (dispatch) => {
        try {
            const networkService = new NetworkService();
            dispatch(getTicketsStart());
            networkService.initiationSearch()
                .then((data) => networkService.getTickets(data.searchId))
                .then(data => {
                    console.log(data);
                    dispatch(getTicketsSuccess(data))});
        } catch(e) {
            dispatch(getTicketsError(e));
        }
    }

}