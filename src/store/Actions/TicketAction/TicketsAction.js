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

const filterTickets = (filters, filter) => {
    let action = new Object({type: 'FILTER_TICKETS'});

    const matchFilters = (filter) => {
        // Если нажата кнопка "Все" и все чекбоксы отмечены выделенным - снимаем все чекбоксы
        if (filter.id === 1 && filters.checked.length === filters.total) {
            console.log({...filters, checked: []})
            return {...filters, checked: []};
            // Если нажата кнопка "Все" - выбираем все чекбоксы
        } else if(filter.id === 1 && filters.checked.length !== filters.total) {
            console.log({...filters, checked: [1,2,3,4,5]})
            return {...filters, checked: [1,2,3,4,5]};
        //    Если выбранный чекбокс был ранее активен и нажата кнопка "Все" - снимаем активацию выбранного чекбокса и "Все"
        } else if(filters.checked.indexOf(filter.id) !== -1 && filters.checked.indexOf(1) !== -1) {
            console.log({...filters, checked: filters.checked.filter(filId => filId !== filter.id && filId !== 1)})
            return {...filters, checked: filters.checked.filter(filId => filId !== filter.id && filId !== 1)}
            //    Если выбранный чекбокс был ранее активен - снимаем активацию выбранного чекбокса
        } else if(filters.checked.indexOf(filter.id) !== -1) {
            console.log({...filters, checked: filters.checked.filter(filId => filId !== filter.id)})
            return {...filters, checked: filters.checked.filter(filId => filId !== filter.id)}
        }
        //    Если выбраны все чекбоксы - делаем "Все" активным
         else if(filters.checked.indexOf(filter.id) === -1 && [...filters.checked, filter.id].length === filters.total - 1) {
             console.log({...filters, checked: [...filters.checked, filter.id, 1]})
            return {...filters, checked: [...filters.checked, filter.id, 1]}
        }
        //    Если выбранный чекбокс был ранее неактивен - делаем его активным
        else if(filters.checked.indexOf(filter.id) === -1) {
            console.log({...filters, checked: [...filters.checked, filter.id]})
            return {...filters, checked: [...filters.checked, filter.id]}
        }

    };

    return {...action, payload: matchFilters(filter) };
}

const applyFilterTickets = (tickets, filters) => {
    console.log(tickets, filters);
    const applyFilters = (tickets, filters) => {
        // Если выбран фильтр Все - возвращаем без сортировки
        if(filters.checked.length === filters.total) {
            return tickets;
        } else {
            let applyFiltersTickets = [];
            for (const ticket of tickets) {
                let isGood = false;
                for(const segment of ticket.segments) {
                    if(filters.indexOf(segment.stops.length) !== -1) {
                        isGood = true;
                    }
                }
                if(isGood) {
                    applyFiltersTickets.push(ticket);
                }
            }
            return applyFiltersTickets;
        }
    }

    return {
        type: 'APPLY_SELECTED_FILTERS',
        payload: applyFilters(tickets, filters),
    };
};

export { showMoreTickets, sortByePrice, sortByeDuration, sortByeOptimal, filterTickets, applyFilterTickets };