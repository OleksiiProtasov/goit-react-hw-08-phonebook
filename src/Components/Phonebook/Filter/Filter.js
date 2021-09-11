import style from "./style.module.css";
import { useDispatch } from "react-redux";
import {changeFilter} from "../../../redux/contacts/contacts-actions";

const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = (e) =>
    dispatch(changeFilter({ name: "name", value: e.target.value }));

  return (
    <label>
      Find contacts by name
      <input
        className={style.input}
        type="text"
        name="filter"
        onChange={onChangeFilter}
      />
    </label>
  );
};

export default Filter;
