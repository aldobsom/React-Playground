import React from 'react';

const SeasonConfig = {
  summer: {
    text: 'Yeah, it\'s summer',
    iconName: 'sun'  
  },
  winter: {
    text: 'Dooh, it\'s winter',
    iconName: 'snowflake'
  }
}


const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  }

  if (month < 2 && month > 9) {
    return lat > 0 ? "winter" : "summer";
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  const {text, iconName} = seasonConfig[season];
  return( 
    < >
    <i className={`${iconName} icon`}></i>
    <h1>{text}</h1>
    <i className={`${iconName} icon`}></i>
    </>
  )
}

export default SeasonDisplay; 