import React, { Fragment } from "react";
import cl from './SegmentRouteItem.module.css';

function SegmentRouteItem({ segment }) {
    function calcDurationFly(duration) {
        const hour = Math.floor(duration / 60);
        const minutes = duration - (hour * 60);
        return `${hour}ч ${minutes}м`
    }

    function parseStops(stopsMas) {
        let stopsList = '';
        const lenMas = stopsMas.length;
        for(const stop of stopsMas) {
            if (stop !== stopsMas[lenMas - 1]) {
                stopsList += `${stop}, `;
            } else {
                stopsList += stop;
            }
        }

        return stopsList;
    }

    return (
        <ul className={cl.segment__route__item}>
            <li>
                <h4 className={cl.segment__title}>{segment.origin} - {segment.destination}</h4>
                <span className={cl.segment__time}>10:45-08:00</span>
            </li>
            <li>
                <h4 className={cl.segment__title}>В пути</h4>
                <span className={cl.segment__time}>{calcDurationFly(segment.duration)}</span>
            </li>
            <li>
                <h4 className={cl.segment__title}>Пересадки</h4>
                <span className={cl.segment__time}>
                    {segment.stops.length > 0 ? parseStops(segment.stops) : 'Прямой'}
                </span>
            </li>

        </ul>
    );
}

export default SegmentRouteItem;