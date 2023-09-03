import React from "react";
import SegmentRouteItem from "./item/SegmentRouteItem";

function SegmentRoute({ className ,segments }) {
    return (
        <ul className={className}>
            {segments.map(segment => <SegmentRouteItem key={`${segment.date}${segment.destination}`} segment={segment}/>)}
        </ul>
    );
}

export default SegmentRoute;