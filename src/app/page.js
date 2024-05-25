import History from "@/components/home/history/History";
import OurCap from "@/components/home/ourCap/OurCap";
import Product from "@/components/home/products/Product";
import Section from "@/components/home/section4/section";
import Welcome from "@/components/home/welcome/welcome";
export default function Home() {
  return (
    <>  
      <Welcome/>
      <History/>
      <OurCap/>
      <Section/>
      <Product/>
    </>
  );
}
