
export const footerData = {
  brand: {
    name: "Antojitos",
    description:
      "El sabor que te provoca volver. Pollo a la brasa, broaster y especialidades para disfrutar y compartir.",
    slogan: "Hecho con sabor, pensado para compartir.",
  },

  navigation: [
    {
      id: "inicio",
      label: "Inicio",
      href: "#inicio",
    },
    {
      id: "menu",
      label: "Nuestro menú",
      href: "#menu",
    },
    {
      id: "promociones",
      label: "Promociones",
      href: "#promociones",
    },
    {
      id: "nosotros",
      label: "Nosotros",
      href: "#nosotros",
    },
  ],

  information: [
    {
      id: "testimonios",
      label: "Testimonios",
      href: "#testimonios",
    },
    {
      id: "como-pedir",
      label: "Cómo pedir",
      href: "#como-pedir",
    },
    {
      id: "contacto",
      label: "Contacto",
      href: "#contacto",
    },
  ],

  contact: {
    phone: import.meta.env.VITE_WHATSAPP_NUMBER || "",
    address: null,
    schedule: null,
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
  },

  copyright: "Antojitos",

  // Proyecto conceptual para el portafolio.
  isDemo: true,
}
