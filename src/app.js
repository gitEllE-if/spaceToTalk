import { useState, useCallback, useEffect, useRef } from "react";

function MessageItem(props) {
    return (
        <div className="message__item">{props.text}</div>
    );
}

const arr = ['Привет', 'Как дела?'];

function MessageField() {
    const [messageArr, setMessageArr] = useState(arr);
    const [inValue, setInValue] = useState('');
    const messFieldEl = useRef();
    const messInputEl = useRef();

    const addMessage = useCallback((event) => {
        event.preventDefault();
        if (inValue) {
            setMessageArr([...messageArr, inValue]);
            messInputEl.current.className = 'norm';
            setInValue('');
        } else {
            messInputEl.current.className = 'error';
        }
        messInputEl.current.focus();
    }, [inValue]);

    useEffect(() => {
        if (messFieldEl) {
            messFieldEl.current.scrollTop = messFieldEl.current.scrollHeight;
        }
    }, [messageArr]);

    const renderMessage = useCallback((message) => {
        return (<MessageItem text={message} />);
    }, []);

    const changeInValue = useCallback((event) => {
        setInValue(event.target.value);
    }, []);

    return (
        <div className="app__field">
            <div ref={messFieldEl} className="message__field">
                {messageArr.map(renderMessage)}
            </div>
            <form className="sendMess__form" onSubmit={addMessage}>
                <label htmlFor="message__input">INPUT:</label>
                <input ref={messInputEl} type="text" name="message__input" placeholder="print message"
                    value={inValue} onChange={changeInValue}>
                </input>
                <button type="submit">SEND</button>
            </form>
        </div >
    );
}

export default MessageField;