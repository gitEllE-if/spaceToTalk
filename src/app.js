import { useState, useCallback, useEffect, useRef } from "react";   //??  в каждом файле импортировать?

function MessageItem(props) {
    return (
        <div className="message__item">{props.text}</div>
    );
}

let Arr = ['Привет', 'Как дела?'];

function MessageField() {
    const [messageArr, setMessageArr] = useState(Arr);
    const messFieldEl = useRef();

    const addMessage = useCallback((event) => {
        event.preventDefault();
        const messageEl = event.target.elements[0];
        if (!messageEl) return;
        if (messageEl.value) {
            setMessageArr([...messageArr, messageEl.value]);
            messageEl.classList.remove('error');
            messageEl.value = '';
        } else {
            messageEl.classList.add('error');
        }
        messageEl.focus();
    }, [messageArr]);

    useEffect(() => {
        messFieldEl.current.scrollTop = messFieldEl.current.scrollHeight;
    }, [messageArr]);

    return (
        <div className="app__field">
            <div ref={messFieldEl} className="message__field">
                {messageArr.map(message => <MessageItem text={message} />)}
            </div>
            <form className="sendMess__form" onSubmit={addMessage}>
                <label htmlFor="message__input">INPUT:</label>
                <input type="text" name="message__input" placeholder="print message"></input>
                <button type="submit">SEND</button>
            </form>
        </div >
    );
}

export default MessageField;