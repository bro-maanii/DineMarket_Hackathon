import ItemsMale from "@/components/Male_Section/ItemsMale";
import P1 from "/public/img(Home)/p1.png";
import P2 from "/public/img(Home)/p2.png";
import P3 from "/public/img(Home)/p3.png";
import P4 from "/public/img(Home)/p4.png";
import P5 from "/public/img(Home)/p5.png";
import P6 from "/public/img(Home)/p6.png";
import P7 from "/public/img(Home)/p7.png";
import P9 from "/public/img(Home)/p9.png";
import P10 from "/public/img(Home)/p10.png";
import P8 from "/public/img(Home)/p8.png";
import P11 from "/public/img(Home)/p11.png";
import Link from "next/link";

export default function Home() {
    return (
        <section className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 gap-6  px-20 py-12">
            <Link href={'/Product/Brushed-Raglan-Sweatshirt'}><ItemsMale  title="Brushed Raglan Sweatshirt" price={195} decrption="Sweater" img={P1}/></Link>
            <Link href={'/Product/Cameryn-Sash-tie-Dress'}><ItemsMale title="Cameryn Sash Tie Dress" price={545} decrption="Dress" img={P2}/></Link>
            <Link href={'/Product/Flex-Sweatshirt'}><ItemsMale title="Flex Sweatshirt" price={175} decrption="Sweater" img={P3}/></Link>
            <Link href={'/Product/Flex-Sweatpants'}><ItemsMale title="Flex Sweatpants" price={175} decrption="Pants" img={P4}/></Link>
            <Link href={'/Product/Pink-Fleece-Sweatpants'}><ItemsMale title="Pink Fleece Sweatpants" price={195} decrption="Pants" img={P5}/></Link>
            <Link href={'/Product/Lite-Sweatpants'}><ItemsMale title="Lite Sweatpants" price={150} decrption="Pants" img={P6}/></Link>
            <Link href={'/Product/Imperial-Alpaca-Hoodie'}><ItemsMale title="Imperial Alpaca Hoodie" price={525} decrption="Jackets" img={P7}/></Link>
            <Link href={'/Product/Flex-Push-Button-Bomber'}><ItemsMale title="Flex Push Button Bomber" price={225} decrption="Jackets" img={P8}/></Link>
            <Link href={'/Product/Muscle-Tank'}><ItemsMale title="Muscle Tank" price={75} decrption="T Shirts" img={P9}/></Link>
            <Link href={'/Product/Brushed-Bomber'}><ItemsMale title="Brushed Bomber" price={225} decrption="Jackets" img={P10}/></Link>
            <Link href={'/Product/Raglan-Sweatshirt'}><ItemsMale title="Raglan Sweatshirt" price={195} decrption="Sweater" img={P11}/></Link>
        </section>
    )}