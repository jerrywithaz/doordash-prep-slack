export type Channel = {
    id: string;
    type: "channel";
    name: string;
    unread_messages: boolean;
};

export type DirectMessageChannel = {
    id: string;
    name: string;
    unread_messages: boolean;
    type: "direct_message";
}

export type Message = {
    id: string;
    content: string;
    date: string;
    user: {
        name: string;
        id: string;
        photo: string;
    }
};