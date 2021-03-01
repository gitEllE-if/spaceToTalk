import { Avatar } from "@material-ui/core";

export default function Profile() {
    return (
        <div className="app__field">
            <div className="profile">
                <Avatar></Avatar>
                <div className="profile__name">Name</div>
            </div>
        </div >
    );
}