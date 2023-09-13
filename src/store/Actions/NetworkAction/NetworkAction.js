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
            dispatch(getTicketsSuccess(tickets));
            console.log(tickets);

            async function fetchTickets() {
              try {
                  newPartTickets = await networkService.getTickets(apiKey.searchId);
                  tickets = [...tickets, ...newPartTickets.tickets];
                  console.log(tickets);
                  if (!newPartTickets.stop) {
                      setTimeout(fetchTickets, 150);
                  } else {
                      dispatch(getTicketsSuccess(tickets));
                  }
              } catch (e) {
                  dispatch(getTicketsSuccess(tickets));
              }
            };

            fetchTickets();

            // do {
            //     newPartTickets = await networkService.getTickets(apiKey.searchId);
            //     tickets = [...tickets, ...newPartTickets.tickets];
            //     console.log(tickets);
            // } while (!newPartTickets.stop);
            //
            // dispatch(getTicketsSuccess(tickets));

                // .then((data) => {
                //     console.log(data);
                //     let tickets = [];
                //     let newPartTickets;
                //     do {
                //         newPartTickets = networkService.getTickets(data.searchId);
                //         tickets = [...tickets, newPartTickets];
                //     } while(!newPartTickets.stop);
                //     return tickets;
                // })
                // .then(tickets => {
                //     console.log(tickets)
                //     dispatch(getTicketsSuccess(tickets))
                // })
                // .catch((e) => dispatch(getTicketsError(e)));
        } catch(e) {
            dispatch(getTicketsError(e));
        }
    }
}