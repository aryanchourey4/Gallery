import React from "react";
// import { Link } from "react-router-dom";
import * as VscIcons from "react-icons/vsc";
import { IconContext } from "react-icons";
import { useSelector, useDispatch } from "react-redux";
import { viewSideBar } from "../Redux/showSideBarSlice";
import { changeSideBar } from "../Redux/sideBarTypeSlice";
import SideBarItem from "./SideBarItem";
import { sideBarDataYears, sideBarData2020, sideBarData2021, sideBarData2022} from "../Data/SideBarMenuData"


export default function Navbar() {
    const SideBarView = useSelector((state) => state.SideBarView.value);
    const SideBarType = useSelector((state) => state.SideBarType.value);
    const yearValue = useSelector((state) => state.year.value);
    const dispatch = useDispatch();
    const sideBarList = [sideBarDataYears, sideBarData2020, sideBarData2021, sideBarData2022]

    if(!SideBarType) return(
    <>
    <div className='flex bg-transparent h-12 justify-start items-center'>
        <VscIcons.VscMenu className="h-10 w-auto p-3 mx-1" onClick={()=>dispatch(viewSideBar())} />
        <IconContext.Provider value={{ className: "h-12 w-12 p-3 hover:bg-yellow-500" }}>
          <nav className={SideBarView ? 'sideBar-active' : 'sideBar'}>
            <ul>
              <li className='flex bg-indigo-500 h-12 w-72 justify-between items-center'>
                <VscIcons.VscArrowLeft className='opacity-0' />
                <span>YEARS</span>
                <VscIcons.VscClose onClick={()=>dispatch(viewSideBar())} />
              </li>
              <IconContext.Provider value={{ className: "h-9 w-9 p-2 hover:bg-yellow-500" }}>
                {sideBarList[0].map((item, index) => {
                        return (
                            <SideBarItem title={item.title} yearValue={item.yearValue}/>
                        );
                    })
                  }
              </IconContext.Provider>
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </>
    )
    else return(
      <>
    <div className='flex bg-transparent h-12 justify-start items-center'>
        <VscIcons.VscMenu className="h-10 w-auto p-3 mx-1" onClick={()=>dispatch(viewSideBar())} />
        <IconContext.Provider value={{ className: "h-12 w-12 p-3 hover:bg-yellow-500" }}>
          <nav className={SideBarView ? 'sideBar-active' : 'sideBar'}>
            <ul>
              <li className='flex bg-indigo-500 h-12 w-72 justify-between items-center'>
              <VscIcons.VscArrowLeft onClick={() => {dispatch(viewSideBar());dispatch(changeSideBar());dispatch(viewSideBar())}} />
                <span>EVENTS</span>
                <VscIcons.VscClose onClick={()=>dispatch(viewSideBar())} />
              </li>
              <IconContext.Provider value={{ className: "h-9 w-9 p-2 hover:bg-yellow-500" }}>
                {sideBarList[yearValue+1].map((item, index) => {
                        return (
                            <SideBarItem title={item.title} eventValue={item.eventValue}/>
                        );
                    })
                  }
              </IconContext.Provider>
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </>
    )
}
