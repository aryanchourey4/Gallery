import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeSideBar } from '../Redux/sideBarTypeSlice'
import { Link } from "react-router-dom";
import * as VscIcons from "react-icons/vsc";


export default function SideBarItem(props) {
    const SideBarType = useSelector((state) => state.SideBarType.value);
    const dispatch = useDispatch();
    if(!SideBarType){
  return (
    <>
        <li className='sideBar-item'>
            <Link to={props.path} className={props.cName}>
                <span>{props.title}</span>
            </Link>
            <VscIcons.VscChevronRight/>
        </li>
    </>
  )}
  else{
    return (
        <>
        <Link className='flex items-center' to={props.path}>
            <li className={props.cName}>
                <span>{props.title}</span>
            </li>
        </Link>
        </>
      )
  }
}
