import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadChats } from "../store/chats/actions";
import { loadMessages } from "../store/messages/actions";
import Header from './header';
import Profile from './profile';
import Home from './home';
import Chats from "./chats";
import InstallPopup from "./installPopup";

export default function Routing() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadChats());
        dispatch(loadMessages());
    }, []);

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
            <InstallPopup />
        </Router>
    );
}