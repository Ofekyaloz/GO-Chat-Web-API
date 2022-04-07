import {useRef} from "react";
import PhotoModal from "../Modal/PhotoModal";
import VideoModal from "../Modal/VideoModal";

function Toolbox({msgs, setMessageList}) {

    const messageBox = useRef(null);

    const HandlePress = function (e) {
        if (e.key === "Enter" && messageBox.current.value !== '') {
            addMessage();
        }
    };

    const addMessage = function () {
        if (messageBox.current.value === '') {
            return;
        }
        msgs.push(messageBox.current.value);
        setMessageList(msgs.filter((msg) => msg));
        document.getElementById("Text-input").value = '';
        console.log(msgs);
    };


    return (
        <div id ="toolbox" className="input-group InputText row col-11">
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
                            <span className="m-3"> photo</span>
                        </button>
                    </li>
                    <li className="list-item">
                        <button type="button" className="dropdown-item m-2 input-group" data-bs-toggle="modal"
                                data-bs-target="#Modal-upload-video" id="video-button">
                            {/*video icon*/}
                            <i className="bi bi-camera-video"/>
                            <span className="m-3"> video</span>
                        </button>
                    </li>
                </ul>

                <input ref={messageBox} type="text" className="form-control" placeholder="Type a message..."
                       id="Text-input" onKeyPress={HandlePress}>
                </input>

                <button className="btn btn-primary" type="button" id="send-button" onClick={addMessage}>
                    {/*message icon*/}
                    <i className="bi bi-send"/>
                </button>

                <button className="btn btn-danger" type="button" id="mic-button">
                    {/*mic icon*/}
                    <i className="bi bi-mic"/>
                </button>
                <PhotoModal msgs = {msgs} setMessageList={setMessageList}/>
                <VideoModal msgs = {msgs} setMessageList={setMessageList}/>
            </div>
        </div>
    );
}

export default Toolbox;