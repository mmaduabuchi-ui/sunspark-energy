export default function WhyChooseUs(){

const reasons=[
"Quality solar equipment",
"Professional installation",
"Reliable customer support",
"Customized energy solutions"
];


return (

<section className="bg-gray-100">

<div className="container">


<h2 className="text-4xl font-bold mb-8">
Why Choose SUNSPARK ENERGY?
</h2>


<ul className="space-y-4">


{reasons.map(reason=>(

<li
key={reason}
className="text-lg"
>

✓ {reason}

</li>

))}


</ul>


</div>

</section>

);

}