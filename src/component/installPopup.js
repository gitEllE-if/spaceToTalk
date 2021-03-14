import React, { useCallback, useEffect, useState } from 'react';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

export default function InstallPopup() {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        // Определяем, является ли устройство iPhone-ом
        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone/.test(userAgent);
        };
        // Определяем, запущено ли приложение отдельно
        const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

        // Решаем, показать или не показать уведомление об установке:
        if (isIos() && !isInStandaloneMode()) {
            handleShow();
        }
    }, []);

    const handleShow = useCallback(() => {
        setIsShown(true);
    }, [isShown]);

    const handleHide = useCallback(() => {
        setIsShown(false);
    }, [isShown]);

    return (
        <>
            {isShown && <div className="installPopup__container">
                <div className="installPopup">
                    <CloseRoundedIcon className="installPopup__close" onClick={handleHide} />
                    <div>
                        Install this App on your iPhone:<br />tap "Share" and then the "Home" screen
                    </div>
                </div>
            </div>}
        </>
    );
}