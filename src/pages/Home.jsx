import React from "react";

import HeroSlider from "../components/HeroSlider"; 
import GallerySlider from "./GallerySlider";
import Profil from "./Profil";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      <HeroSlider />
      <Profil />
      <GallerySlider />
    </div>
  );
}
