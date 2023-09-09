import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import header from "/public/img(Home)/header.webp";
import brand1 from "/public/img(Home)/brand1.webp";
import brand2 from "/public/img(Home)/brand2.webp";
import brand3 from "/public/img(Home)/brand3.webp";
import brand4 from "/public/img(Home)/brand4.webp";
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="px-20 py-8 flex justify-center place-items-center  ">
        {/* left side div */}
        <div className="flex-1">
        <Badge variant="outline" className="mb-6 text-blue-700 bg-blue-200 text-lg ">Sale 70%</Badge>
        
        <h1 className="mb-6 text-4xl font-extrabold lg:text-5xl ">An Industrial Take on Streetwear</h1>
         
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, amet obcaecati? Dolorum tempora voluptatum nobis possimus.</p>
        <br />
        <Button variant="outline" className="text-white bg-black hover:bg-none mb-16"><ShoppingCart className="mr-1" />Start Shopping</Button>

        <div className="wrapper">
          <h1 className="text-lg font-semibold text-center pb-6">Top Clients</h1>
        <div className="flex justify-between flex-wrap mr-7 mb-6">
        <Image src={brand1} alt="Brand1" className="pr-3 pb-3" />
        <Image src={brand2} alt="Brand2" className="pr-3 pb-3" />
        <Image src={brand3} alt="Brand3" className="pr-3 pb-3" />
        <Image src={brand4} alt="Brand4" className="pr-3 pb-3" />
        </div>
        </div>
        </div >

        {/* Right side div */}
        <div className="hidden md:block w-auto  rounded-full xl:align-middle bg-orange-200  ">
            <Image src={header} alt="hero1" className="" />
        </div>
    </section>
  )
}
