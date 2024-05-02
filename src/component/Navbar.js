import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
 
        <div className="">
          <div className=' w-full flex justify-center text-3xl pt-4'>

          <Link className="text-black" to="/">NewsMonkey </Link>
          </div>

          <div className="flex flex-row w-full justify-start ml-4" >

            <ul className="flex justify-between w-[150px]">
              <li className="">
                <Link className="" aria-current="page" to="/">Home 🏠</Link>
              </li>
              <div className='border-r'>

              </div>
              <li className="">
                <Link className="text-black" to="about">About 👋</Link>
              </li>
            </ul>
         
          </div>
        </div>
  
    )
  }
}
