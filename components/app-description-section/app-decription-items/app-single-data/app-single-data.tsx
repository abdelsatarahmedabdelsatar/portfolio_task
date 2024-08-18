

type AppDataItemProps = {
    text: string,
    animatedDivClassName: string,
    dataClassName: string
}


 const AppDataItem  =  ( { text, animatedDivClassName, dataClassName }: AppDataItemProps) => {


    return (<div className="relative inline-block w-auto ">
        <div className={animatedDivClassName}></div>
        <div className={dataClassName}>{text}</div>
    </div>);
}

export default AppDataItem;
