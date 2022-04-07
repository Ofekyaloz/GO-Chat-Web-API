import {useRef} from "react";

function PhotoModal({msgs, setMessageList}) {
    const photo = useRef(null);

    const AddPhoto = function () {
        if (photo.current.value === '') {
            return;
        }
        msgs.push(<img id={msgs.length + 1} className={"Chat-Image"}/>)
        var Photoreader = new FileReader();
        Photoreader.onload = function () {
            var output = document.getElementById(msgs.length);
            output.src = Photoreader.result;
        };
        Photoreader.readAsDataURL(photo.current.files[0]);
        setMessageList(msgs.filter((msg) => msg));
        Close();
    };

    const Close = function () {
        document.getElementById("add-photo").value = '';
    }

    return (
        <div className="modal fade" id="Modal-upload-photo" tabIndex="-1" aria-labelledby="add-file"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add a Photo</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                onClick={Close}/>
                    </div>
                    <div className="modal-body">
                        <input ref={photo} accept="image/*" id="add-file" type={"file"}
                               className={"form-control upload-box"}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                                onClick={Close}>
                            Close
                        </button>
                        <button type="button" className="btn btn-primary ms-auto" data-bs-dismiss="modal"
                                onClick={AddPhoto}> Upload
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoModal;