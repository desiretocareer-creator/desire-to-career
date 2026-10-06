const whatsappBusinessNumber = '+1 (289) 585-3894'
const callingNumber = '+1 (201) 856-6775'
const contactEmail = 'info@desiretocareer.com'
const whatsappBusinessMessage =
  'Hi! I would like to Know more about your services. Could you please share more information?'
const whatsappDigits = whatsappBusinessNumber.replace(/\D/g, '')

export const siteConfig = {
  internalUsClients: 25,
  whatsappBusinessNumber,
  callingNumber,
  phoneUrl: whatsappDigits ? `tel:+${whatsappDigits}` : '',
  contactEmail,
  emailUrl: `mailto:${contactEmail}`,
  whatsappBusinessMessage,
  whatsappBusinessUrl: whatsappDigits
    ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(whatsappBusinessMessage)}`
    : '',
}