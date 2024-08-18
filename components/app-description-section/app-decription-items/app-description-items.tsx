import { propsAppData } from "@/types/types";
import AppDataItem from "./app-single-data/app-single-data";


type propsType = {

    appData: propsAppData
}

export default function AppDescriptionItem({ appData }: propsType) {
    return (

        <div className="flex items-center h-screen sticky top-0">

            <div className="grid grid-cols-1 grid-row-5 place-content-around h-full ms-12" >
                <AppDataItem text={appData.appSSN} dataClassName="text-3xl font-bold animate-appData" animatedDivClassName="bg-black animate-appDiv h-10 absolute z-10 w-12 top-0" />
                <div className="ms-6">
                    <AppDataItem text={appData.appTitle} dataClassName="text-6xl font-bold mb-12 animate-appData" animatedDivClassName="bg-black h-[65px] absolute z-10 w-full top-0 animate-appDiv" /><br />
                    <AppDataItem text={appData.appTech} dataClassName="text-3xl font-bold my-4  animate-appData" animatedDivClassName="bg-black animate-appDiv h-10 absolute z-10 w-full top-5" />
                    <AppDataItem text={appData.appDescription} dataClassName="text-2xl  animate-appData" animatedDivClassName="bg-black animate-appDiv h-24 absolute z-10 w-full top-0" />
                </div>
                <AppDataItem text={appData.appType} dataClassName="text-3xl font-bold  animate-appData" animatedDivClassName="bg-black animate-appDiv h-9 absolute z-10 w-72 top-0" />
            </div>
        </div>

    );
}
