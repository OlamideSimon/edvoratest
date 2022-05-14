import React from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards";
import { filteredRides, distance } from '../utils/rides'

function upcomingRides() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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

  return (
    <div className="body grid gap-5">
      {display.map(
        (
          { id, origin_station_code, station_path, date, city, map_url, state },
          index
        ) => {
          if (new Date(date).getTime() > new Date().getTime()) {
            return (
              <Cards
                key={index}
                rideId={id}
                image={map_url}
                station_path={station_path}
                origin_station={origin_station_code}
                date={date}
                distance={distance(station_path, user)}
              />
            );
          }
        }
      )}
    </div>
  );
}

export default upcomingRides;
