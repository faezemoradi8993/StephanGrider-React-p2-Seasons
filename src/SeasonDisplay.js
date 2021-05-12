import React from 'react';
import "./SeasonDisplay.css";
const seasonConfig = {
    summer: {
        text: " let's hit the beach !",
        iconName: "sun"
    },
    winter: {
        text: " Burr , it's cold ! ",
        iconName: "snowflake"
    }
};
const getseason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";
    }
}
const SeasonDisplay = (props) => {
    const season = getseason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={` season-display ${season}`}>
            <i className={`${iconName} icon-left icon massive`} ></i>
            <h1> {text}</h1>
            <i className={`${iconName} icon-right icon massive`} ></i>
        </div >
    );
}

export default SeasonDisplay;