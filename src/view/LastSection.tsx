import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const LastSection = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-6 mb-7">
        <h3 className="text-xl sm:text-2xl font-bold lg:font-extrabold lg:text-5xl md:font-bold md:text-4xl   ">Subscribe Our Newsletter</h3>
        <p className="text-sm sm:text-lg mt-4">Get the latest information and promo offers directly</p>
        <div className="mt-6 flex flex-row justify-center items-center ">
        <Input type="text" placeholder="Input Email Address" className="sm:w-64 w-48 h-9 border-gray-950"/>
        <Button variant="outline" className="text-white w-auto h-9 bg-gray-500 hover:bg-none ">Get Start</Button>
        
        </div>
    </div>
  )
}

export default LastSection