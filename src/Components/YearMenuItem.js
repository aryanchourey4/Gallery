import React from 'react'
import { Link } from "react-router-dom";
import * as VscIcons from "react-icons/vsc";
import { IconContext } from "react-icons";
import { sideBarData2020, sideBarData2021, sideBarData2022 } from '../Data/SideBarData';

export default function YearMenuItem() {
  return (
    <>
    <li className='flex bg-indigo-500 h-12 w-72 justify-between items-center'>
                <VscIcons.VscArrowLeft onClick={() => {}} />
                <span>2022 EVENTS</span>
                <VscIcons.VscClose onClick={() => {}} />
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
      
    </>
  )
}
