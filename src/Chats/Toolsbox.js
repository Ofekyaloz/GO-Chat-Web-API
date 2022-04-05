import {useRef} from "react";

function Toolsbox({AddMessage}) {

    const messageBox = useRef(null)

    const HandlePress = function (e) {
        if (e.key == "Enter") {
            search();
        }
    }

    const search = function () {
        AddMessage(messageBox.current.value);
        document.getElementById("Text-input").value = '';
    }

    return (
        <div className="input-group InputText row col-11">
            <div className="input-group">
                <button type="button" className="btn btn-secondary"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    {/*paperclip icon*/}
                    <i className="bi bi-paperclip"/>
                </button>
                <ul className="dropdown-menu">
                    <li className="list-item">
                        <button type="button" className="dropdown-item" href="#" id="image-button">
                            {/*image icon*/}
                            <i className="bi bi-image"/>
                            <span className="m-3"> photo</span>
                        </button>
                    </li>
                    <li>
                        <button type="button" className="dropdown-item input-group" href="#"
                                id="video-button">
                            {/*video icon*/}
                            <i className="bi bi-camera-video"/>
                            <span className="m-3"> video</span>
                        </button>
                    </li>
                </ul>

                <input ref={messageBox} type="text" className="form-control" placeholder="Type a message..."
                       id="Text-input" onKeyPress={HandlePress}>
                </input>

                {/*onChange={event => SetMessage(event.target.value)}*/}

                <button className="btn btn-primary" type="button" id="send-button" onClick={search}>
                    {/*message icon*/}
                    <i className="bi bi-send"/>
                </button>

                <button className="btn btn-danger" type="button" id="mic-button">
                    {/*mic icon*/}
                    <i className="bi bi-mic"/>
                </button>
            </div>
        </div>
    );
}

export default Toolsbox;