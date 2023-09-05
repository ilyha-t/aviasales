const filterTickets = (filterId) => {
            return {
                type: 'ALL_TICKETS',
                payload: {
                    filters: [1, 2, 3, 4, 5],
                }
            };
};

export { filterTickets };