const services = [
"Residential Solar Installation",
"Commercial Solar Systems",
"Inverter & Battery Solutions",
"Solar Maintenance",
"Energy Consultation",
];


export default function ServicesPreview(){

return (

<section>

<div className="container">

<h2 className="text-4xl font-bold text-center mb-10">
Our Services
</h2>


<div className="grid md:grid-cols-3 gap-6">


{services.map((service)=>(

<div
key={service}
className="border rounded-xl p-6 shadow hover:shadow-lg"
>

<h3 className="text-xl font-bold mb-3">
{service}
</h3>


<p>
Professional solar solutions
designed for your energy needs.
</p>


</div>

))}


</div>


</div>

</section>

);

}