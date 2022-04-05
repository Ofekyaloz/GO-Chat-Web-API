import {useRef} from "react";

function Send() {

    const messageBox = useRef(null)

    function AddMessage() {

    }

    return (
        <>
            <input ref={messageBox} type="text" className="form-control" placeholder="Type a message..."
                   id="Text-input">
            </input>

            <button className="btn btn-primary" type="button" id="send-button" onClick={AddMessage}>
                {/*message icon*/}
                <i className="bi bi-send"/>
            </button>
        </>
    );
}

export default Send;