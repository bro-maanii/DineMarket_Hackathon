"use cilent"

import { Button } from "../ui/button";
import {Plus, Minus, ShoppingCart } from "lucide-react";
import Image, {StaticImageData} from 'next/image'
import { useState } from "react";



function Product_info(props:{title:string,price:number,decrption:string,img:StaticImageData}){
    const [count,setCount]=useState(1)
  return (
    <section className="grid grid-rows-1 bg-slate-100 ">
        <div className="grid grid-cols-3 sm:gap-4 sm:px-20 p-1 py-12 ">
            {/* image */}
            <div className="flex sm:col-span-2 sm:gap-x-2 p-1 sm:px-4">
                <Image src={props.img} alt="p8" className="hidden sm:block h-28 w-28" /><br />
                <Image src={props.img} alt="p8" className="h-4/5 w-4/5 sm:h-4/5 sm:w-4/5" />
            </div>
            {/* description */}
            <div className="lg:mt-10 sm:col-span-1 col-span-2">
                <div className="mb-6"> 
                    <h3 className="text-lg font-bold sm:text-3xl">{props.title}</h3>
                    <p className="text-base font-semibold sm:text-lg">{props.decrption}</p>
                </div>
                <div className="mb-6">
                    <p className="text-base sm:text-xl font-bold mb-3">Select Size:- </p>
                    <div className="mb-3 flex gap-2">
                        <Button variant="ghost" className="text-black text-xs rounded-full bg-slate-200 hover:bg-slate-400 hover:drop-shadow-2xl">S</Button>
                        <Button variant="ghost" className="text-black text-xs rounded-full bg-slate-200 hover:bg-slate-400 hover:drop-shadow-2xl">M</Button>
                        <Button variant="ghost" className="text-black text-xs rounded-full bg-slate-200 hover:bg-slate-400 hover:drop-shadow-2xl">L</Button>
                        <Button variant="ghost" className="text-black text-xs  rounded-full bg-slate-200 hover:bg-slate-400 hover:drop-shadow-2xl">XL</Button>
                    </div>
                </div>
                <div className="flex flex-row mb-6 gap-2">
                    <p className="text-base sm:text-xl font-bold pr-4">Quality: </p>
                    <Button variant="ghost" onClick={()=>{    
                        if(count>1){
                            setCount(count-1)
                        }else{
                            setCount(count)
                        }
                        
                    }} className=" rounded-full p-3 bg-slate-200 hover:bg-slate-400 "><Minus size={12}  strokeWidth={4} absoluteStrokeWidth /></Button>
                    <p className="text-base font-bold pt-1 m-1 ">{count}</p>
                    <Button variant="ghost" onClick={()=>{
                        setCount(count+1)
                    }} className=" rounded-full p-3 bg-slate-200 hover:bg-slate-400 " ><Plus size={12} strokeWidth={4} absoluteStrokeWidth /></Button>
                </div>
                <div className="flex flex-row items-center">
                    <Button variant="outline" className="text-white text-sm sm:text-base bg-black hover:bg-none "><ShoppingCart className="mr-1" />Add to Cart</Button>
                    <p className="text-2xl font-bold ml-4">${props.price * count}</p>
                </div>
            </div>
        </div>

        {/* details in english */}
        <div className=" px-2 py-20 sm:p-20 ">
            <div className="bg-white p-8">
            <div className="mb-12">
                <p className="text-lg sm:text-4xl font-bold animate-bounce mt-4">Product Information</p>
            </div>
            <div className="border-t-2 mb-12 border-black grid grid-cols-3">
                <div className=" mt-7 font-bold text-base sm:text-xl text-slate-500">
                    <p>Product Details</p>
                </div>
                <div className="mt-7 sm:text-base text-sm col-span-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="grid grid-cols-3 ">
                <div className="  font-bold text-base sm:text-xl text-slate-500">
                    <p>Product Care</p>
                </div>
                <div className="col-span-2">
                    <ul className="list-disc sm:text-base text-sm  font-semibold">
                        <li>Hand wash using cold water</li>
                        <li>Do not using bleach.</li>
                        <li>Hang it to dry.</li>
                        <li>Iron on low temperature.</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        
    </section>

    )
}

export default Product_info