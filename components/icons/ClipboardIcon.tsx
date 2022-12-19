import ClipBoardSVG from '../../public/clipboard.svg'
import Image from 'next/image'

const ClipboardIcon = () => (
    <Image src={ClipBoardSVG} 
         alt="Ilustración de una cadena"
         width="32px"
         height="16px"
         placeholder="empty" 
    ></Image>
)

export default ClipboardIcon;