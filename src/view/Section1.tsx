import Image from "next/image";
import event1 from "/public/img(Home)/event1.png";
import event2 from "/public/img(Home)/event2.png";
import event3 from "/public/img(Home)/event3.png";
import { Button } from "@/components/ui/button";

const Section1 = () => {
  return (
    <section className="px-20 py-8">
        {/* Upper items */}
        <div className="flex flex-col justify-center place-items-center">        
            <p className="text-blue-900 font-extrabold pb-3 ">PROMOTIONS</p>
            <h3 className="text-2xl lg:text-4xl md:text-4xl sm:text-3xl pb-8 font-bold animate-bounce mt-6">Our Promotions Events</h3>
        </div>
    <section className=" flex flex-wrap justify-evenly">
        {/* div of coloum */}
        <section  >
        <div className="flex gap-x-6 mb-6 w-auto bg-gray-400 justify-center items-center ">
             <div className="flex-1 ">
                <h3 className=" m-6 text-lg font-extrabold lg:text-4xl  md:text-4xl  ml-3">GET UP TO <span className="text-lg sm:text-2xl lg:text-5xl md:text-5xl ">60%</span></h3>
                <p className="ml-3 m-6 text-lg lg:text-xl md:text-xl">For the summer season</p>
            </div>
        
            <div className="hidden sm:flex-1  sm:block " >
                <Image src={event1} alt="promotion1" />
            </div>           
        </div>
        <div className=" bg-black mb-5">
             <div className="flex  flex-col place-items-center">
                <h3 className="text-xl sm:text-4xl text-white font-bold mt-8">GET UP TO 30%</h3>
                <p className="text-sm sm:text-lg text-white">USE PROMO CODE</p>
                <Button variant="outline" className="text-white text-xs sm:text-base w-auto mt-4  bg-gray-500 hover:bg-black hover:text-white hover:italic mb-3 lg:w-1/2 md:w-1/2 sm:w-1/2">DINE WEEKEND SALE</Button>
            </div>
        </div>
        </section>
        {/* div of row */}
        <section className="flex flex-row gap-x-6">
            <div className="bg-orange-200 flex flex-col w-auto ">
                <div className="mx-2">
                <p className="font-semibold font-serif mb-2">Flex Sweatshirt</p>
                <p className="font-extrabold"><span className="line-through pr-2 font-light ">$100.00</span>$75.00</p>
                </div><br />
                <div className="flex justify-self-auto">
                    <Image src={event2} alt="promotion2"/> 
                </div>
            </div>

            <div className="bg-gray-400 flex flex-col w-auto ">
            <div className="mx-2">
                <p className="font-semibold font-serif mb-2">Flex Push Button Bomber</p>
                <p className="font-extrabold"><span className="line-through pr-2 font-light">$225.00</span>$190.00</p>
                </div>
                <div className="lg:mt-5 md:mt-5 sm:mt-5">
                    <Image src={event3} alt="promotion3"/> 
                </div>
            </div>
        </section>
    </section>
    </section>
  )
}

export default Section1