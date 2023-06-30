import { Post } from "./post";
import { Theme } from "./theme";

export interface User {

    _id: string;
    tel: string;
    email:string;
    username: string;
    password: string;
    themes: Theme;
    posts : Post;

}