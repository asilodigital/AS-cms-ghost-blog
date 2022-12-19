import ShareButton from "./common/ShareButtons";

function ShareAsideBar (props) {
    return (
        <div className="container m-1 p-1 flex">
            <ShareButton url={props.url} description={props.description} shareIn="Clipboard"/>

            <ShareButton url={props.url} description={props.description} shareIn="Twitter"/>

            <ShareButton url={props.url} description={props.description} shareIn="Linkedin"/>
        </div>
    )
}

export default ShareAsideBar;