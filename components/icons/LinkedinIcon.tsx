import LinkedinSVG from '../../public/Linkedin.svg'
import Image from 'next/image'

const Linkedin_Icon = () => (
    <Image src={LinkedinSVG} 
         alt="Ilustración de una cadena"
         width="32px"
         height="16px"
         placeholder="empty" 
    ></Image>
)

export default Linkedin_Icon;