export const BOT_NAME = 'bot';
export const BOT_TEXT = ', привет, поговори со мной!';

export const CHAT_TYPE = [
    'group chat',
    'personal chat',
    'private chat'
];

export const CHAT_ARR = [
    {
        id: 'id1', name: 'React lessons', desc: 'group chat',
        messages: [
            { text: 'Привет', author: 'Иван' },
            { text: 'Как дела?', author: 'Катя' },
            { text: 'Задиспатчил экшн :D', author: 'Иван' }
        ]
    },
    {
        id: 'id2', name: 'GUI teacher', desc: 'personal chat',
        messages: [
            { text: 'Привет', author: 'Оля' },
            { text: 'Это второй чат', author: 'Катя' },
        ]
    },
    {
        id: 'id3', name: 'Project 2222', desc: 'private chat',
        messages: [
            { text: 'Это какой чат?', author: 'Михаил' },
            { text: 'Третий?', author: 'Михаил' },
            { text: 'Да, это третий чат', author: 'Дима' }
        ]
    },
    {
        id: 'id4', name: 'Project 999', desc: 'private chat',
        messages: [
            { text: 'Это 4 чат', author: 'Маша' }
        ]
    }
];

export const USER = {
    name: 'Аноним',
    age: 99,
    city: 'Москва'
};