import DoctorCard from "./DoctorCard";

const Results = ({ doctors }) => {
  return (
    <div className="search">
      {!doctors.length ? (
        <h1>No Doctors Found!</h1>
      ) : (
        doctors.map((pet) => {
          return (
            <DoctorCard
              name={pet.animal}
              specialization={pet.id}
              location={`${pet.city}, ${pet.state}`}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
