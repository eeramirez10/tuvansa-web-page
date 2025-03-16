import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css'

export const WhatsAppButton = () => {
  return (
    <a
      href="https://web.whatsapp.com/send?phone=+5215596603295"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp />
    </a>
  )
}
