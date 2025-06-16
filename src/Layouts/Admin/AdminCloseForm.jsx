import React, { useContext } from "react";
import AdminContext from "../../context/AdminContext";

const AdminCloseForm = () => {
    const { setOpenForm } = useContext(AdminContext);

    return <div className="overlay" onClick={() => setOpenForm(false)}></div>;
};

export default AdminCloseForm;
