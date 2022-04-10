import {useRef} from "react";
import PhotoModal from "../Modal/PhotoModal";
import VideoModal from "../Modal/VideoModal";
import RecordModal from "../Modal/RecordModal";
import Message from "./Message";

function Toolbox({MessageList, handelAddMessage}) {

    const messageBox = useRef(null);

    const HandlePress = function (e) {
        if (e.key === "Enter" && messageBox.current.value !== '') {
            addMessage();
        }
    };

    // const scrollChat = function (msg) {
    //     document.getElementsByClassName('Chat')[0].scrollTop = document.getElementsByClassName('Chat')[0].scrollHeight;
    // }

    const addMessage = function () {
        if (messageBox.current.value === '') {
            return;
        }
        handelAddMessage(new Message(messageBox.current.value, true, new Date()));
        document.getElementById("Text-input").value = '';
        // scrollChat();
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
                       maxLength={80} id="Text-input" onKeyPress={HandlePress} autoComplete="off">
                </input>

                <button className="btn btn-primary" type="button" id="send-button" onClick={addMessage}>
                    {/*message icon*/}
                    <i className="bi bi-send"/>
                </button>

                <button className="btn btn-danger" type="button" id="mic-button" data-bs-toggle="modal"
                        data-bs-target="#Modal-new-record">
                    {/*mic icon*/}
                    <i className="bi bi-mic"/>
                </button>
                <PhotoModal msgs={MessageList} handelAddMessage={handelAddMessage}/>
                <VideoModal msgs={MessageList} handelAddMessage={handelAddMessage}/>
                <RecordModal/>
            </div>
        </div>
    );
}

export default Toolbox;