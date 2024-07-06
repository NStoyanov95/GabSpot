export interface PostType {
    author: string;
    authorImage: string;
    content: string;
    image: string;
}

export interface PostData extends PostType {
    id?: string;
    comments: string[];
    likes: string;
    createdAt: Date;
    updatedAt?: Date;
}
