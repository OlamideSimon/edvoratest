import React from 'react';
import { useSelector } from 'react-redux';
import Cards from '../Cards';
import { filteredRides, distance } from '../utils/rides'

function NearestRides() {
  const { rides, user, selectedState, selectedCity } = useSelector((state) => state.data);
  const rider = filteredRides(rides, user)

  let display;
  if(selectedCity !== null && selectedState !== null) {
    display = selectedCity.concat(selectedState)
  } else if (selectedCity === null && selectedState !== null) {
    display = selectedState
  } else if (selectedCity !== null && selectedState === null) {
    display = selectedCity
  } else {
    display = rider
  }

  display?.sort((a, b) => {
    return distance(a.station_path, user) - distance(b.station_path, user)
  })

  return (
      <div className='body grid gap-5'>
        {display?.map(
        (
          { id, origin_station_code, station_path, date, city, map_url, state },
          index
        ) => {
          if (new Date().getTime() > new Date(date).getTime()) {
            return (
              <Cards
                key={index}
                rideId={id}
                image={map_url}
                station_path={station_path}
                origin_station={origin_station_code}
                date={date}
                distance={distance(station_path, user)}
                city={city}
                state={state}
              />
            );
          }
        }
      )}
      </div>
    );
}

export default NearestRides;
