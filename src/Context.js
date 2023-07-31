import React from "react";
import Services1 from "./photo/services1.png"
import Services2 from "./photo/services2.png"
import Services3 from "./photo/services3.png"
// import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export const DataContext = React.createContext();

export default function ContextProvider({ children }) {
    let servicesData = [
        {
            id: 1,
            photo: Services1,
            title: "UX Research",
            text: "New demos are continually added and buying a single license for Mak gives you access to all of  what's shown below, plus everything that will be added in the future.",
        },
        {
            id: 2,
            photo: Services2,
            title: "Brand Design",
            text: "New demos are continually added and buying a single license for Mak gives you access to all of  what's shown below, plus everything that will be added in the future.",
        },
        {
            id: 3,
            photo: Services3,
            title: "Web Development",
            text: "New demos are continually added and buying a single license for Mak gives you access to all of  what's shown below, plus everything that will be added in the future.",
        },
    ]


    return (
        <DataContext.Provider
            value={{
                servicesData,

            }}
        >
            {children}
        </DataContext.Provider>
    );
}
