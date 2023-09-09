import Image from "next/image"
import logo from "/public/img(Home)/Logo.webp";
import { Button } from "../ui/button";
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Copyright } from 'lucide-react';
import Link from "next/link";

const Footer = () => {
  return (
    <footer >
    <div  className="flex flex-row flex-wrap justify-between px-20 pt-24">
    <div className="h-auto  mb-7">
        <Image src={logo} alt="logo" className="h-auto w-36 sm:w-52 mb-6"/>
        <p className="font-light text-lg sm:w-96  mb-6">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
        <Button variant="outline" className="text-black w-auto sm:h-9  bg-red-600 hover:delay-300 hover:scale-95 cursor-pointer mr-4 mb-3"><Instagram/></Button>
        <Button variant="outline" className="text-black w-auto sm:h-9 bg-blue-700 hover:delay-300 hover:scale-95 cursor-pointer mr-4 mb-3"> <Facebook/></Button>
        <Button variant="outline" className="text-black w-auto sm:h-9 bg-blue-400 hover:delay-300 hover:scale-95 cursor-pointer mr-4 mb-3"><Linkedin/></Button>   
    </div>
    <div className="flex flex-row  flex-wrap justify-between pb-6">
    <div  className="h-auto w-36 ">
        <h5 className="mb-6  text-xl font-extrabold text-gray-500">Company</h5>
        <ul className="flex flex-col gap-y-2 ">
                <li className="text-base cursor-pointer hover:underline">
                    <Link href="/">About</Link>            
                    </li>
                <li className="text-base cursor-pointer hover:underline">
                    <Link href="/">Terms of Use</Link>
                </li>
                <li className="text-base cursor-pointer hover:underline">
                    <Link href="/">Privacy Policy</Link>
                </li>
                <li className="text-base cursor-pointer hover:underline">
                    <Link href="/">How it Works</Link>
                </li>
                <li className="text-base cursor-pointer hover:underline">
                    <Link href="/">Contact Us</Link>
                </li><br />
            </ul>
    </div>
    <div className="h-auto w-36">
        <h5 className="mb-6 text-xl font-extrabold text-gray-500">Support</h5>
        <ul className="flex flex-col gap-y-2">
                <li className="text-base cursor-pointer hover:underline">
                    <Link href="/">Support Carrer</Link>            
                    </li>
                <li className="text-base cursor-pointer hover:underline">
                    <Link href="/">24h Service</Link>
                </li>
                <li className="text-base cursor-pointer hover:underline">
                    <Link href="/">Quick Chat</Link>
                </li><br />
            </ul>
    </div>
    <div className="h-auto w-36">
        <h5 className="mb-6 text-xl font-extrabold text-gray-500">Contact</h5>
        <ul className="flex flex-col gap-y-2">
                <li className="text-base cursor-pointer hover:underline">
                    <Link href="/">Whatsapp</Link>            
                    </li>
                <li className="text-base cursor-pointer hover:underline">
                    <Link href="/">24h Service</Link>
                </li>
                <li className="text-base cursor-pointer hover:underline">
                    <Link href="/">Support 24h</Link>
                </li><br />
            </ul>
    </div>
    </div>
    </div>
    {/* horizontal line k neechy wala */}
    <div className="border-t-2 border-black ">
        <div className="flex flex-row flex-wrap justify-between px-20 mt-8 mb-3">
            <p>Copyright <button ><Copyright className="h-4"/></button> 2022 Dine Market</p><br />
            <p>Design by. <span className="font-bold"> Weird Design Studio</span></p><br />
            <p>Code by. <span className="font-bold"> BroMaanii on github</span></p>
        </div>
    </div>
    </footer>
  )
}

export default Footer