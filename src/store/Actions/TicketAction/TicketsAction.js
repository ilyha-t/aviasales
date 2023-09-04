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

const filterTickets = (filters, id) => {
    let action = new Object({type: 'FILTER_TICKETS'});

    const isAll = (id) => {
        let newMas = [...filters, id];
        let isAll = newMas.indexOf(1) !== -1 ? true : false;

        // Включение всех галочек при нажатии "Все", либо при проставлении каждого чекбокса по отдельности
        if(id === 1 ) {
            return [1,2,3,4,5];
        //    Выключение чекбокса "Все" при нажатии на любой другой чекбокс
        } else if(isAll && id !== 1) {
            console.log(filters)
            const index = filters.findIndex(filterId => filterId === id);
            console.log(index);
            const withoutCurrentId = [
                ...filters.slice(0,index),
                ...filters.slice(index + 1)
            ];
            console.log(withoutCurrentId)
            return withoutCurrentId.filter(id => (id !== 1));
        } else {
            return newMas;
        }
    };

    switch (id) {
        case '1':
            return {...action, payload: { filters: isAll(1) } };
        case '2':
            return {...action, payload: { filters: isAll(2) } };
        case '3':
            return {...action, payload: { filters: isAll(3) } };
        case '4':
            return {...action, payload: { filters: isAll(4) } };
        case '5':
            return {...action, payload: { filters: isAll(5) } };
    }
}

export { showMoreTickets, sortByePrice, sortByeDuration, sortByeOptimal, filterTickets };