import styles from "./Overview.module.css";
import Card from "./Card";
import { Data } from "../types/Data"
import { DataArray } from "../types/Data";
import { useSelector } from "react-redux";
import { CardsState } from "../types/Data"


const Overview = () => {
  const filteredArray = useSelector((state : CardsState) => state.currentCards); 

  return (
    <div className={styles.container}>
      {filteredArray.map((ele : Data, index : number) => (
        <Card key={`card${index}`} data={ele} />
      ))}
    </div>
  );
};
  
  export default Overview;