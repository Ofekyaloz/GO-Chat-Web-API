import {useRef} from "react";
import icon from "../Pictures/icon-user-default.png";
import {myMap} from "../App";

function NewContactModal({history, setContactsList, user}) {
    const newContact = useRef(null);

    const HandlePress = function (e) {
        if (e.key === "Enter" && newContact.current.value !== '') {
            AddContact();
        }
    }

    function timeSince(date) {
        var seconds = Math.floor((new Date() - date) / 1000);
        var interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }

    const AddContact = function () {
        var friend = myMap.get(newContact.current.value);
        if (friend != null) {
            var lastmsg = user.messages.get(friend.nickname)[user.messages.get(friend.nickname).length - 1];
            history.unshift({
                photo: friend.img,
                name: friend.nickname,
                date: timeSince(lastmsg.date),
                message: lastmsg.content
            });
            setContactsList(history.filter((c) => c))
            document.getElementById("CloseSearch").click()
        } else {
            document.getElementById("not-found").style.display = 'block';
        }
    }

    const Close = function () {
        console.log("3")
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
                            <i className="bi bi-exclamation-circle"></i>
                            <div>
                                Unexist username, Please enter correct username.
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