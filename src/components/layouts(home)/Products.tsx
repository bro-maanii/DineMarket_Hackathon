import Image, {StaticImageData} from 'next/image'
import Link from 'next/link'

function Products(props:{title:string,price:number,img:StaticImageData}) {
  return (
    // 
    <div className='lg:transition lg:duration-300 lg:delay-150 lg:hover:delay-300 lg:hover:scale-110 md:transition md:duration-300 md:delay-150 md:hover:delay-300 md:hover:scale-95 
    sm:transition sm:duration-300 sm:delay-150 sm:hover:delay-300 sm:hover:scale-90 cursor-pointer'>
      <Link href={"/All-Products"}>
        <Image src={props.img} alt='product' className='h-96 w-96'/>
        <h3 className='text-lg font-semibold'>{props.title}</h3>
        <p className='font-bold mb-6'>${props.price}</p></Link>
    </div>
  )
}

export default Products