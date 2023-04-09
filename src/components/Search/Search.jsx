import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMa} from '@fortawesome/free-solid-svg-icons'
export const Search = ({ variant }) => {
  return (
    <div className="search">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
};
