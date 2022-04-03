import './Chats.css';
import img1 from './img1.jpg'

function Chats({username}) {
    return (
        <div className={"container-fluid"}>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"/>

            <div className={"row"}>
                <div className={"col-4 vh-100 d-flex"}>

                    <div className="list-group d-flex ChatHistory" id="list-tab" role="tablist">

                        <div id={"UserInfo"} className={"d-flex"}>
                            <img className="UserImage" src={img1} alt=""/>
                            <span className="ContactName" id="UserName"> Ofek Yaloz</span>

                            <button className="btn btn-outline" type="button" id="SearchButton">
                                {/*search icon*/}
                                <i className="bi bi-search"></i>
                            </button>

                            <input id="SearchUser" type="text" className={"form-control"} placeholder="@Username"
                                   aria-label="Username"
                                   aria-describedby="addon-wrapping" maxLength={35}>
                            </input>

                            <button type="button" className="btn btn-outline" id="NewContact">
                                {/*contact icon*/}
                                <i className="bi bi-person-plus-fill"/>
                            </button>

                        </div>


                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href=""
                           role="tab" aria-controls="list-home">
                            <div>
                                <div className="row">
                                    <div className="col-4">
                                        <img className="UserImage" src={img1}/>
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

                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href=""
                           role="tab" aria-controls="list-home">
                            <div>
                                <div className="row">
                                    <div className="col-4">
                                        <img className="UserImage" src={img1}/>
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

                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href=""
                           role="tab" aria-controls="list-home">
                            <div>
                                <div className="row">
                                    <div className="col-4">
                                        <img className="UserImage" src={img1}/>
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
                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href=""
                           role="tab" aria-controls="list-home">
                            <div>
                                <div className="row">
                                    <div className="col-4">
                                        <img className="UserImage" src={img1}/>
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

                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href=""
                           role="tab" aria-controls="list-home">
                            <div>
                                <div className="row">
                                    <div className="col-4">
                                        <img className="UserImage" src={img1}/>
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

                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href=""
                           role="tab" aria-controls="list-home">
                            <div>
                                <div className="row">
                                    <div className="col-4">
                                        <img className="UserImage" src={img1}/>
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
                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href=""
                           role="tab" aria-controls="list-home">
                            <div>
                                <div className="row">
                                    <div className="col-4">
                                        <img className="UserImage" src={img1}/>
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

                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href=""
                           role="tab" aria-controls="list-home">
                            <div>
                                <div className="row">
                                    <div className="col-4">
                                        <img className="UserImage" src={img1}/>
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

                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href=""
                           role="tab" aria-controls="list-home">
                            <div>
                                <div className="row">
                                    <div className="col-4">
                                        <img className="UserImage" src={img1}/>
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
                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href=""
                           role="tab" aria-controls="list-home">
                            <div>
                                <div className="row">
                                    <div className="col-4">
                                        <img className="UserImage" src={img1}/>
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

                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href=""
                           role="tab" aria-controls="list-home">
                            <div>
                                <div className="row">
                                    <div className="col-4">
                                        <img className="UserImage" src={img1}/>
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

                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href=""
                           role="tab" aria-controls="list-home">
                            <div>
                                <div className="row">
                                    <div className="col-4">
                                        <img className="UserImage" src={img1}/>
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


                <div className={"col-8"} id={"ChatBlock"}>
                    <div className="input-group bottom InputText row col-11" id={"bottom"}>
                        <div className={"col-12"}>
                            <div className="input-group">
                            <button type="button" className="btn btn-secondary dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                {/*paperclip icon*/}
                                <i className="bi bi-paperclip"/>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <button type="button" className="dropdown-item" href="#" id="image-button">
                                        {/*image icon*/}
                                        <i className="bi bi-image"/>
                                        photo
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="dropdown-item input-group" href="#"
                                            id="video-button">
                                        {/*video icon*/}
                                        <i className="bi bi-camera-video"/>
                                        video
                                    </button>
                                </li>
                            </ul>
                            <input type="text" className="form-control" placeholder="Type a message..."
                                   aria-label="Recipient's username" aria-describedby="button-addon2" id="Text-input">
                            </input>

                            <button className="btn btn-outline-primary" type="button" id="send-button">
                                {/*message icon*/}
                                <i className="bi bi-chat"/>
                            </button>
                            <button className="btn btn-outline-primary" type="button" id="mic-button">
                                {/*mic icon*/}
                                <i className="bi bi-mic"/>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chats;