import { Avatar } from "@material-ui/core";
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import { BOT_NAME } from '../const.js';

export default function MessageItem(props) {
    return (
        <div className="message__item">
            <Avatar className={`message__avatar ${props.author === BOT_NAME ? "bot" : ""}`}>
                {props.author === BOT_NAME ? <EmojiEmotionsRoundedIcon /> : props.author[0]}
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