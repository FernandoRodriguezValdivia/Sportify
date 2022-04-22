import React from 'react';
import Hour from '../Hour'

function GroupHour({hours}) {
    console.log('aca algo', hours)
    return (
        hours.map(hour=> <Hour hour={hour}/>)
    );
}

export default GroupHour;