import {useRef} from "react";

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

    // let rec;
    //
    // navigator.mediaDevices.getUserMedia({audio: true})
    //     .then(stream => {
    //         handlerFunction(stream)
    //     })
    //
    // function handlerFunction(stream) {
    //     let rec = new MediaRecorder(stream);
    //     rec.ondataavailable = e => {
    //         let audioChunks;
    //         audioChunks.push(e.data);
    //         if (rec.state === "inactive") {
    //             let blob = new Blob(audioChunks, {type: 'audio/mp3'});
    //             let recordedAudio = document.getElementById("recordedAudio");
    //             recordedAudio.src = URL.createObjectURL(blob);
    //             recordedAudio.controls = true;
    //             recordedAudio.autoplay = true;
    //             sendData(blob)
    //         }
    //     }
    // }
    //
    // function sendData(data) {
    //
    // }
    //
    // let record = document.getElementById("record");
    // record.onclick = e => {
    //     record.disabled = true;
    //     record.style.backgroundColor = "blue"
    //     stopRecord.disabled = false;
    //     const audioChunks = [];
    //     rec.start();
    // }
    // let stopRecord = document.getElementById("stopRecord");
    // stopRecord.onclick = e => {
    //     record.disabled = false;
    //     // stop.disabled = true;
    //     record.style.backgroundColor = "red"
    //     rec.stop();
    // }


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

                        {/*<p>*/}
                        {/*    <button type="button" id="record">Record</button>*/}
                        {/*    <button type="button" id="stopRecord" disabled>Stop</button>*/}
                        {/*</p>*/}
                        <p>
                            <audio controls>
                                    <source type="audio/ogg/mpeg" id="recordedAudio" src="../Pictures/bb.mp3"/>
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