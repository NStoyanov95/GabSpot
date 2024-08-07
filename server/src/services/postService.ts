import Post from "../models/Post";
import { PostData, PostType } from "../types/Post";
import { UserType } from "../types/User";

const create = (postData: PostType): Promise<PostData> => Post.create(postData);

const getAllPosts = (): Promise<PostData[]> =>
    Post.find().sort({ createdAt: -1 });

const getSinglePost = (postId: string): Promise<PostData | null> =>
    Post.findById(postId).populate("comments");

const deletePost = (postId: string): Promise<PostData | null> =>
    Post.findByIdAndDelete(postId);

const likePost = (postId: string, userId: string): Promise<PostData | null> =>
    Post.findByIdAndUpdate(postId, { $push: { likes: userId } }, { new: true });

const dislikePost = (
    postId: string,
    userId: string
): Promise<PostData | null> =>
    Post.findByIdAndUpdate(postId, { $pull: { likes: userId } }, { new: true });

const editPost = (
    postId: string,
    postData: PostType
): Promise<PostData | null> =>
    Post.findByIdAndUpdate(postId, postData, { new: true });

const mostLikedPost = async (): Promise<PostData | null> => {
    try {
        const result = await Post.aggregate([
            {
                $addFields: {
                    likesCount: { $size: "$likes" },
                },
            },
            {
                $sort: { likesCount: -1 },
            },
            {
                $limit: 1,
            },
        ]);
        return result.length > 0 ? result[0] : null;
    } catch (error) {
        console.error("Error fetching the most liked post:", error);
        throw error;
    }
};

export default {
    create,
    getAllPosts,
    getSinglePost,
    deletePost,
    editPost,
    likePost,
    dislikePost,
    mostLikedPost,
};
