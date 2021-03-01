import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './header';
import ChatList from './chatList';
import MessageField from './messageField';
import Profile from './profile';
import Home from './home';

export default function Layout() {
    return (
        <Router>
            <div className="layout">
                <Header />
                <div className="center">
                    <ChatList />
                    <Switch>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                        <Route path="/chats">
                            <MessageField />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div >
        </Router>
    );
}