import { useState, useCallback, useEffect, useRef } from "react";
import SendRoundedIcon from '@material-ui/icons/SendRounded';

export default function MessageSend({ onAddMessage }) {
    const [inValue, setInValue] = useState('');
    const [inError, setInError] = useState(false);
    const messInputEl = useRef();

    useEffect(() => {
        messInputEl?.current.focus();
    }, []);

    const handleChange = useCallback((event) => {
        setInValue(event.target.value);
    }, []);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        if (inValue && inValue.trim()) {
            onAddMessage(inValue);
            setInValue('');
            setInError(false);
        } else {
            setInError(true);
        }
        messInputEl.current.focus();
    }, [inValue]);

    return (
        <form className="sendMess__form" onSubmit={handleSubmit}>
            <input ref={messInputEl} className={inError ? 'error' : 'norm'}
                type="text" name="message__input" placeholder="print message"
                value={inValue} onChange={handleChange}>
            </input>
            <button type="submit"><SendRoundedIcon /></button>
        </form>
    );
}