import pushOffImg from '../img/push_off.svg'

export default function PushToggle() {
    return (
        <div className="push">
            <img className="push__image" src={pushOffImg} alt="Push Notification" />
        </div>
    );
}