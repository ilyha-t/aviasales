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
            let newPartTickets, isLoading = true;

            const networkService = new NetworkService();
            dispatch(getTicketsStart());

            const apiKey = await networkService.initiationSearch();

            newPartTickets = await networkService.getTickets(apiKey.searchId);
            tickets = [...tickets, ...newPartTickets.tickets];
            dispatch(getPartTicketsSuccess(tickets));
            console.log(tickets);

            async function fetchTickets() {
              try {
                  newPartTickets = await networkService.getTickets(apiKey.searchId);
                  tickets = [...tickets, ...newPartTickets.tickets];
                  console.log(tickets);
                  if (!newPartTickets.stop) {
                      setTimeout(fetchTickets, 250);
                  } else {
                      isLoading = false;
                      dispatch(getPartTicketsSuccess(tickets));
                  }
              } catch (e) {
                  dispatch(getPartTicketsSuccess(tickets));
              }
            };

            fetchTickets();
        } catch(e) {
            dispatch(getTicketsError(e));
        }
    }
}