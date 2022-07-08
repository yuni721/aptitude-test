import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import Navigation from "./components/Navigation"
import Overview from "./components/Overview";
import Papa from "papaparse";

import PageNotFound from './components/PageNotFound';
import { DataArray } from "./types/Data";
import {
  initData,
  switchToOverview
} from "./reducers/benchSlice";

function App() {
  const [ formattedData, setFormattedData ] = useState<DataArray>([]);
  const dispatch = useDispatch();
  const load = async function(){
    await fetch('./data.csv')
        .then( response => response.text() )
        .then( responseText => {
          var rawData = Papa.parse(responseText);
          const formattedData:DataArray = [];
          rawData.data.forEach((ele: any, index) => {
            switch(index) {
              case 0:
                ele.forEach((ele2:string, index2:number) => {
                  if(index2 !== 0 && index2 < 13) {
                    formattedData.push({
                      name: ele2,
                      count: "",
                      change: "",
                      percentile: ""
                    })
                  }
                })
                break;
              case 1:
                ele.forEach((ele2:string, index2:number) => {
                  if(index2 !== 0 && index2 < 13) {
                    formattedData[index2 - 1] = {...formattedData[index2 - 1], count: ele2}
                  }
                })
                break;
              case 2:
                ele.forEach((ele2:string, index2:number) => {
                  if(index2 !== 0 && index2 < 13) {
                    formattedData[index2 - 1] = {...formattedData[index2 - 1], change: ele2}
                  }
                })
                break;
              case 3:
                ele.forEach((ele2:string, index2:number) => {
                  if(index2 !== 0 && index2 < 13) {
                    formattedData[index2 - 1] = {...formattedData[index2 - 1], percentile: ele2}
                  }
                })
                break;
            }
          })

          // 

          setFormattedData(formattedData);
          dispatch(initData(formattedData))
          dispatch(switchToOverview())
        })
  };

  useEffect(() => {
    load();
  },[])

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Overview />} />;
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
