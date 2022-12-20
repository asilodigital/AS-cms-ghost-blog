import ShareButton from "./common/ShareButtons";

function ShareAsideBar (props) {
    return (
        <div className="container w-full py-5 flex">

            <p className="px-2">Compartir en:</p>

            <ShareButton url={props.url} description={props.description} shareIn="Clipboard"/>

            <ShareButton url={props.url} description={props.description} shareIn="Twitter"/>

            <ShareButton url={props.url} description={props.description} shareIn="Linkedin"/>

            <ShareButton url={props.url} description={props.description} shareIn="Telegram"/>
        </div>
    )
}

export default ShareAsideBar;