import Link from "next/link";


export default function CTA(){

return(

<section className="bg-yellow-500">

<div className="container text-center">


<h2 className="text-4xl font-bold mb-5">
Ready to Switch to Solar?
</h2>


<p className="mb-6">
Contact SUNSPARK ENERGY today
for professional solar assessment.
</p>


<Link
href="/contact"
className="bg-black text-white px-8 py-4 rounded-lg"
>

Request Quote

</Link>


</div>

</section>

);

}