import React from 'react';
import { IconMenu2, IconX } from "@tabler/icons-react";

const NavBar = () => {
    // const [open, setOpen] = useState(false);

    return (
        <nav className="w-full py-6 px-4 md:px-10 flex items-center justify-end relative">

            {/* Logo */}
            {/* <h1 className="text-2xl font-bold select-none">
                <span className="text-white">Alex</span>
                <span className="text-[#FF005C]"> Stark</span>
            </h1> */}

            {/* Desktop Menu + Button */}
            {/* <div className="hidden md:flex items-center">
                <ul className="flex items-center gap-10 text-white font-medium">
                    <li className="hover:text-[#FF005C] cursor-pointer transition">Home</li>
                    <li className="hover:text-[#FF005C] cursor-pointer transition">About</li>
                    <li className="hover:text-[#FF005C] cursor-pointer transition">Service</li>
                    <li className="hover:text-[#FF005C] cursor-pointer transition">Portfolio</li>
                    <li className="hover:text-[#FF005C] cursor-pointer transition">Contact</li>
                </ul>

                <button className="ml-6 px-5 py-2 border border-[#FF005C] text-[#FF005C] rounded-full hover:bg-[#FF005C] hover:text-white transition cursor-pointer">
                    Hire Me
                </button>
            </div> */}

            {/* <button className="ml-6 px-5 py-2 border border-[#FF005C] text-[#FF005C] rounded-full hover:bg-[#FF005C] hover:text-white transition cursor-pointer">
                Hire Me
            </button> */}

            <button className="ml-6 px-5 py-2 text-white bg-[#FF005C] rounded-full cursor-pointer">
                Hire Me
            </button>

            {/* <button 
                className="md:hidden text-white"
                onClick={() => setOpen(!open)}
            >
                {open ? <IconX size={30} /> : <IconMenu2 size={30} />}
            </button>

            {open && (
                <div className="absolute top-full left-0 w-full bg-[rgba(0,0,0,0.4)] backdrop-blur-lg border-t border-white/10 py-6 px-10 md:hidden animate-slideDown">
                    <ul className="flex flex-col gap-6 text-white font-medium text-lg">
                        <li className="hover:text-[#FF005C] transition cursor-pointer">Home</li>
                        <li className="hover:text-[#FF005C] transition cursor-pointer">About</li>
                        <li className="hover:text-[#FF005C] transition cursor-pointer">Service</li>
                        <li className="hover:text-[#FF005C] transition cursor-pointer">Portfolio</li>
                        <li className="hover:text-[#FF005C] transition cursor-pointer">Contact</li>
                    </ul>

                    <button className="mt-6 px-5 py-3 w-full border border-[#FF005C] text-[#FF005C] rounded-full hover:bg-[#FF005C] hover:text-white transition cursor-pointer">
                        Hire Me
                    </button>
                </div>
            )} */}
        </nav>
    );
};

export default NavBar;
