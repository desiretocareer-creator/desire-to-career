const whatsappBusinessNumber = '+1 (289) 585-3894'
const contactEmail = 'info@desiretocareer.com'
const whatsappBusinessMessage =
  'Hi! I would like to Know more about your services. Could you please share more information?'
const whatsappDigits = whatsappBusinessNumber.replace(/\D/g, '')

export const siteConfig = {
  internalUsClients: 25,
  whatsappBusinessNumber,
  phoneUrl: whatsappDigits ? `tel:+${whatsappDigits}` : '',
  contactEmail,
  emailUrl: `mailto:${contactEmail}`,
  whatsappBusinessMessage,
  whatsappBusinessUrl: whatsappDigits
    ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(whatsappBusinessMessage)}`
    : '',
}