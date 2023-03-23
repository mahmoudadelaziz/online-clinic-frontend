import "./DoctorCard.css";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";

export const DoctorCard = ({ ...props }) => {
  return (
    <Card {...props}>
      <div className="doctor__profile"></div>
      <h2 className="doctor__name">Dr. Hamada</h2>
      <p className="doctor__spec">Oncologist</p>
      <p className="doctor__rating">⭐4.3 (30 reviews)</p>
      <div className="doctor__next">
        <p className="title">Next Available</p>
        <p className="details">10:00 AM tomorrow</p>
      </div>
      <Button
        title="Book Now"
        variant="primary"
        style={{ margin: "15px 0px", padding: "11px 28px" }}
      />
    </Card>
  );
};
