import ShareButton from "./common/ShareButtons";

function ShareAsideBar (props) {
    return (
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 pl-0 pt-8 gap-1 sm:items-start">

            <ShareButton url={props.url} description={props.description} shareIn="Clipboard"/>

            <ShareButton url={props.url} description={props.description} shareIn="Twitter"/>

            <ShareButton url={props.url} description={props.description} shareIn="Linkedin"/>

            <ShareButton url={props.url} description={props.description} shareIn="Telegram"/>
        </div>
    )
}

export default ShareAsideBar;