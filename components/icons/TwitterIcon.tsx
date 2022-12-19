import TwitterSVG from '../../public/twitter.svg'
import Image from 'next/image'

export const TwitterIcon = () => (
  <Image
  
    src={TwitterSVG}
    alt="Logo de Twitter"
    width="32px"
    height="16px"
    placeholder="empty" 

  ></Image>
)
