import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './header';
import Profile from './profile';
import Home from './home';
import Chats from "./chats";

export default function Routing() {
    return (
        <Router>
            <div className="layout">
                <Header />
                <div className="center">
                    <Switch>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                        <Route path="/chats/:chatId" >
                            <Chats />
                        </Route>
                        <Route path="/chats" >
                            <Chats />
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