import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa";
import './Admin.scss';
import { useState } from "react";

function Admin() {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <FaBars onClick={() => setCollapsed(!collapsed)} />
            </div>
        </div>
    );
}

export default Admin;