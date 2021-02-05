import React, { useState } from "react";
import "./MainPageBody.css";
import TravelListItem from "./TravelListItem";
import { travelInfos } from "./travelInfos";

const MainPageBody = () => {
  //추후 데이터베이스 연동하고 지금은 테스트용도로 사용
  const [travelList, setTravelList] = useState([...travelInfos]);

  return (
    <div className="mainpage__body">
      <aside className="mainpage__body__banner" />
      <div className="mainpage__body__travel">
        <ul>
          {travelList.map((travelInfo) => (
            <div>
              <TravelListItem travelInfo={travelInfo} />
              {/* <img className="mainpage__body__travelPic" src={`${item.pic}`} />
              <h2>{item.title}</h2>
              <p>{item.desc}</p> */}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainPageBody;
