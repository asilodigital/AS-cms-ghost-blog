import React from 'react';

import copyToTheClipboard from '@utils/clipboard';

import Clipboard_Icon from '@components/icons/ClipboardIcon';
import Twitter_Icon from '@components/icons/TwitterIcon';
import Telegram_Icon from '@components/icons/TelegramIcon';
import Linkedin_Icon from '@components/icons/LinkedinIcon'



import {
    TelegramShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    LinkedinIcon
} from 'next-share';


// Choose Social Media + state = Post prompt to ShareButton()
function shareInSocialMedia(post: any) {

    switch (post.shareIn) {
        case 'Clipboard': 
            return (
                <button 
                    onClick={() => { copyToTheClipboard(post.url) }}
                    className=""
                >

                       <Clipboard_Icon />
                </button>
            )
            break;
      
        case 'Twitter':
            return (
                <TwitterShareButton title={post.description} url={post.url} via="asilodigital">
                    <Twitter_Icon />
                </TwitterShareButton>
            )
            break;
        
        case 'Telegram': 
            return (
                <TelegramShareButton title={post.description} url={post.url}>
                    <Telegram_Icon /> 
                </ TelegramShareButton>
            )
            break;
        
        case 'Linkedin': 

            return (
                <LinkedinShareButton title={post.description} url={post.url}>
                    <Linkedin_Icon />
                </LinkedinShareButton>
            )
       
        default:
            break;
    }
}

function ShareButton (post: any) {

    return (
      <React.Fragment>
        <div className="inline-flex w-[50px] h-[50px] cursor-pointer select-none appearance-none items-center justify-center bg-[#13111D] rounded-full space-x-1 px-3 py-2 transition focus:outline-none focus:ring-2 focus:ring-gray-300">
            {shareInSocialMedia(post)}
        </div>
      </React.Fragment>
    )
}

export default ShareButton;