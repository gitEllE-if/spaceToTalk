import { useState, useCallback, useEffect, useRef } from "react";
import SendRoundedIcon from '@material-ui/icons/SendRounded';

export default function MessageSend({ onAddMessage }) {
    const [inValue, setInValue] = useState('');
    const [emptyIn, setEmptyIn] = useState(false);
    const messInputEl = useRef();

    useEffect(() => {
        messInputEl?.current.focus();
    }, []);

    const handleChange = useCallback((event) => {
        setInValue(event.target.value);
    }, []);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        if (inValue) {
            onAddMessage(inValue);
            setInValue('');
            setEmptyIn(false);              //  (>_< )
        } else {
            setEmptyIn(true);               //  (×﹏×)
        }
        messInputEl.current.focus();
    }, [onAddMessage, inValue]);

    return (
        <form className="sendMess__form" onSubmit={handleSubmit}>
            <input ref={messInputEl} className={emptyIn ? 'error' : 'norm'}
                type="text" name="message__input" placeholder="print message"
                value={inValue} onChange={handleChange}>
            </input>
            <button type="submit"><SendRoundedIcon /></button>
        </form>
    );
}