import Link from "next/link"
import Button from "@/app/button/page"

export default function Navbar(){
    return(
        <div  style={{ width: '100', height: '50px' ,  marginTop: '10px'}}  className="bg-black text-white  ">
   
            <i><b>
         <Link href="/"  className="ml-80 hover:text-blue-500 ">Home</Link>  
          <Link href="/project" className="ml-12 hover:text-blue-500">Project</Link> 
          <Link href="/skills" className="ml-12 hover:text-blue-500">Skills</Link> 
          <Link href="/contact" className="ml-12 hover:text-blue-500">Contact</Link> 
          <Link href="/about" className="ml-12 hover:text-blue-500">About </Link> 
        <Button/>
        </b>
        </i>
        </div>
    )
}