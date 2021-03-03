import { Avatar } from "@material-ui/core";
import { useCallback } from "react";
import { USER } from '../const';

export default function Profile() {
    const renderUserParam = useCallback((param) =>
        <li>
            {param}: {USER[param]} <br /><br />
        </li>
        , []);

    return (
        <div className="app__field">
            <div className="data__field">
                <div className='profile'>
                    <Avatar className='profile__avatar'></Avatar>
                    <ul className='profile__list'>
                        {Object.keys(USER).map(renderUserParam)}
                    </ul>
                </div>
            </div>
        </div >
    );
}