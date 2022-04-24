import record from "../Chats/record";
import Message from "../Chats/Message";

function RecordModal({handelAddMessage}) {
    let rec;

    function startRecord() {
        rec = record();
        let stopRecord = document.getElementById("stopRecord");
        let recordButton = document.getElementById("startRecord");
        recordButton.disabled = true;
        document.getElementById("closeAudio").disabled = true;
        // recordButton.style.backgroundColor = "blue"
        stopRecord.disabled = false;
        rec.then(record => {
            record.start()
        });
    }

    function stopRecord() {
        let stopRecord = document.getElementById("stopRecord");
        let recordButton = document.getElementById("startRecord");
        recordButton.disabled = false;
        stopRecord.disabled = true;
        // recordButton.style.backgroundColor = "red"
        rec.then(record => {
            record.stop();
        });
        document.getElementById("sendAudio").disabled = false;
        document.getElementById("closeAudio").disabled = false;
    }

    const SendRecord = function () {
        handelAddMessage(new Message(<audio controls className="Chat-Audio">
                <source src={document.getElementById("recordedAudio").src}/>
            </audio>,
            true, new Date(), "audio", "80px"));

        Close();
    }

    const Close = function () {
        document.getElementById("sendAudio").disabled = true;
    }

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

                        <div className="m-2 d-flex" id="recordButtons">
                            <button type="button" className="btn btn-danger" id="startRecord" onClick={startRecord}>
                                <i className="bi bi-record-circle"/> Record
                            </button>

                            <button type="button" id="stopRecord" className="btn btn-primary" onClick={stopRecord}>
                                <i className="bi bi-stop-circle"/> Stop
                            </button>
                        </div>
                        <p id={"temp"}>
                            <audio controls>
                                <source id="recordedAudio"/>
                            </audio>
                        </p>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" id="closeAudio"
                                onClick={Close}>
                            Close
                        </button>
                        <button type="button" className="btn btn-primary ms-auto" data-bs-dismiss="modal"
                                id={"sendAudio"}
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