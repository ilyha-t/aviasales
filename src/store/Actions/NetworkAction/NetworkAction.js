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

            newPartTickets = await networkService.getTickets(apiKey.searchId);
            tickets = [...tickets, ...newPartTickets.tickets];
            dispatch(getPartTicketsSuccess(tickets));

            async function fetchTickets() {
              try {
                  newPartTickets = await networkService.getTickets(apiKey.searchId);
                  tickets = [...tickets, ...newPartTickets.tickets];
                  if (!newPartTickets.stop) {
                      setTimeout(fetchTickets, 250);
                  } else {
                      dispatch(getPartTicketsSuccess(tickets));
                  }
              } catch (e) {
                  dispatch(getPartTicketsSuccess(tickets));
                  dispatch(getTicketsSuccess());
              }
            };

            fetchTickets();
        } catch(e) {
            dispatch(getTicketsError(e));
        }
    }
}