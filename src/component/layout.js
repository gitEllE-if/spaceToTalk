import Header from './header';
import ChatList from './chatList';
import MessageField from './messageField';


function Layout() {
    return (
        <div className="layout">
            <Header />
            <div className="center">
                <ChatList />
                <MessageField />
            </div>
        </div >
    );
}

export default Layout;