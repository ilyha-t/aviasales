import React, { Fragment } from "react";
import cl from './SegmentRouteItem.module.css';

function SegmentRouteItem({ segment }) {
    function calcDurationFly(duration) {
        const hour = Math.floor(duration / 60);
        const minutes = duration - (hour * 60);
        return `${hour}ч ${minutes}м`
    }

    function parseTimeFly(date, duration) {
        const fullDate = new Date(date);
        // calculate departure time
        const hoursDeparture = fullDate.getUTCHours();
        const minutesDeparture = fullDate.getUTCMinutes();

        // calculate landing time
        let hoursLanding = Math.floor(duration / 60) + hoursDeparture;
        let minutesLanding = (duration % 60) + minutesDeparture;

        if(hoursLanding >= 24) {
            hoursLanding = Math.floor(hoursLanding % 24);
        }

        if(minutesLanding >= 60) {
            hoursLanding = hoursLanding + Math.floor(minutesLanding / 60);
            minutesLanding = minutesLanding -  Math.floor(minutesLanding / 60) * 60;
        }

        return `
        ${hoursDeparture <= 9 ? '0' + hoursDeparture: hoursDeparture}:${minutesDeparture <= 9 ? '0' + minutesDeparture: minutesDeparture}
        -
        ${hoursLanding <= 9 ? '0' + hoursLanding: hoursLanding}:${minutesLanding <= 9 ? '0' + minutesLanding: minutesLanding}`;
    }

    function mathWordTransfer() {
        const stops = segment.stops.length;
        if (stops == 0) {
            return 'без пересадок';
        } else if (stops == 1) {
            return `${stops} пересадка`;
        } else if (stops > 1 && stops < 4) {
            return `${stops} пересадки`;
        } else {
            return `${stops} пересадок`;
        }
    }

    return (
        <ul className={cl.segment__route__item}>
            <li>
                <h4 className={cl.segment__title}>{segment.origin} - {segment.destination}</h4>
                <span className={cl.segment__time}>{parseTimeFly(segment.date, segment.duration)}</span>
            </li>
            <li>
                <h4 className={cl.segment__title}>В пути</h4>
                <span className={cl.segment__time}>{calcDurationFly(segment.duration)}</span>
            </li>
            <li>
                <h4 className={cl.segment__title}>{mathWordTransfer()}</h4>
                <span className={cl.segment__time}>
                    {segment.stops.length > 0 ? segment.stops.join(', ') : 'Прямой'}
                </span>
            </li>

        </ul>
    );
}

export default SegmentRouteItem;