import {useRef} from "react";
import {myMap} from "../App";
import {wait} from "@testing-library/user-event/dist/utils";
import {click} from "@testing-library/user-event/dist/click";

function NewContactModal({setContactsList, user, myiD}) {
    const newContactUsername = useRef(null);
    const newContactUser = useRef(null);
    const newContactServer = useRef(null);

    const HandlePress = function (e) {
        if (e.key === "Enter" && newContactUsername.current.value !== '' &&
            newContactUser.current.value !== '' && newContactServer.current.value !== '') {
            AddContact();
        }
    }

    async function find(name) {
        const res = await fetch(newContactServer + '/api/contacts/' + name)
        if (res.ok) {
            return await res.json();
        } else
            return undefined
    }

    const AddContact = function () {

        const friend = find(newContactUsername.current.value);
        if (friend !== undefined) {
            //POST
            const jsonData = {
                "Contact": [{
                    "id": friend.id,
                    "name": newContactUsername,
                    "server": newContactServer
                }]
            };

            fetch('http://localhost:7200/contacts/', {  // Enter your IP address here
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
            });

            //invite
            const jsonData2 = {
                "from": myiD,
                "to": friend.id,
                "server": 'http://localhost:7200'
            };

            fetch('http://localhost:7200/contacts/', {  // Enter your IP address here
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(jsonData2) // body data type must match "Content-Type" header
            });

            document.getElementById("CloseSearch").click();
            wait(100).then(() => click(document.getElementById(friend.name)));

        } else {
            document.getElementById("not-found").style.display = 'block';
        }


        // let friend = myMap.get(newContactUsername.current.value);
        // if (friend != null) {
        //     // check if already exists or if it's the logged username
        //     if (friend.username === user.username || user.friends.get(friend.username) != null) {
        //         document.getElementById("CloseSearch").click();
        //         return
        //     }
        //     if (user.friends.get(friend.username) == null) {
        //         user.friends.set(friend.username, []);
        //     }
        //     if (friend.friends.get(user.username) == null) {
        //         friend.friends.set(user.username, []);
        //     }
        //
        //     setContactsList(user.friends.keys())
        //     document.getElementById("CloseSearch").click();
        //     wait(100).then(() => click(document.getElementById(friend.username)));
        // } else {
        //     document.getElementById("not-found").style.display = 'block';
        // }
    }

    const Close = function () {
        document.getElementById("not-found").style.display = 'none';
        document.getElementById("newContactUsername").value = '';
        document.getElementById("newContactUser").value = '';
        document.getElementById("newContactServer").value = '';
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
                        <input ref={newContactUsername} type="text" className="form-control SearchContact"
                               autoComplete="off"
                               id="newContactUsername" placeholder="Username" maxLength={35} onKeyPress={HandlePress}>
                        </input>

                        <input ref={newContactUser} type="text" className="form-control SearchContact"
                               autoComplete="off"
                               id="newContactUser" placeholder="User" maxLength={35} onKeyPress={HandlePress}>
                        </input>

                        <input ref={newContactServer} type="text" className="form-control SearchContact"
                               autoComplete="off"
                               id="newContactServer" placeholder="Server" maxLength={35} onKeyPress={HandlePress}>
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