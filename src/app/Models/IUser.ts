export interface IUser {
    id: number;
    name: string;
    role: string;       // The role of the user is customer or admin
    password: string;
    avatar: string;     // The URL to an image
}
