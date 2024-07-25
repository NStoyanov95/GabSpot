import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Dashboard from "./components/Dashboard/Dashboard";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import CreatePostForm from "./components/CreatePostForm/CreatePostForm";
import { Routes, Route } from "react-router-dom";
import DetailsCard from "./components/DetailsCard/DetailsCard";
import AuthContext from "./contexts/AuthContext";
function App() {
    return (
        <AuthContext.Provider>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/details/:postId" element={<DetailsCard />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/createpost" element={<CreatePostForm />} />
            </Routes>
        </AuthContext.Provider>
    );
}

export default App;
