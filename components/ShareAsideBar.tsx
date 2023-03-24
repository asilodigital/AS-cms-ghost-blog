import ShareButton from "./common/ShareButtons";

function ShareAsideBar (props: any) {
    return (
        <div className="mx-auto flex w-full max-w-7xl items-start lg:justify-center lg:items-center sm:justify-center gap-3 px-4 pl-0 pt-8">

            <ShareButton url={props.url} description={props.description} shareIn="Clipboard"/>

            <ShareButton url={props.url} description={props.description} shareIn="Twitter"/>

            <ShareButton url={props.url} description={props.description} shareIn="Linkedin"/>

            <ShareButton url={props.url} description={props.description} shareIn="Telegram"/>
        </div>
    )
}

export default ShareAsideBar;
