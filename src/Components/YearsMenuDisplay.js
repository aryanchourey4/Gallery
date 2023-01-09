import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { hello, bello } from '../Redux/helloSlice';
import { sideBarData2020, sideBarData2021, sideBarData2022 } from '../Data/SideBarData';


export default function YearsMenuDisplay() {
    const text = useSelector((state) => state.halleyo.value);
    const dispatch = useDispatch();
    const bla = [sideBarData2020,sideBarData2021,sideBarData2022];

    return (
        <>
            <div className='flex flex-col justify-items-center'>
                <h1 className='flex justify-center items-center'>Gallery Home</h1>
                <span>{bla[1][1].title}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fuga maiores magni, labore aperiam natus pariatur mollitia quis doloremque odit accusamus officiis atque aspernatur laboriosam perferendis expedita in ab sunt suscipit sapiente beatae laudantium! Debitis quam porro molestias ut quo facilis deleniti optio at repellat dolor quaerat, blanditiis distinctio consectetur!</p>
                <span>{text}</span><span onClick={() => dispatch(hello('donkey'))}>hello</span><span onClick={() => dispatch(bello())}>bello</span>
                <div className="grid justify-items-center grid-cols-3 gap-12">
                    <Link to="year"><div className='flex justify-center items-center h-60 w-80 bg-violet-300 rounded-3xl'>2022</div></Link>
                    <Link to="year"><div className='flex justify-center items-center h-60 w-80 bg-violet-300 rounded-3xl'>2021</div></Link>
                    <Link to="year"><div className='flex justify-center items-center h-60 w-80 bg-violet-300 rounded-3xl'>2020</div></Link>
                    <Link to="year"><div className='flex justify-center items-center h-60 w-80 bg-violet-300 rounded-3xl'>2019</div></Link>
                    <Link to="year"><div className='flex justify-center items-center h-60 w-80 bg-violet-300 rounded-3xl'>2018</div></Link>
                </div>
            </div>
        </>
    )
}
