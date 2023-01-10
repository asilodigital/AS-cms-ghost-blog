import TelegramSVG from '../../public/telegram.svg'
import Image from 'next/image'

const Twitter_Icon = () => (
    <Image src={TelegramSVG} 
         alt="Ilustración de una cadena"
         width="32px"
         height="16px"
         placeholder="empty" 
    ></Image>
)

export default Twitter_Icon;