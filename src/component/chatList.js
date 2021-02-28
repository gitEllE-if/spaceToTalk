import { MuiThemeProvider } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import AddCommentRoundedIcon from '@material-ui/icons/AddCommentRounded';
import { useState, useCallback } from 'react';
import { CHAT_ARR } from '../const';
import { MUI_THEME } from '../muiTheme';
import ChatItem from './chatItem';

export default function ChatList() {
    const [chatArr, setChatArr] = useState(CHAT_ARR);
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = useCallback((event, index) => {
        setSelectedIndex(index);
    });

    const renderChat = useCallback((chat, idx) => {
        return (
            <ChatItem
                chat={chat} idx={idx} selected={selectedIndex === idx}
                onClick={handleListItemClick}
                icon={<ChatRoundedIcon />}
            />);
    });

    return (
        <div className='chat__list'>
            <span className="chatlist__title">
                CHATS
            </span>
            <MuiThemeProvider theme={MUI_THEME}>
                <List component="nav" aria-label="main mailbox folders">
                    {chatArr.map(renderChat)}
                </List>
                <Divider />
                <List component="nav" aria-label="secondary mailbox folder">
                    <ChatItem
                        chat={{ id: 'id_add', name: 'add', desc: '' }}
                        idx={chatArr.length}
                        selected={selectedIndex === chatArr.length}
                        onClick={handleListItemClick}
                        icon={<AddCommentRoundedIcon />}
                    />
                </List>
            </MuiThemeProvider>
        </div>
    );
}