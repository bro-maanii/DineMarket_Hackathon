import Image, {StaticImageData} from 'next/image'

function ItemsMale(props:{title:string,price:number,decrption:string,img:StaticImageData}){
  return (
    <div className='mb-10 cursor-pointer'>
        <Image src={props.img} alt='product' className='h-72 w-64'/>
        <h3 className='text-lg font-semibold'>{props.title}</h3>
        <p className='font-light'>{props.decrption}</p>
        <p className='font-bold'>${props.price}</p>
    </div>
  )
}

export default ItemsMale