// A function component taking props and returning some HTML to the DOM
const DoctorCard = (props) => {
  const { name, specialization, location } = props;

  // markup to return
  return (
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${specialization} — ${location}`}</h2>
      </div>
  );
};

export default DoctorCard;