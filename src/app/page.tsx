import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./Components/Banner/Banner";
import HomeProducts from "./Components/HomeProducts/HomeProducts";
import CategoryFilter from "./Components/CategoryFilter/CategoryFilter";
import TodaysDeal from "./Components/TodaysDeal/TodaysDeal";
export default function Home() {
  return (
    <>
    <Banner />
    <CategoryFilter/>
    
    <TodaysDeal />
    </>
  );
}

