import { useRef, useEffect, useState } from "react";
import { BOT_NAME } from '../const.js';

function MessageItem(props) {
    const messItemEl = useRef();
    const [author, setAuthor] = useState(props.author);

    useEffect(() => {
        if (messItemEl) {
            if (author == BOT_NAME) {
                messItemEl.current.classList.add('bot');
                setAuthor(<i class="fas fa-robot"></i>);
            }
        }
    }, [author]);

    return (
        <div className="message__item">
            <div ref={messItemEl} className="message__author">
                {author}
            </div>
            <div className="message__text">
                {props.text}
            </div>
        </div>
    );
}

export default MessageItem;