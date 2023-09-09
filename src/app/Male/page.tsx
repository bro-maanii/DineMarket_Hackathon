import ItemsMale from "@/components/Male_Section/ItemsMale";
import P8 from "/public/img(Home)/p8.png";
import P11 from "/public/img(Home)/p11.png";
import Link from "next/link";

export default function Home() {
    return (
        <section className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 gap-4 px-20 py-8">
            <Link href={'/Product/Flex-Push-Button-Bomber'}>
                <ItemsMale title="Flex Push Button Bomber" price={225} decrption="Jackets" img={P8}/>
            </Link>
            <Link href={'/Product/Raglan-Sweatshirt'}>
                <ItemsMale title="Raglan Sweatshirt" price={195} decrption="Sweater" img={P11}/>
            </Link>
        </section>
    )}