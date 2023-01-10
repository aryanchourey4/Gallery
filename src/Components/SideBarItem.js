import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSideBar } from "../Redux/sideBarTypeSlice";
import { viewSideBar } from "../Redux/showSideBarSlice";
import { changeYear } from "../Redux/yearSlice";
import { changeEvent } from "../Redux/eventSlice";
import { Link } from "react-router-dom";
import * as VscIcons from "react-icons/vsc";

export default function SideBarItem(props) {
    const SideBarType = useSelector((state) => state.SideBarType.value);
    const dispatch = useDispatch();
    if (!SideBarType)
        return (
            <>
                <li className="sideBar-item">
                    <Link to="/" className="flex justify-center items-center h-9 w-[87.5%]  hover:bg-yellow-500">
                        <span>{props.title}</span>
                    </Link>
                    <VscIcons.VscChevronRight onClick={() => {dispatch(viewSideBar());dispatch(changeYear(props.yearValue));dispatch(changeSideBar());dispatch(viewSideBar())}} />
                </li>
            </>
        );
    else 
        return (
            <>
                <Link className="flex items-center" to="/">
                    <li className="sideBar-item" onClick={() => {dispatch(changeEvent(props.eventValue))}}>
                        <span>{props.title}</span>
                    </li>
                </Link>
            </>
        );
}
