import React, { useState } from "react";
import '../styles/userinfoview.css';
import icon from '../assets/icons/facebook.png';
import icon2 from '../assets/icons/youtube.png';
import icon3 from '../assets/icons/yelp.png';
import icon4 from '../assets/icons/X.png';
import icon5 from '../assets/icons/whatsapp.png';
import icon6 from '../assets/icons/wechat.png';
import icon7 from '../assets/icons/website.png';
import icon8 from '../assets/icons/viber.png';
import icon9 from '../assets/icons/twitterr.png';
import icon10 from '../assets/icons/venmo.png';
import icon11 from '../assets/icons/tumblr.png';
import icon12 from '../assets/icons/tiktok.png';
import icon13 from '../assets/icons/spotify.png';
import icon14 from '../assets/icons/soundcloud.png';
import icon15 from '../assets/icons/snapchat.png';
import icon16 from '../assets/icons/linkedin.png';
import icon17 from '../assets/icons/instagram.png';

const SocialMediaContact = ({ socialMediaType, socialMedialink, userDirectMode, socialMediaDirectMode, socialMediaName }) => {
    const [linkOpened, setLinkOpened] = useState(false);

    const socialMediaIcons = {
        'Facebook': icon,
        'YouTube': icon2,
        'Yelp': icon3,
        'X': icon4,
        'WhatsApp': icon5,
        'WeChat': icon6,
        'Website': icon7,
        'Viber': icon8,
        'Twitter': icon9,
        'Venmo': icon10,
        'Tumblr': icon11,
        'TikTok': icon12,
        'Spotify': icon13,
        'SoundCloud': icon14,
        'Snapchat': icon15,
        'LinkedIn': icon16,
        'Instagram': icon17
    };

    const handleClick = () => {
        if (!linkOpened) {
            setLinkOpened(true);
            if (socialMediaType === 'WhatsApp') {
                window.location.href = `https://wa.me/${socialMedialink}`;
            } else {
                window.location.href = `${socialMedialink}`;
            }
        }
    };

    if (userDirectMode && socialMediaDirectMode) {
        handleClick();
        return null;
    } else if (!userDirectMode) {
        return (
            <a href={socialMediaType === 'WhatsApp' ? `https://wa.me/${socialMedialink}` : socialMedialink} onClick={handleClick}>
                <div className='contactsoverly'>
                    <div className='contacstscontainer'>
                        <div>
                            <div className='socialMediaIcon'>
                                <img
                                    src={socialMediaIcons[socialMediaType]}
                                    alt={''}
                                    className='iconImage'
                                />
                                <p>{socialMediaName}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        );
    }
    return null;
};

export default SocialMediaContact;
