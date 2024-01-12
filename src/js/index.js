import axios from "axios";

import "./index.scss";

const getPosts = async () => {
    const data = await axios.get("http://localhost:3000/posts");
    console.log(data);
    return data;
};

getPosts();
