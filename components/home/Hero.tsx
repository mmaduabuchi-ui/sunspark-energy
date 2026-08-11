import Link from "next/link";


export default function Hero(){

return (

<section className="bg-gray-900 text-white">

<div className="container">

<h1 className="text-5xl font-bold mb-6">

Reliable Solar Energy Solutions
For Homes and Businesses

</h1>


<p className="text-xl mb-8 max-w-3xl">

SUNSPARK ENERGY provides professional solar
installation, inverter solutions and battery
systems that deliver reliable electricity.

</p>


<Link
href="/contact"
className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold"
>

Get a Quote

</Link>


</div>

</section>

);

}