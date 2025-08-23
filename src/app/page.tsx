import DestinosAguaDoce from "@/components/cards-home/cards-destino-agua-doce";
import DestinosAguaSalgada from "@/components/cards-home/cards-destino-agua-salgada";
import HomeImage from "@/components/home-image";
import Banner from "@/components/home-image-banner";
import MapaDestinos from "@/components/mapa-destino";


export default function Home() {
  return (
    <>
     <Banner />
     <MapaDestinos/>
     <HomeImage />
     <DestinosAguaSalgada />
     <DestinosAguaDoce />
    </>
  );
}
