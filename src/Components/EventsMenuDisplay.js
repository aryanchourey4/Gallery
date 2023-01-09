import React from 'react'
import { Link } from 'react-router-dom'

export default function EventsMenuDisplay() {
    return (
        <>
            <div className='flex flex-col justify-items-center'>
                <h1 className='flex justify-center items-center'>*YEAR*</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit labore quisquam ullam repudiandae, earum facilis, illum doloribus maxime dicta soluta, neque maiores officia aliquam corporis eum sint veniam laudantium voluptatem adipisci similique eligendi. Dolorum eius recusandae tenetur nobis quia aut? Alias voluptate explicabo quasi, adipisci dignissimos iusto totam cupiditate quidem earum quae nemo. Ipsum, quaerat.</p>
                <div className="grid justify-items-center grid-cols-3 gap-12">
                    <Link to='/images'><div className='flex justify-center items-center h-60 w-80 bg-red-300 rounded-3xl'>Event 1</div></Link>
                    <Link to='/images'><div className='flex justify-center items-center h-60 w-80 bg-red-300 rounded-3xl'>Event 2</div></Link>
                    <Link to='/images'><div className='flex justify-center items-center h-60 w-80 bg-red-300 rounded-3xl'>Event 3</div></Link>
                    <Link to='/images'><div className='flex justify-center items-center h-60 w-80 bg-red-300 rounded-3xl'>Event 4</div></Link>
                    <Link to='/images'><div className='flex justify-center items-center h-60 w-80 bg-red-300 rounded-3xl'>Event 5</div></Link>
                </div>
            </div>
        </>
    )
}
