import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import CryptoCoins from "@/components/CryptoCoins";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <MobileNav />
      <CryptoCoins />
    </div>
  );
}
