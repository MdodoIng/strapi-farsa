import HeroSection from "components/HeroSection";
import MainProducts from "components/MainProducts";
import BreadCrumbs from "ui/BreadCrumbs";

import dummi from "@/images/chiken beriyani.webp";

export default function Home() {
  const breadCrumbs = ["Rice", "Smoothie", "Soup", "Salad", "Noodles"];
  const data = [
    {
      foodName: "Farsa Special Chicken Biriyani",
      rate: 150,
      picture: dummi,
    },
    {
      foodName: "Farsa Special Chicken Biriyani",
      rate: 350,
      picture: dummi,
    },
    {
      foodName: "Farsa Special Chicken Biriyani",
      rate: 250,
      picture: dummi,
    },
  ];
  return (
    <main className="main_padding min-h-screen w-full mt-52">
      <div className="max-w-2xl mx-auto ">
        <HeroSection data={data} />
        <BreadCrumbs data={breadCrumbs} />
        <MainProducts data={data} />
      </div>
    </main>
  );
}
