import { Chat } from "./chat";

export interface Complaint {
    cid: number;
    complaint: string;
    password: string;
    resolved: boolean;
    category: string;
    chatHistory: Chat[]
}
