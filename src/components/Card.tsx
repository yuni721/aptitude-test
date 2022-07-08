import styles from "./Card.module.css";
import { Data } from "../types/Data"
import { useEffect, useState } from "react";
import {ReactComponent  as DownArrow} from "../images/BNM_Metric_Down.svg";
import {ReactComponent  as UpArrow} from "../images/BNM_Metric_Up.svg";


interface Props {
  data : Data;
}

const Card:React.FC<Props> = ({data}) => {
    const [isPositive, setIsPositive] = useState(true);

    // If I use the state currentMenu in navigation as a global state and pass it to this useEffect,
    // rendering will be optimized, but I will just leave as it is not to overuse redux too much for now
    useEffect(() => {
      Number(data.change.replace("%","")) > 0 ? setIsPositive(true) : setIsPositive(false)
    }) 
    

    return (
      <div className={styles.container}>
        <header className={styles.header}>{data.name}</header>
        <section className={styles.content}>
          <div className={styles.count}>{data.count}</div>
          <div className={styles.divider}>|</div>
          <div className={`${styles.percentile} ${isPositive ? styles.green : styles.red}`}>{data.percentile}</div>
          <div className={styles.iconWrapper}>
            <div className={styles.icon}>
              {isPositive ? <UpArrow /> : <DownArrow />}
            </div>
            <div className={styles.pctl}>pctl</div>
          </div>
        </section>
        <div className={styles.changeWrapper}>Your performance from last week 
        <span
          className={`${styles.changeData} ${isPositive ? styles.green : styles.red}`}
        >
          {data.change}
        </span>
        </div>
      </div>
    );
};
  
export default Card;