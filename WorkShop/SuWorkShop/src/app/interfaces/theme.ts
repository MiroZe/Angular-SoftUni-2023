import { Post } from "./post"
import { User } from "./user";

export interface Theme {
    _id:string;
    themeName: string;
    subscribers: string[];
    userId: User;
    posts: string[];
    created_at: string;
    _v: number

}