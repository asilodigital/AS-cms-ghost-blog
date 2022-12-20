import React from 'react';

import copyToTheClipboard from '@utils/clipboard';

import ClipboardIcon from '@components/icons/ClipboardIcon';



import {
    TelegramShareButton,
    TwitterShareButton,
    LinkedinShareButton
} from 'next-share';


// Choose Social Media + state = Post prompt to ShareButton()
function shareInSocialMedia(post) {

    switch (post.shareIn) {
        case 'Clipboard': 
            return (
                <button 
                    onClick={() => { copyToTheClipboard(post.url) }}
                    className="px-2"
                >
                       Clipboard
                       {/* <ClipboardIcon /> */}
                </button>
            )
            break;
      
        case 'Twitter':
            return (
                <TwitterShareButton title={post.description} url={post.url} via="asilodigital">
                    <p className="px-2"> Twitter </p>
                </TwitterShareButton>
            )
            break;
        
        case 'Telegram': 
            return (
                <TelegramShareButton title={post.description} url={post.url}>
                    <p className="px-2">Telegram</p>    
                </ TelegramShareButton>
            )
            break;
        
        case 'Linkedin': 

            return (
                <LinkedinShareButton title={post.description} url={post.url}>
                   <p className="px-2"> Linkedin </p>
                </LinkedinShareButton>
            )
       
        default:
            break;
    }
}

function ShareButton (post) {

    return (
      <React.Fragment>

        { 
         
            (shareInSocialMedia(post))

        }

      </React.Fragment>
    )
}

export default ShareButton;