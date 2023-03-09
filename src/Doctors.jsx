// Nececssary imports
import { useState } from "react";

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
  const [doctorName, setDoctorName] = useState("");

  // Returning markup
  return (
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
      <h2>Search Results</h2>
      <div id="searchResults">
        {<p> Searching for {doctorName} </p>}
      </div>
    </div>
  );
};

export default Doctors;
