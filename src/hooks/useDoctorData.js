import { useEffect, useState } from "react";
import axios from "../utility/axios";

export const useDoctorData = (id) => {
  const [doctor, setDoctor] = useState({});
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const {
          data: { doctor },
        } = await axios.get(`/user/doctor/${id}`);
        setDoctor(doctor);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchReviews = async () => {
      try {
        const {
          data: { reviews },
        } = await axios.get(`/review/${id}`);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDoctor();
    fetchReviews();
  }, []);
  return [doctor, reviews];
};
