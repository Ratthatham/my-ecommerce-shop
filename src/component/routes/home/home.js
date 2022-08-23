import React from "react";
import { Outlet } from "react-router-dom";
import DirectoryItems from "../../directory-items/directory-items";

const Home = () => {
    return (
        <div>
            <DirectoryItems />
            <Outlet/>
        </div>
    );
}

export default Home;