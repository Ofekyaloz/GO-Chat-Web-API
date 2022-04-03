import './Chats.css';
import img1 from './img1.jpg'

function Chats({username}) {
    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div className={"col-4 d-flex LeftSide"}>

                    <div className={"d-flex col-12"} id={"UserInfo"}>
                        <div className="col-2">
                            <img className="UserImage" src={img1} alt=""/>
                        </div>
                        <div className="col-7 m-3 ContactName" id="UserName">
                            Ofek Yaloz
                        </div>

                        <div className="col-6 m-3" id="SideMenu">

                            {/*<input id="SearchUser" type="text" className={"form-control"} placeholder="@Username"*/}
                            {/*       aria-label="Username"*/}
                            {/*       aria-describedby="addon-wrapping" maxLength={35}>*/}
                            {/*</input>*/}

                            <button className="btn btn--outline-secondary" type="button" id="dropdownMenu2"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-three-dots-vertical"/>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <button type="button" className="btn btn-light" id="NewContact">
                                        {/*contact icon*/}
                                        <i className="bi bi-person-plus-fill"/>
                                    </button>
                                </li>
                                <li>
                                    <button className="btn btn-light" type="button" id="SearchButton">
                                        {/*search icon*/}
                                        <i className="bi bi-search"/>
                                    </button>
                                </li>
                                <li>
                                    <button className="btn btn-light" type="button" id="SearchButton">
                                        {/*logout icon*/}
                                        <i className="bi bi-box-arrow-right"/>
                                    </button>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="list-group ChatHistory" id="list-tab" role="tablist">

                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href=""
                           role="tab" aria-controls="list-home">
                            <div>
                                <div className="row">
                                    <div className="col-3">
                                        <img className="UserImage" src={img1}/>
                                    </div>
                                    <div className="col-9">
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
                                    <div className="col-3">
                                        <img className="UserImage" src={img1}/>
                                    </div>
                                    <div className="col-9">
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
                                    <div className="col-3">
                                        <img className="UserImage" src={img1}/>
                                    </div>
                                    <div className="col-9">
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

                <div className={"col-8 d-flex"} id={"ChatBlock"}>
                    <div className="input-group InputText row col-11">
                        <div className="input-group">
                            <button type="button" className="btn btn-secondary"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                {/*paperclip icon*/}
                                <i className="bi bi-paperclip"/>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
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
                            <input type="text" className="form-control" placeholder="Type a message..."
                                   aria-label="Recipient's username" aria-describedby="button-addon2"
                                   id="Text-input">
                            </input>

                            <button className="btn btn-primary" type="button" id="send-button">
                                {/*message icon*/}
                                <i className="bi bi-send"/>
                            </button>
                            <button className="btn btn-danger" type="button" id="mic-button">
                                {/*mic icon*/}
                                <i className="bi bi-mic"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chats;