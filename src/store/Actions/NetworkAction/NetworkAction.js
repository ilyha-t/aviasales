import NetworkService from "../../../services/Network/NetworkService";

const getTicketsStart = () => {
    return {
        type: 'GET_TICKETS_START',
    }
}

const getTicketsSuccess = () => {
    return {
        type: 'GET_TICKETS_SUCCESS'
    }
}

const getPartTicketsSuccess = (payload) => {
    return {
        type: 'GET_PART_TICKETS_SUCCESS',
        payload,
    }
}

const getTicketsError = (error) => {
    return {
        type: 'GET_TICKETS_ERROR',
        payload: error,
    }
}

export const fetchDataFromServer = () => {
    return async (dispatch) => {
        try {
            let tickets = [];
            let newPartTickets;

            const networkService = new NetworkService();
            dispatch(getTicketsStart());

            const apiKey = await networkService.initiationSearch();

            do {
                try {
                    newPartTickets = await networkService.getTickets(apiKey.searchId);
                    tickets = [...tickets, ...newPartTickets.tickets];
                    dispatch(getPartTicketsSuccess(tickets));
                } catch (e) {
                    console.error('При получении данных произошла ошибка:', e.message);
                    if (tickets.length == 0) {
                        newPartTickets = {tickets, stop: false};
                    }
                }
            } while(!newPartTickets.stop);

            dispatch(getTicketsSuccess());
        } catch(e) {
            dispatch(getTicketsError(e));
        }
    }
}