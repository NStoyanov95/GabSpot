import Comment from "../models/Comment";
const createComment = (content: string, author: string): Promise<any> =>
    Comment.create({ content, author });

const deleteComment = (commentId: string): Promise<any> =>
    Comment.findByIdAndDelete(commentId);

export default {
    createComment,
    deleteComment,
};
