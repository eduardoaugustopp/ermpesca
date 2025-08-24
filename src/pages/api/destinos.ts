import { NextApiRequest, NextApiResponse } from "next";

interface FishingDestination {
  name: string;
  link: string;
  image: string;
  description: string;
  duration: string;
  packageType: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    if (req.query.type === "aguaDoce") {
      const destinations: FishingDestination[] = [
        {
          name: "Registro",
          link: "/destinos/ribeira",
          image: "/imagens/cards-destino-agua-doce/registro.png",
          description: "Pesca tranquila nos rios da região, com ajuda de guia.",
          duration: "2 dias",
          packageType: "Inclui hospedagem e guia",
        },
      ];

      return res.status(200).json(destinations);
    }

    if (req.query.type === "aguaSalgada") {
      const destinations: FishingDestination[] = [
        {
          name: "Cananéia",
          link: "/destinos/ribeira",
          image: "/imagens/cards-destino-agua-salgada/cananeia.png",
          description: "Pesca no mar com paisagens bonitas e guia experiente.",
          duration: "2 dias",
          packageType: "Hospedagem e barco incluídos",
        },
        {
          name: "Iguape",
          link: "/destinos/ribeira",
          image: "/imagens/cards-destino-agua-salgada/iguape.png",
          description: "Pesca nos canais e no mar, com guia local.",
          duration: "2 dias",
          packageType: "Pousada e guia incluídos",
        },
        {
          name: "Ilha Comprida",
          link: "/destinos/ribeira",
          image: "/imagens/cards-destino-agua-salgada/ilha-comprida.png",
          description: "Pesca na praia e nos mangues, ideal para toda a família.",
          duration: "2 dias",
          packageType: "Hospedagem perto da praia e guia",
        },
      ];

      return res.status(200).json(destinations);
    }

    return res.status(404).json({ message: "Tipo de destino não encontrado" });
  }

  return res.status(405).json({ message: "Método não permitido" });
}
