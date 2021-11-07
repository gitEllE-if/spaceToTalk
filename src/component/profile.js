import { Avatar } from "@material-ui/core";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeAge, changeCity } from "../store/profile/actions";
import ProfileChangeDialog from "./profileChangeDialog";

export default function Profile() {
    const profile = useSelector(store => store.profile);
    const dispatch = useDispatch();

    const handleChangeProfile = useCallback((newProfile) => {
        dispatch(changeName(newProfile.name));
        dispatch(changeAge(newProfile.age));
        dispatch(changeCity(newProfile.city));
    }, [dispatch]);

    const renderUserParam = useCallback((param, idx) =>
        <li key={idx}>
            {param}: {profile[param]} <br /><br />
        </li>
        , [profile]);

    return (
        <main className="app__field">
            <div className="data__field">
                <div className='profile'>
                    <Avatar className='profile__avatar'></Avatar>
                    <ul className='profile__list'>
                        {Object.keys(profile).map(renderUserParam)}
                    </ul>
                </div>
                <ProfileChangeDialog onChangeProfile={handleChangeProfile} />
            </div>
        </main >
    );
}