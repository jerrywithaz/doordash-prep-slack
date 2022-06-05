export type Channel = {
    type: "channel";
    name: string;
    unread_messages: boolean;
};

export type DirectMessageChannel = {
    name: string;
    unread_messages: boolean;
    type: "direct_message";
}