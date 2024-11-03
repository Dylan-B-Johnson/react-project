import UserTable from "../components/UserTable.js";
import "../css/EditUsers.css";

const EditUsers = () => {
    return (
        <div id="remaining-content" className="remaining-content columns center-columns-horizontal">
            <div id="left-pane-about" className="one">
                <p>Invite a User</p>
                <div className="text-align-left delete-button delete-button-edit-users">
                    <a href="#"><h3>&#128203;Copy Password Set Link</h3></a>
                </div>
                <div id="users-save-changes" className="save-changes-users">
                    <a href="#"><h3>&#128190; Save Changes</h3></a>
                </div>
            </div>
            <div id="remaining-content-child" className="three">
                <div id="edit-user-table-div">
                    <UserTable />
                </div>
            </div>
        </div>
    );
};

export default EditUsers
