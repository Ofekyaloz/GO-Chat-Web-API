import './Chats.css';
import img1 from './img1.jpg'

function Chats({username}) {
    return (
        <div className={"container-fluid"}>
            <link rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>

            <div className={"row"}>
                <div className={"col-4 vh-100 d-flex"}>
                    <div className="list-group d-flex ChatHistory align-items-center" id="list-tab" role="tablist">

                        <div id={"SearchUser"} className={"input-group"}>
                            <button className="btn btn-outline-secondary" type="button" id="searchbutton">
                                {/*search icon*/}
                                <i className="bi bi-search"></i>
                            </button>
                            <input type="text" className={"form-control"} placeholder="Username" aria-label="Username"
                                   aria-describedby="addon-wrapping" maxLength={35}></input>
                        </div>

                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href="#list-home"
                           role="tab" aria-controls="list-home">
                            <div>
                                <div className="row">
                                    <div className="col-4">
                                        <img className="UserImage" src={img1}></img>
                                    </div>
                                    <div className="col-8">
                                        <div className="row">
                                            <div className="col-8 d-flex ContactName"> Ofek</div>
                                            <div className="col-4"> Yesterday</div>
                                        </div>
                                        <div> something</div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href="#list-home"
                           role="tab" aria-controls="list-home">
                            <div>
                                <div className="row">
                                    <div className="col-4">
                                        <img className="UserImage" src={img1}></img>
                                    </div>
                                    <div className="col-8">
                                        <div className="row">
                                            <div className="col-8 d-flex ContactName"> Gili</div>
                                            <div className="col-4"> 2 days ago</div>
                                        </div>
                                        <div> something</div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href="#list-home"
                           role="tab" aria-controls="list-home">
                            <div>
                                <div className="row">
                                    <div className="col-4">
                                        <img className="UserImage" src={img1}></img>
                                    </div>
                                    <div className="col-8">
                                        <div className="row">
                                            <div className="col-8 d-flex ContactName"> Mom</div>
                                            <div className="col-4"> 3 days ago</div>
                                        </div>
                                        <div> Goodbye.</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>


                <div className={"col-8 vh-100 d-flex"} id={"ChatBlock"}>
                    <div className="input-group mb-3 InputText">
                        <div className="btn-group dropup">
                            <button type="button" className="btn btn-secondary dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                {/*paperclip icon*/}
                                <i className="bi bi-paperclip"></i>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <button type="button" className="dropdown-item" href="#" id="imagebutton">
                                        {/*image icon*/}
                                        <i className="bi bi-image"></i>
                                        photo
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="dropdown-item input-group" href="#"
                                            id="videobutton">
                                        {/*video icon*/}
                                        <i className="bi bi-camera-video"></i>
                                        video
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <input type="text" className="form-control" placeholder="Type a message..."
                               aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        <button className="btn btn-outline-secondary" type="button" id="imagebutton">
                            {/*mic icon*/}
                            <i className="bi bi-mic"></i>
                        </button>
                        <button className="btn btn-outline-secondary" type="button" id="sendbutton">
                            {/*message icon*/}
                            <i className="bi bi-chat"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chats;