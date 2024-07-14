import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Dashboard from "./components/Dashboard/Dashboard";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import CreatePostForm from "./components/CreatePostForm/CreatePostForm";
import { Routes, Route } from "react-router-dom";
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/createpost" element={<CreatePostForm />} />
            </Routes>
        </>
    );
}

export default App;
