import React, { useState } from 'react'
import { Link } from "react-router-dom";
import * as VscIcons from "react-icons/vsc";
import { IconContext } from "react-icons";
import { sideBarData2020, sideBarData2021, sideBarData2022 } from '../Data/SideBarData';

export default function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  const [sideBarSub2022, setSideBarSub2022] = useState(false);
  const showSideBarSub2022 = () => setSideBarSub2022(!sideBarSub2022);
  const [sideBarSub2021, setSideBarSub2021] = useState(false);
  const showSideBarSub2021 = () => setSideBarSub2021(!sideBarSub2021);
  const [sideBarSub2020, setSideBarSub2020] = useState(false);
  const showSideBarSub2020 = () => setSideBarSub2020(!sideBarSub2020);


  // const [yearToggle, setYearsToggle]
  // const [toggle, setToggle] = useState([false, false, false])
  // const switcher = (i) => setToggle([]))

  // useState(() => {
  //   console.log(toggle)
  // })
  return (
    <>
      <div className='flex bg-transparent h-12 justify-start items-center'>
        <VscIcons.VscMenu className="h-10 w-auto p-3 mx-1" onClick={showSideBar} />
        <IconContext.Provider value={{ className: "h-12 w-12 p-3 hover:bg-yellow-500" }}>
          <nav className={sideBar ? 'sideBar-active' : 'sideBar'}>
            <ul>
              <li className='flex bg-indigo-500 h-12 w-72 justify-between items-center'>
                <VscIcons.VscArrowLeft className='opacity-0' />
                <span>YEARS</span>
                <VscIcons.VscClose onClick={showSideBar} />
              </li>
              <IconContext.Provider value={{ className: "h-9 w-9 p-2 hover:bg-yellow-500" }}>
                <li className='sideBar-item'>
                  <Link to="year" className='flex justify-center items-center h-9 w-[87.5%]  hover:bg-yellow-500'><span>2022</span></Link>
                  <VscIcons.VscChevronRight onClick={() => { showSideBar(); showSideBarSub2022() }} />
                </li>
                <li className='sideBar-item'>
                  <Link to="year" className='flex justify-center items-center h-9 w-[87.5%]  hover:bg-yellow-500'><span>2021</span></Link>
                  <VscIcons.VscChevronRight onClick={() => { showSideBar();  showSideBarSub2021() }} />
                </li>
                <li className='sideBar-item'>
                  <Link to="year" className='flex justify-center items-center h-9 w-[87.5%]  hover:bg-yellow-500'><span>2020</span></Link>
                  <VscIcons.VscChevronRight onClick={() => { showSideBar();  showSideBarSub2020() }} />
                </li>
                {/* {
                  toggle.map((val, i) => <li className='sideBar-item'>
                    <span className='flex justify-center items-center h-9 w-[87.5%]  hover:bg-yellow-500'>2022</span>
                    <VscIcons.VscChevronRight onClick={() => { showSideBar(); switcher(i) }} />
                  </li>)
                } */}
              </IconContext.Provider>
            </ul>
          </nav>
          <nav className={sideBarSub2022 ? 'sideBar-active' : 'sideBar'}>
            <ul>
              <li className='flex bg-indigo-500 h-12 w-72 justify-between items-center'>
                <VscIcons.VscArrowLeft onClick={() => { showSideBar(); showSideBarSub2022() }} />
                <span>2022 EVENTS</span>
                <VscIcons.VscClose onClick={showSideBarSub2022} />
              </li>
              {sideBarData2022.map((item, index) => {
                return (
                  <Link className='flex items-center hover:bg-yellow-500' to={item.path}>
                    <li key={index} className={item.cName}>
                      <span>{item.title}</span>
                    </li>
                  </Link>
                )
              })}
            </ul>
          </nav>
          <nav className={sideBarSub2021 ? 'sideBar-active' : 'sideBar'}>
            <ul>
              <li className='flex bg-indigo-500 h-12 w-72 justify-between items-center'>
                <VscIcons.VscArrowLeft onClick={() => { showSideBar(); showSideBarSub2021() }} />
                <span>2021 EVENTS</span>
                <VscIcons.VscClose onClick={showSideBarSub2021} />
              </li>
              {sideBarData2021.map((item, index) => {
                return (
                  <Link className='flex items-center' to={item.path}>
                    <li key={index} className={item.cName}>
                      <span>{item.title}</span>
                    </li>
                  </Link>
                )
              })}
            </ul>
          </nav>
          <nav className={sideBarSub2020 ? 'sideBar-active' : 'sideBar'}>
            <ul>
              <li className='flex bg-indigo-500 h-12 w-72 justify-between items-center'>
                <VscIcons.VscArrowLeft onClick={() => { showSideBar(); showSideBarSub2020() }} />
                <span>2020 EVENTS</span>
                <VscIcons.VscClose onClick={showSideBarSub2020} />
              </li>
              {sideBarData2020.map((item, index) => {
                return (
                  <Link className='flex items-center' to={item.path}>
                    <li key={index} className={item.cName}>
                      <span>{item.title}</span>
                    </li>
                  </Link>
                )
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </>
  )
}
