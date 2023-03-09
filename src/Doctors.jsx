// Nececssary imports
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";
// Importing Project modules
// import Results from "./Results";
// import useBreedList from "./useBreedList";

// Global variables
const SPECIALIZATIONS = [
  "Dermatology",
  "Cardiology",
  "Neurology",
  "Oncology",
  "Opthalmology",
];
const PROVINCES = ["Cairo", "Alexandria"];

// THE Function component
const Doctors = () => {
  // Managing state
  // const [requestParams, setRequestParams] = useState({
  //   name: "",
  //   specialization: "",
  //   location: "",
  // });

  // const results = useQuery(["search", requestParams], fetchSearch);
  // const doctors = results?.data?<div className="doctors"></div> ?? [];

  // Returning markup
  return (
    <div>
      <h1> Our Doctors </h1>
      <p> Find the right doctor for you! </p>

      {/* Our Search Form */}
      <div className="search-params">
        <form>
        <label htmlFor="location">Name</label>
        <input id="doctorName" name="doctorName" placeholder="doctorName" />
        <br />
        <label htmlFor="specialization">Specialization</label>
        <select id="specialization" name="specialization">
          <option />
          {SPECIALIZATIONS.map((specialization) => (
            <option key={specialization} value={specialization}>
              {specialization}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="location">Location</label>
        <select id="location" name="location">
          <option />
          {PROVINCES.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        <br/>
        <button>Submit</button>
        </form>
      </div>
      <h2>Search Results</h2>
    </div>
  );
};

export default Doctors;
