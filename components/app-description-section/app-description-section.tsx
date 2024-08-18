"use client"


import AppDescriptionItem from "./app-decription-items/app-description-items";
import { useMemo, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { phonesApps } from "@/dummy-data/dummy-data";



export default function AppDescriptionSection() {

    const [AppDecriptionItemIndex, setAppDecriptionItemIndex] = useState(-1);


    function AppDescriptionItemRendered() {
        useScrollPosition(({currPos }) => {

            console.log(currPos.y);
            let currentPosition = Math.abs(currPos.y)
            ;
            if (currentPosition > 1000 && currentPosition < 2800) {
                setAppDecriptionItemIndex(0);
            } else if (currentPosition > 2800 && currentPosition < 4000) {
                setAppDecriptionItemIndex(1);
            }
            else if (currentPosition > 4000 && currentPosition < 5200) {
                setAppDecriptionItemIndex(2);
            }
            else if (currentPosition > 5200 && currentPosition < 6400) {
                setAppDecriptionItemIndex(3);
            }
            else if (currentPosition > 6400 && currentPosition < 7600) {
                setAppDecriptionItemIndex(4);
            }
            else if (currentPosition > 7600 && currentPosition < 8800) {
                setAppDecriptionItemIndex(5);
            }else{
                setAppDecriptionItemIndex(-1);
            }
        });

        return useMemo(
            () => (
              <> {AppDecriptionItemIndex >= 0 ?  <AppDescriptionItem appData={phonesApps[AppDecriptionItemIndex]} /> : ""} </>
            ),
            [AppDecriptionItemIndex]
        );
    }

    return (

        <div className="w-5/12 mt-44">
            <AppDescriptionItemRendered/>
        </div>
    );
}

