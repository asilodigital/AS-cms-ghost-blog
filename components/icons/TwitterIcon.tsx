import TwitterSVG from '../../public/twitter.svg'
import Image from 'next/image'

const Twitter_Icon = () => (
    <Image src={TwitterSVG} 
         alt="Ilustración de una cadena"
         width="32px"
         height="16px"
         placeholder="empty" 
    ></Image>
)

export default Twitter_Icon;