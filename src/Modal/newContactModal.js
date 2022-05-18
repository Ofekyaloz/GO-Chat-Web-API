import {useRef} from "react";
import {wait} from "@testing-library/user-event/dist/utils";
import {click} from "@testing-library/user-event/dist/click";
import axios from "axios";

function NewContactModal({setContactsList, user, myiD}) {
    const newContactUsername = useRef(null);
    const newContactNickname = useRef(null);
    const newContactServer = useRef(null);

    const HandlePress = function (e) {
        if (e.key === "Enter" && newContactUsername.current.value !== '' &&
            newContactNickname.current.value !== '' && newContactServer.current.value !== '') {
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

        let id = newContactUsername.current.value;
        let name = newContactNickname.current.value;
        let server = newContactServer.current.value;

        axios.post('http://localhost:7265/api/contacts/',
            {
                id: id,
                name: name,
                server: server
            }).then(res => {
            setContactsList(res.data);
            document.getElementById("CloseSearch").click();
            wait(100).then(() => click(document.getElementById(id)));
        }).catch(e => {
            document.getElementById("not-found").style.display = 'block';
        })


        //invite
        // const jsonData2 = {
        //     "from": myiD,
        //     "to": friend.id,
        //     "server": 'http://localhost:7265'
        // };
        //
        // fetch('http://localhost:7265/contacts/', {  // Enter your IP address here
        //     method: 'POST',
        //     mode: 'cors',
        //     body: JSON.stringify(jsonData2) // body data type must match "Content-Type" header
        // });

    }

    const Close = function () {
        document.getElementById("not-found").style.display = 'none';
        document.getElementById("newContactUsername").value = '';
        document.getElementById("newContactNickname").value = '';
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

                        <input ref={newContactNickname} type="text" className="form-control SearchContact"
                               autoComplete="off"
                               id="newContactUser" placeholder="Nickname" maxLength={35} onKeyPress={HandlePress}>
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