const baseUrl = "http://localhost:3030/";
const requester = async (url, method = "GET", data = null) => {
    const options = {
        method,
        headers: {},
    };
    if (data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }
    const res = await fetch(baseUrl + url, options);
    const result = await res.json();
    return result;
};
export default requester;
