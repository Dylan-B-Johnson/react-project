const UserTableRow = ({username, dateAdded}) => {
  return (
    <tr>
        <td>{username}</td>
        <td className="text-align-center">{dateAdded}</td>
        <td>
            <div className="desktop text-align-left delete-button delete-button-edit-users">
                <a href="#"><h3>&#128203;Copy Password Reset Link</h3></a>
            </div>
            <div className="mobile text-align-left delete-button delete-button-edit-users">
                <a href="#"><h3>&#128203;Reset Link</h3></a>
            </div>
        </td>
        <td>
            <div className=" text-align-left delete-button delete-button-edit-users">
                <a href="#"><h3>Delete</h3></a>
            </div>
            <div className="mobile text-align-left delete-button delete-button-edit-users">
                <a href="#"><i className="fa-solid fa-trash-can"></i></a>
            </div>
        </td>
    </tr>
  );
}

export default UserTableRow;
