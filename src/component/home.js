import { Link } from 'react-router-dom';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import Divider from '@material-ui/core/Divider';

export default function Home() {
    return (
        <div className="app__field">
            <div className='data__field'>
                <div className="home__text">
                    SPACE to talk — a space for friends.<br />
                It's a friendly place to have fun, meet friends, and be creative!<br />
                Sign Up for free to view profiles, add your friends, write comments and blog about your favorite stuff!<br />
                Create Your Own Profile! Upload a photo, set your name, add details to your profile and start adding friends!
                </div>
                <Divider />
                <div className="home__link">
                    <Link to='/profile'><StarRoundedIcon /> My profile</Link>
                    <Link to='/chats'><StarRoundedIcon /> Chats</Link>
                </div>
            </div>
        </div >
    );
}