import React, { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FilterIcon from "@mui/icons-material/FilterAlt";
import NearestRides from "./tabs/NearestRides";
import UpcomingRides from "./tabs/UpcomingRides";
import PastRides from "./tabs/PastRides";
import { filteredRides } from "./utils/rides";
import { selectState, selectCity, resetCity, resetState } from "../state/slice/dataSlice";

function NavLinks() {
  const [activeTab, setActiveTab] = useState("tab1");
  const { rides, user } = useSelector((state) => state.data);
  const rider = filteredRides(rides, user)
  const dispatch = useDispatch()

  const setTab = (tab) => {
    setActiveTab(tab);
  };

  const onStateChange = (e) => {
    const selectedState = e.target.value
    if(selectedState !== 'all states') {
      const result = rider.filter(({state}) => {
        return state == selectedState
      })
      console.log(result)
      dispatch(selectState(result))
    } else {
      dispatch(resetState())
    }
  }

  const onCityChange = (e) => {
    const selectedCity = e.target.value
    if(selectedCity !== 'all cities') {
      const result = rider.filter(({city}) => {
        return city == selectedCity
      })
      console.log(result)
      dispatch(selectCity(result))
    } else {
      dispatch(resetCity())
    }
  }

  return (
    <div>
      <div className="bg-gray-700 text-slate-200 flex justify-between border-b-4 border-gray-900">
        <div className="flex space-x-4 h-fit">
          <p
            className={activeTab === "tab1" ? "cursor-pointer hover:bg-slate-300 p-5 bg-slate-300 text-black" : "cursor-pointer hover:bg-slate-300 p-5"}
            onClick={() => setTab("tab1")}
          >Nearest Rides</p>
          <p
            className={activeTab === "tab2" ? "cursor-pointer hover:bg-slate-300 p-5 bg-slate-300 text-black" : "cursor-pointer hover:bg-slate-300 p-5"}
            onClick={() => setTab("tab2")}
          >Upcoming Rides</p>
          <p
            className={activeTab === "tab3" ? "cursor-pointer hover:bg-slate-300 p-5 bg-slate-300 text-black" : "cursor-pointer hover:bg-slate-300 p-5"}
            onClick={() => setTab("tab3")}
          >Past Rides</p>
        </div>
        <div className="flex items-center justify-between relative group">
          <Button startIcon={<FilterIcon />} sx={{ color: "white" }} className='flex uppercase items-center w-full focus:outline-none'>
            Filter
          </Button>
          <div className='absolute z-10 hidden bg-gray-400 group-hover:block w-32'>
            <select name='city' id="city" className="text-black p-2" onChange={onCityChange}>
              <option value='all cities'>All Cities</option>
              {rider?.map(
                ({city}, index) => (
                  <option value={city} key={index}>{city}</option>
                )
              )}
            </select>
            <select name='city' id="city" className="text-black p-2" onChange={onStateChange}>
              <option value='all states'>All States</option>
              {rider?.map(
                ({state }, index) => (
                  <option value={state} key={index}>{state}</option>
                )
              )}
            </select>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        {activeTab === "tab1" && <NearestRides />}
        {activeTab === "tab2" && <UpcomingRides />}
        {activeTab === "tab3" && <PastRides />}
      </div>
    </div>
  );
}

export default NavLinks;
