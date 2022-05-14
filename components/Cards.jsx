import Image from "next/image";
import React from "react";

function Cards({
  image,
  rideId,
  origin_station,
  station_path,
  date,
  distance,
  state,
  city,
}) {
  return (
    <div className="bg-gray-800 flex text-slate-300 space-x-5 h-fit rounded-xl">
      <div className="flex items-center space-x-3">
        <Image
          src={image}
          alt=""
          width={300}
          height={190}
          className="rounded-l-xl"
        />
        <div className="space-y-3">
          <p>
            Ride Id: <span className="text-white">{rideId}</span>
          </p>
          <p>
            Origin Station: <span className="text-white">{origin_station}</span>
          </p>
          <p>
            Station_path: <span className="text-white">{station_path}</span>
          </p>
          <p>
            Date: <span className="text-white">{date}</span>
          </p>
          <p>
            Distance: <span className="text-white">{distance}</span>
          </p>
        </div>
      </div>
      <div>
        <div className='flex space-x-5 text-slate-500'>
          <p>{city}</p>
          <p>{state}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
