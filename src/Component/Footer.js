import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import '../Styles/Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
    <div className='socialMedia'>
    <InstagramIcon/>
    <TelegramIcon/>
    <WhatsAppIcon/>
    <PhoneIcon/>
    <p>&copy; 2022 mohammadamin_ford_for_test_my_self.com</p>
    </div>
    </div>
  )
}

export default Footer