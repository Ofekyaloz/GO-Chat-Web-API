import {useRef, useState} from "react";
import record from "../Chats/record";

function RecordModal() {

    const SendRecord = function () {
        // if () {
        //     return;
        // }

        Close();
    }

    const Close = function () {
        document.getElementById("SearchUser").value = '';
    }

    const [getRecord, setRecord] = useState('');

    return (
        <div className="modal fade" id="Modal-new-record" tabIndex="-1" aria-labelledby="add-file"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title"> New Record </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                    </div>
                    <div className="modal-body">

                        <p>
                            <button type="button" id="record" onClick={() => record(setRecord)}>Record</button>
                            <button type="button" id="stopRecord" disabled>Stop</button>
                        </p>
                        <p>
                            <audio controls>
                                    <source id="recordedAudio"/>
                            </audio>
                        </p>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" id="CloseSearch"
                                onClick={Close}>
                            Close
                        </button>
                        <button type="button" className="btn btn-primary ms-auto" data-bs-dismiss="modal"
                                onClick={SendRecord}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecordModal;