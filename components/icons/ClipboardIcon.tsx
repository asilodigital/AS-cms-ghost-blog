import ClipBoardLightMode from '../../public/clipboard.svg'
import ClipBoardDarkMode from '../../public/ClipboardDarkMode.svg'
import Image from 'next/image'
import { useTheme } from '@components/contexts/themeProvider'

function Clipboard_Icon() {

  // const {dark, toggleDark} = useTheme()

  // let changeIcon = dark === null ? <svg viewBox="0 0 512 512"></svg> : dark === "dark" ? ClipBoardLightMode : ClipBoardDarkMode

  // console.log(changeIcon.src)

  return (
    <Image src={ClipBoardLightMode}
         alt="Ilustración de una cadena"
         width="32px"
         height="16px"
         placeholder="empty"
         className="object-fill"
    ></Image>
  )
}

export default Clipboard_Icon;
