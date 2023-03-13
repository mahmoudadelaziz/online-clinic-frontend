// Nececssary imports
import { useState } from "react";
// import findDoctor from "./Search";

// Global variables
const SPECIALIZATIONS = [
  "Marketing",
  "Support",
  "Engineering",
  "Sales"
];
const PROVINCES = ["Manchester", "Washington"];

// THE Function component
const Doctors = () => {
  const [doctorName, setDoctorName] = useState("");
  const [searchResults, setSearchResults] = useState([])

  async function findDoctors(location) {
    // This function returns an array of users with the name entered in the form
    const req = await fetch(`https://dummyjson.com/users/filter?key=address.city&value=${location}`);
    const myData = await req.json();
    const arr = myData.users; // An array of user objects
    let namesList = [];
    arr.forEach((element) => {namesList.push(element.firstName+" "+element.lastName)})
    setSearchResults(namesList)
  }

  // Returning markup
  return (
    // Managing state
    
    <div>
      <h1> Our Doctors </h1>
      <p> Find the right doctor for you! </p>

      {/* Our Search Form */}
      <div className="search-params">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            setDoctorName(formData.get("doctorName") ?? "");
            const location = formData.get("location");
            findDoctors(location);
          }}
        >
          <label htmlFor="doctorName">Name</label>
          <input
            id="doctorName"
            name="doctorName"
            placeholder="Doctor's name"
          />
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
          <br />
          <button>Submit</button>
        </form>
      </div>
      <h2><u>Search Results</u></h2>
      <div id="searchResults">
        {searchResults.map((doctor) => (
          <h3>{doctor}</h3>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
