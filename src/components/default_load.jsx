import React from 'react';

export default function DefaultLoad() {
  return (
    <div className="no-cities">
      <h1 className="default-h">Welcome to my weather app!</h1>
      <div className="earth"></div>
      <p>Please enter a Canadian City in the Search Bar.</p>
      <p>App will display temperature, pressure and humidity graphs for the
        next 5 days for the chosen city.</p>
      <p>The weather data source can unexpected results when there are more
        than 1 city with same name, if this happens try a neighboring town
        (such as Esquimalt for Victoria BC).</p>
    </div>
  );
}
