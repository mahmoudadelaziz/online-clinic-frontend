import axios from "axios";

axios.get(`http://localhost:5000/user/doctor/name/maria stark`).
then((response) => console.log(response.data))

export default fetchDoctor