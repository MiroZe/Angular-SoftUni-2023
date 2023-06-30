import { Theme } from "./theme";
import { User } from "./user";

export interface Post {
    _id:string;
    text : string;
    likes: string[];
    userId : User ;
    themeId: Theme;
    created_at: string;
    post: string[];
    updatedAt:string;


}