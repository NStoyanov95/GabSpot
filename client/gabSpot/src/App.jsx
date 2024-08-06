import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Dashboard from "./components/Dashboard/Dashboard";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import CreatePostForm from "./components/CreatePostForm/CreatePostForm";
import DetailsCard from "./components/DetailsCard/DetailsCard";
import EditPostForm from "./components/EditPostForm/EditPostForm";

import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import Logout from "./components/Logout/Logout";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import OwnerProtectedRoutes from "./guards/OwnerProtectedRoutes";
import GuestProtectedRoute from "./guards/GuestProtectedRoute";
import UserProtectedRoute from "./guards/UserProtectedRoute";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
function App() {
    return (
        <AuthContextProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/details/:postId" element={<DetailsCard />} />

                <Route element={<UserProtectedRoute />}>
                    <Route path="/profile/:userId" element={<ProfileCard />} />
                    <Route path="/createpost" element={<CreatePostForm />} />
                    <Route path="/logout" element={<Logout />} />
                </Route>

                <Route element={<GuestProtectedRoute />}>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                </Route>

                <Route element={<OwnerProtectedRoutes />}>
                    <Route
                        path="/editPost/:postId"
                        element={<EditPostForm />}
                    />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </AuthContextProvider>
    );
}

export default App;
