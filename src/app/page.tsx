'use client'

import Destinos from "@/components/destinos";
import HomeImage from "@/components/home-image";
import Banner from "@/components/home-image-banner";
import MapaDestinos from "@/components/mapa-destino";

export default function Home() {
  return (
    <>
      <Banner />
      <Destinos tipo="aguaSalgada" titulo="DESTINOS EM ÁGUA SALGADA" />
      <Destinos tipo="aguaDoce" titulo="DESTINOS EM ÁGUA DOCE" />
      <HomeImage />
      <MapaDestinos />
    </>
  );
}
