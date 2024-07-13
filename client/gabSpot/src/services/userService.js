export const register = async (formData) => {
    const res = await fetch("http://localhost:3030/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
    const data = await res.json();
    return data;
};

export const login = async (formData) => {
    const res = await fetch("http://localhost:3030/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
    const data = await res.json();
    return data;
};
