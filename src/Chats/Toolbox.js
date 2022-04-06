import {useRef} from "react";

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
    };

    const file = useRef(null);

    const AddPhoto = function () {
        if(file.current.value === '') {
            return;
        }
        msgs.push(<img id={msgs.length+1} className={"Chat-Image"}/>)
        console.log(msgs)
        var reader = new FileReader();
        reader.onload = function(){
            var output = document.getElementById(msgs.length);
            output.src = reader.result;
        };
        reader.readAsDataURL(file.current.files[0]);
        setMessageList(msgs.filter((msg) => msg));
        Close();
    };

    const AddVideo = function () {
        if(file.current.value === '') {
            return;
        }
        msgs.push(<video width="320" height="240" controls><source src="movie.mp4" type="video/mp4"/></video>)
        setMessageList(msgs.filter((msg) => msg));
        Close();
    };

    const Close = function () {
        document.getElementById("add-file").value='';
    }

    return (
        <div className="input-group InputText row col-11">
            <div className="input-group">
                <button type="button" className="btn btn-secondary"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    {/*paperclip icon*/}
                    <i className="bi bi-paperclip"/>
                </button>
                <ul className="dropdown-menu mini-menu">
                    <li className="list-item">
                        <button type="button" className="dropdown-item m-2 input-group" data-bs-toggle="modal"
                                data-bs-target="#Modal-upload" id="image-button">
                            {/*image icon*/}
                            <i className="bi bi-image"/>
                            <span className="m-3"> photo</span>
                        </button>
                    </li>
                    <li className="list-item">
                        <button type="button" className="dropdown-item m-2 input-group" data-bs-toggle="modal"
                                data-bs-target="#Modal-upload" onClick={AddVideo} id="video-button">
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

                <div className="modal fade" id="Modal-upload" tabIndex="-1" aria-labelledby="add-file"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add File</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={Close}/>
                            </div>
                            <div className="modal-body">
                                <input ref={file} id="add-file" type={"file"} className={"form-control upload-box"}/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={Close}>
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary ms-auto" data-bs-dismiss="modal"
                                        onClick={AddPhoto}> Upload </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Toolbox;