import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

import RegisterForm from "./components/RegisterForm/RegisterForm";
import CreatePostForm from "./components/CreatePostForm/CreatePostForm";
import GuestProtectedRoute from "./guards/GuestProtectedRoute";
import OwnerProtectedRoutes from "./guards/OwnerProtectedRoutes";

import Header from "./components/Header/Header";
import Logout from "./components/Logout/Logout";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Loader from "./components/Loader/Loader";

const Homepage = lazy(() => import("./components/Homepage/Homepage"));
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const LoginForm = lazy(() => import("./components/LoginForm/LoginForm"));
const DetailsCard = lazy(() => import("./components/DetailsCard/DetailsCard"));
const EditPostForm = lazy(() =>
    import("./components/EditPostForm/EditPostForm")
);
const ProfileCard = lazy(() => import("./components/ProfileCard/ProfileCard"));
const UserProtectedRoute = lazy(() => import("./guards/UserProtectedRoute"));

function App() {
    return (
        <AuthContextProvider>
            <Header />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/details/:postId" element={<DetailsCard />} />

                    <Route element={<UserProtectedRoute />}>
                        <Route
                            path="/profile/:userId"
                            element={<ProfileCard />}
                        />
                        <Route
                            path="/createpost"
                            element={<CreatePostForm />}
                        />
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
            </Suspense>
        </AuthContextProvider>
    );
}

export default App;
