import Image from "next/image";

export default function Footer(){

return(

<footer className="bg-gray-900 text-white text-center py-8">


<Image
src="/images/moseslogo.png"
alt="SUNSPARK ENERGY Logo"
width={180}
height={100}
className="mx-auto mb-4"
/>


<p>
© {new Date().getFullYear()} SUNSPARK ENERGY
</p>


<p>
+2349029355082 | info@sunsparkenergy.com
</p>


</footer>

);

}