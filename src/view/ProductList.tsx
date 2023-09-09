import Products from "@/components/layouts(home)/Products"
import p1 from "/public/img(Home)/p1.png";
import p2 from "/public/img(Home)/p2.png";
import p3 from "/public/img(Home)/p3.png";


const ProductList = () => {
  return (
    <section>
    <div className="flex flex-col justify-center place-items-center">        
            <p className="text-blue-900 font-extrabold pb-3 ">PRODUCTS</p>
            <h3 className="text-2xl lg:text-4xl md:text-4xl sm:text-3xl pb-8 font-bold animate-bounce mt-6 ">Check What We Have</h3>
    </div>
    <div className="flex justify-evenly flex-wrap px-20 py-8 ">
        <Products title="Brushed Raglan Sweatshirt" price={195} img={p1}/> 
        <Products title="Cameryn Sash Tie Dress" price={545} img={p2}/> 
        <Products title="Flex Sweatshirt" price={175} img={p3}/> 
    </div>
    </section>
  )
}

export default ProductList