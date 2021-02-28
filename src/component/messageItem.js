import { Avatar } from "@material-ui/core";
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import { useRef, useEffect, useState } from "react";
import { BOT_NAME } from '../const.js';

function MessageItem(props) {
    const messItemEl = useRef();
    const [avatar, setAvatar] = useState(props.author);

    useEffect(() => {
        if (messItemEl) {
            if (props.author === BOT_NAME) {
                messItemEl.current.className += ' bot';
                setAvatar(<EmojiEmotionsRoundedIcon />);
            }
            else
                setAvatar(props.author[0]);
        }
    }, [avatar]);

    return (
        <div className="message__item">
            <Avatar ref={messItemEl} className="message__avatar">
                {avatar}
            </Avatar>
            <div className="message__body">
                <div className="message__author">
                    {props.author}
                </div>
                <div className="message__text">
                    {props.text}
                </div>
            </div>
        </div>
    );
}

export default MessageItem;