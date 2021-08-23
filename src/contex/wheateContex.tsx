import React, { createContext, ReactNode } from "react";
import { useGetCurrentLocation } from "../Services/index";
import { iOneCall } from "../model/index";
interface props {
    children?: ReactNode;
    location: { latitude: number; longtitude: number } | any;
}

const defaultData = {
  data: {} as iOneCall,
  error: false,
  isValidating: false,
};


export const WheatherContex = createContext(defaultData);
const WheaterContex: React.FC<props> = (props) => {

const data = useGetCurrentLocation(
    props.location.latitude,
    props.location.longtitude
  );

  return (
    <WheatherContex.Provider value={data}>
      {props.children}
    </WheatherContex.Provider>
  );
};

export default WheaterContex;
