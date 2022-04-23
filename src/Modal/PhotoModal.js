import {useRef} from "react";
import Message from "../Chats/Message";
import {wait} from "@testing-library/user-event/dist/utils";

function PhotoModal({handelAddMessage}) {
    const photo = useRef(null);

    const AddPhoto = function () {
        if (photo.current.value === '') {
            return;
        }
        let photoReader = new FileReader();
        const fileName = document.getElementById("add-file-photo").value;
        const idxDot = fileName.lastIndexOf(".") + 1;
        const extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile === "jpg" || extFile === "jpeg" || extFile === "png" || extFile === "bmp") {
            photoReader.onload = function () {
                var img = new Image();
                img.src = photoReader.result;
                wait(1500)
                let h = img.height > 300 ? "350px" : (50+img.height)+"px";
                console.log(h)
                handelAddMessage(new Message(<img src={img.src}
                                                  className={"Chat-Image"}/>, true, new Date(), "photo", h));
            };
            photoReader.readAsDataURL(photo.current.files[0]);
        }

        Close();
    };

    const Close = function () {
        document.getElementById("add-file-photo").value = '';
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
                        <input ref={photo} accept="image/*" id="add-file-photo" type={"file"}
                               className={"form-control upload-box"}/>
                        <br/>
                        <div className="alert alert-secondary" role="alert">
                            * Accepts only: jpg,jpeg,png,bmp *
                        </div>
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
}

export default PhotoModal;