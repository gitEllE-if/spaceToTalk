import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Avatar } from "@material-ui/core";
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { BOT_NAME } from '../const.js';
import { delMessage } from "../store/messages/actions.js";

export default function MessageItem({ chatId, message }) {
    const dispatch = useDispatch();

    const handleClick = useCallback(() => {
        dispatch(delMessage(chatId, message.id));
    }, [dispatch, message, chatId]);

    return (
        <div className="message__item">
            <Avatar className={`message__avatar ${message.author === BOT_NAME ? "bot" : ""}`}>
                {message.author === BOT_NAME ? <EmojiEmotionsRoundedIcon /> : message.author[0]}
            </Avatar>
            <div className="message__body">
                <div className="message__content">
                    <div className="message__author">
                        {message.author}
                    </div>
                    <div className="message__text">
                        {message.text}
                    </div>
                </div>
                <IconButton className="message__del" onClick={handleClick}>
                    <DeleteForeverIcon />
                </IconButton>
            </div>
        </div>
    );
}