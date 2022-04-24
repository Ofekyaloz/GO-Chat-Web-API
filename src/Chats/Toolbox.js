import {useRef} from "react";
import PhotoModal from "../Modal/PhotoModal";
import VideoModal from "../Modal/VideoModal";
import RecordModal from "../Modal/RecordModal";
import Message from "./Message";

function Toolbox({handelAddMessage}) {

    const messageBox = useRef(null);

    const HandlePress = function (e) {
        if (e.key === "Enter") {
            addMessage();
        }
    };

    const addMessage = function () {
        if (messageBox.current.value === '') {
            return;
        }
        const content = messageBox.current.value;
        document.getElementById("Text-input").value = '';
        handelAddMessage(new Message(content, true, new Date(), "text"));
    };


    return (
        <div id="toolbox" className="input-group InputText row col-11">
            <div className="input-group">
                <button type="button" className="btn btn-secondary"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    {/*paperclip icon*/}
                    <i className="bi bi-paperclip"/>
                </button>
                <ul className="dropdown-menu mini-menu">
                    <li className="list-item">
                        <button type="button" className="dropdown-item m-2 input-group" data-bs-toggle="modal"
                                data-bs-target="#Modal-upload-photo" id="image-button">
                            {/*image icon*/}
                            <i className="bi bi-image"/>
                            <span className="m-3"> photo </span>
                        </button>
                    </li>
                    <li className="list-item">
                        <button type="button" className="dropdown-item m-2 input-group" data-bs-toggle="modal"
                                data-bs-target="#Modal-upload-video" id="video-button">
                            {/*video icon*/}
                            <i className="bi bi-camera-video"/>
                            <span className="m-3"> video </span>
                        </button>
                    </li>
                </ul>

                <input ref={messageBox} type="text" className="form-control" placeholder="Type a message..."
                       maxLength={33} id="Text-input" onKeyPress={HandlePress} autoComplete="off">
                </input>

                <button className="btn btn-primary" type="button" id="send-button" onClick={addMessage}>
                    {/*message icon*/}
                    <i className="bi bi-send"/>
                </button>

                <button className="btn btn-danger" type="button" id="mic-button" data-bs-toggle="modal"
                        data-bs-target="#Modal-new-record" onClick={() => {
                    document.getElementById("sendAudio").disabled = true;
                }}>
                    {/*mic icon*/}
                    <i className="bi bi-mic"/>
                </button>

                <PhotoModal handelAddMessage={handelAddMessage}/>
                <VideoModal handelAddMessage={handelAddMessage}/>
                <RecordModal handelAddMessage={handelAddMessage}/>

            </div>
        </div>
    );
}

export default Toolbox;