import {useRef} from "react";
import icon from "../Pictures/icon-user-default.png";

function NewContactModal({history, setContactsList}) {
    const newContact = useRef(null);

    const HandlePress = function (e) {
        if (e.key === "Enter" && newContact.current.value !== '') {
            AddContact();
            document.getElementById("CloseSearch").click()
        }
    }

    const AddContact = function () {
        if (newContact.current.value === '') {
            return;
        }
        history.unshift({photo: icon, name: newContact.current.value, date: 'Yesterday', message: 'Sup'});
        setContactsList(history.filter((c) => c))
        Close();
    }

    const Close = function () {
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
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" id="CloseSearch"
                                onClick={Close}>
                            Close
                        </button>
                        <button type="button" className="btn btn-primary ms-auto" data-bs-dismiss="modal"
                                onClick={AddContact}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewContactModal;