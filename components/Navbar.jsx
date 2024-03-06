import { Button } from "./ui/button"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="bg-white py-5 px-10 hidden lg:flex justify-between">
     <Link href="/">
      <p className="text-2xl cursor-pointer">Koinx</p>
     </Link>
      <div className="flex gap-x-4">
        <Button variant="ghost" className="font-bold text-lg">
          Crypto Taxes
        </Button>
        <Button variant="ghost" className="font-bold text-lg">
          Free Tools
        </Button>
        <Button variant="ghost" className="font-bold text-lg">
          Resource Center
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-400 font-bold text-lg">Get Started</Button>
      </div>
    </div>
  );
}

export default Navbar
