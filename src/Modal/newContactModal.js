import {useRef} from "react";
import {myMap} from "../App";

function NewContactModal({setContactsList, user}) {
    const newContact = useRef(null);

    const HandlePress = function (e) {
        if (e.key === "Enter" && newContact.current.value !== '') {
            AddContact();
        }
    }

    const AddContact = function () {
        let friend = myMap.get(newContact.current.value);
        if (friend != null) {
            // check if already exists or if it's the logged username
            if (friend.username === user.username || user.friends.get(friend.username) != null) {
                document.getElementById("CloseSearch").click();
                return
            }
            if (user.friends.get(friend.username) == null) {
                user.friends.set(friend.username, []);
            }
            if (friend.friends.get(user.username) == null) {
                friend.friends.set(user.username, []);
            }

            setContactsList(user.friends.keys())
            document.getElementById("CloseSearch").click();
        } else {
            document.getElementById("not-found").style.display = 'block';
        }
    }

    const Close = function () {
        document.getElementById("not-found").style.display = 'none';
        document.getElementById("SearchUser").value = '';
    }

    return (
        <div className="modal fade" id="Modal-new-contact" tabIndex="-1" aria-labelledby="add-file"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title"> New Chat </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                    </div>
                    <div className="modal-body">
                        <input ref={newContact} type="text" className="form-control" id="SearchUser" autoComplete="off"
                               placeholder="Username" maxLength={35} onKeyPress={HandlePress}>
                        </input>
                        <div id="not-found" className="alert alert-danger align-items-center" role="alert">
                            <div>
                                <i className="bi bi-exclamation-circle m-3"/> Incorrect username.
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" id="CloseSearch"
                                onClick={Close}>
                            Close
                        </button>
                        <button type="button" className="btn btn-primary ms-auto" onClick={AddContact}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewContactModal;