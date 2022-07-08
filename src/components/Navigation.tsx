import { useState} from "react";
import logo from "../images/BNM_Logo_White.png";
import styles from "./Navigation.module.css";
import { useDispatch } from "react-redux";
import {
  switchToOverview, 
  switchToTraffic, 
  switchToPerformance
} from "../reducers/benchSlice";


const OVERVIEW = "OVERVIEW";
const TRAFFIC = "TRAFFIC";
const SITE_PERFORMANCE = "SITE PERFORMANCE";


const Navigation = () => {
  const [currentMenu, setCurrentMenu] = useState([
    { menu : OVERVIEW,  isSelected: true },
    { menu : TRAFFIC,  isSelected: false},
    { menu : SITE_PERFORMANCE,  isSelected: false} 
  ]);

  const dispatch = useDispatch();

  

  const menuClicked = (ele : string) => {
    const newMenuState = currentMenu.map(obj => {
        if(obj.menu === ele) {
          switch(obj.menu) {
            case OVERVIEW:
              dispatch(switchToOverview());
              break;
            case TRAFFIC:
              dispatch(switchToTraffic());
              break;
            case SITE_PERFORMANCE:
              dispatch(switchToPerformance());
              break;
          }
          return {...obj, isSelected: true }
        } 
        return {...obj, isSelected: false }
    });
    
    setCurrentMenu(newMenuState);
  }


  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo}></img>
      </div>
      <div className={styles.menuContainer}>
        {currentMenu.map((ele, index) => (
          <div 
            key={`menu${index}`}
            className={`${styles.menu} ${ele.isSelected ? styles.selected_menu : styles.unselected_menu}`}
            onClick={() => menuClicked(ele.menu)}
          >
            {ele.menu}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
