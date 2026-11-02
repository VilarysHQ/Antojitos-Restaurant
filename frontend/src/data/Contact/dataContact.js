export const contactData = {
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "",
  initialMessage: "¡Hola, Antojitos! 🍗 Quisiera realizar una consulta.",
  address: "Av. Los Álamos 123, San Juan de Lurigancho (Lima, Perú)", // Puedes cambiarlo
  schedule: "Lun - Dom: 12:00 p.m. - 11:00 p.m.", // Puedes cambiarlo
}

export const cleanPhone = (value) => value.replace(/\D/g, "")

export const buildWhatsAppUrl = (phone, message) => {
  if (!phone) return null
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}