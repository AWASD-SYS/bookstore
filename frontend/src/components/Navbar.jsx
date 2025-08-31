import { Link } from "react-router-dom";
import { AiOutlineBars } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa'
import { BsHeart } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import avatarImg from '../assets/avatar.png'
import { useState } from "react";


const navigation=[
        {name:"Dashboard",href:"/dashboard"},
        {name:"orders",href:"/orders"},
        {name:"Cart Page",href:"/Cart Page"},
        {name:"Check Out",href:"/Check Out"},

    ]

const Navbar=()=>{
    const [isDropdownOpen,setInDropdownOpen]=useState(false);
    const currentUser=true;
  



    return(
        <header className="max-w-screen-2xl mx-auto px-4 py-6">
            <nav className="flex justify-between items-center"> 
                {/* left side */}
                <div className="flex items-center md:gap-16 gap-4">
                    <Link to={'/'}>
                        <AiOutlineBars className="size-6"/>
                    </Link>
                     {/* search input */}
                    <div className="relative sm:w-72 w-40 spaace-x-2">
                        <FaSearch className=" inline-block absolute left-3 inset-2" />
                        <input type="text" placeholder="search here" className="bg-[#EAEAEA] w-full py-1 md:px-8 px-8 rounded-md focus:outline-none"/>
                    </div>
                </div>

                {/* right side */}
                <div className="relative flex items-center md:space-x-3 space-x-2"> 
                    <div >
                        {
                            currentUser ?<>
                                <button onClick={()=>setInDropdownOpen(!isDropdownOpen)} >
                                    <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' :''} `}/>
                                </button>
                                {/* show dropdowns */}
                                {
                                    isDropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                            <ul className="py-2">
                                                {
                                                  navigation.map((item)=>(
                                                    <li key={item.name} onClick={()=>setInDropdownOpen(false)}>
                                                        <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                  ))
                                                }
                                            </ul>
                                        </div>
                                    )
                                }

                            </>:<Link to={'/login'}>
                                    <FaRegUser className="size-6"/>
                                </Link>
                        }
                    </div>
                   
                    <button className="hidden sm:block">
                        <BsHeart className="size-6"/>
                    </button>
                    <Link to='/cart' className="bg-primary p-1 sm:px-6 flex items-center rounded-md focus:outline-none">
                        <AiOutlineShoppingCart className="size-6"/>
                        <span className="text-sm font-semibold sm:ml-2">0</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;