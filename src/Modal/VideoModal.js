import {useRef} from "react";
import Message from "../Chats/Message";

function VideoModal({handelAddMessage}) {
    const video = useRef(null);

    const AddVideo = function () {
        if (video.current.value === '') {
            return;
        }
        const fileName = document.getElementById("add-file-video").value;
        const idxDot = fileName.lastIndexOf(".") + 1;
        const extFile = fileName.substr(idxDot, fileName.length).toLowerCase();

        // checking the file's type
        if (extFile === "video" || extFile === "mp4" || extFile === "x-m4v" || extFile === "mp3") {
            const media = URL.createObjectURL(video.current.files[0]);
            handelAddMessage(new Message(<video className="Chat-Video" controls>
                <source className="Chat-Video" src={media} type="video/mp4"/>
            </video>, true, new Date(), "video"));
        }
        Close();
    };

    const Close = function () {
        document.getElementById("add-file-video").value = '';
    };

    return (
        <div className="modal fade" id="Modal-upload-video" tabIndex="-1" aria-labelledby="add-file"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add a Video</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                onClick={Close}/>
                    </div>
                    <div className="modal-body">
                        <input ref={video} accept="video/mp4,video/x-m4v,video/*" id="add-file-video" type={"file"}
                               className={"form-control upload-box"}/>
                        <br/>
                        <div className="alert alert-secondary" role="alert">
                            * Accepts only: video,mp4,mp3,x-m4v *
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                                onClick={Close}>
                            Close
                        </button>
                        <button type="button" className="btn btn-primary ms-auto" data-bs-dismiss="modal"
                                onClick={AddVideo}> Upload
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoModal;