import { Button } from "@/components/ui/button"
import Image from "next/image";
import last from "/public/img(Home)/feature.png";


const Section2 = () => {
  return (
    <section className="flex flex-row justify-evenly flex-wrap gap-x-3 px-20 py-8 bg-slate-100 ">
        <div className=" " >
             <div className="flex flex-col  h-48 w-44 ">
                <h3 className="text-lg font-bold ">Using Good Quality Materials</h3>
                <p className=" text-base">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>           
            <div className="flex flex-col h-48 w-44">
                <h3 className="text-lg font-bold mt-1">Modern Fashion Design</h3>
                <p className="text-base">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                
            </div>
        </div>
        
        <div className="">
            <div className="flex flex-col h-48 w-44">
                <h3 className="text-lg font-bold ">100% Handmade Products</h3>
                <p className="text-base">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                
            </div>
            <div className="flex flex-col h-48 w-44 ">
                <h3 className="text-lg font-bold mt-1">Discount for Bulk Orders</h3>
                <p className="text-base">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>        
            </div>
        </div>
<div className=" flex flex-row ">
        <div className="flex flex-row">
            <Image src={last} alt="pic" className="h-auto w-80"/>
        </div>

        <div className="flex flex-col h-72 w-60  pl-4">
            <p className="items-center text-sm lg:text-xl md:text-xl sm:text-base">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
            <Button variant="outline" className="text-white w-32 mt-0  lg:mt-2 md:mt-2 sm:w-auto bg-gray-500 hover:bg-orange-300  lg:mb-3 text-sm lg:w-auto md:w-auto">See All Products</Button>
        </div>
        </div>
    </section>
    
  )
}

export default Section2