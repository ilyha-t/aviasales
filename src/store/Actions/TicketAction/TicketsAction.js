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
            tickets: tickets.sort((a, b) => a.price + (1000 * Math.floor((a.segments[0].duration + a.segments[1].duration) / 60)) > b.price + (1000 * Math.floor((b.segments[0].duration + b.segments[1].duration) / 60)) ? 1 : -1)
        },
    };
}

const filterTickets = (filters, filter) => {
    let action = new Object({type: 'FILTER_TICKETS'});

    const matchFilters = (filter) => {
        // Если нажата кнопка "Все" и все чекбоксы отмечены выделенным - снимаем все чекбоксы
        if (filter.id === 1 && filters.checked.length === filters.total) {
            return {...filters, checked: [], total_stop: []};
            // Если нажата кнопка "Все" - выбираем все чекбоксы
        } else if(filter.id === 1 && filters.checked.length !== filters.total) {
            return {...filters, checked: [1,2,3,4,5], total_stop: [-1,0,1,2,3]};
        //    Если выбранный чекбокс был ранее активен и нажата кнопка "Все" - снимаем активацию выбранного чекбокса и "Все"
        } else if(filters.checked.indexOf(filter.id) !== -1 && filters.checked.indexOf(1) !== -1) {
            return {...filters, checked: filters.checked.filter(filId => filId !== filter.id && filId !== 1),total_stop: filters.total_stop.filter(filId => filId !== filter.total_stop && filId !== -1)}
            //    Если выбранный чекбокс был ранее активен - снимаем активацию выбранного чекбокса
        } else if(filters.checked.indexOf(filter.id) !== -1) {
            return {...filters, checked: filters.checked.filter(filId => filId !== filter.id), total_stop: filters.total_stop.filter(filId => filId !== filter.total_stop)}
        }
        //    Если выбраны все чекбоксы - делаем "Все" активным
         else if(filters.checked.indexOf(filter.id) === -1 && [...filters.checked, filter.id].length === filters.total - 1) {
            return {...filters, checked: [...filters.checked, filter.id, 1], total_stop: [...filters.total_stop, filter.total_stop, -1]}
        }
        //    Если выбранный чекбокс был ранее неактивен - делаем его активным
        else if(filters.checked.indexOf(filter.id) === -1) {
            return {...filters, checked: [...filters.checked, filter.id], total_stop: [...filters.total_stop, filter.total_stop]}
        }

    };

    return {...action, payload: matchFilters(filter) };
}

export { showMoreTickets, sortByePrice, sortByeDuration, sortByeOptimal, filterTickets };