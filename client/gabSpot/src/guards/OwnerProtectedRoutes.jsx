import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { getSinglePost } from "../services/postService";
import AuthContext from "../contexts/AuthContext";
import Loader from "../components/Loader/Loader";

function OwnerProtectedRoutes() {
    const [isLoading, setIsLoading] = useState(true);
    const [isOwner, setIsOwner] = useState(false);
    const { email } = useContext(AuthContext);
    const { postId } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const post = await getSinglePost(postId);
                setIsOwner(post.author === email);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [email, postId]);

    if (isLoading) {
        return <Loader />;
    }
    if (!isOwner) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
}

export default OwnerProtectedRoutes;
