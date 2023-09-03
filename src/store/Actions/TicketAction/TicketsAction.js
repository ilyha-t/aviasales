const showMoreTickets = () => {
    return {
        type: 'SHOW_MORE_TICKETS',
        payload: 5,
    };
};

const sortByePrice = (tickets) => {
  return {
      type: 'SORT_BYE_PRICE',
      payload: {tab: 1, tickets: tickets.sort((a, b) => a.price > b.price ? 1 : -1)},
  };
};

const sortByeDuration = (tickets) => {
    return {
        type: 'SORT_BYE_DURATION',
        payload: {
            tab: 2,
            tickets: tickets.sort((a, b) => a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration ? 1 : -1)
        },
    };
};

const sortByeOptimal = (tickets) => {
    return {
        type: 'SORT_BYE_OPTIMAL',
        payload: {
            tab: 3,
            tickets: tickets.sort((a, b) => (a.price > b.price) && (a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration) ? 1 : -1),
        },
    };
}

export { showMoreTickets, sortByePrice, sortByeDuration, sortByeOptimal };