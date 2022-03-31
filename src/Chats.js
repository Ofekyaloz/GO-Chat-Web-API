import './Chats.css';

function Chats() {
    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div className={"col-4"}>
                    <div id={"SearchUser"} className={"input-group flex-nowrap"}>
                        <button className="btn btn-outline-secondary" type="button" id="searchbutton">
                            {/*search icon*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                        <input type="text" className={"form-control"} placeholder="Username" aria-label="Username"
                               aria-describedby="addon-wrapping" maxLength={30}></input>
                    </div>

                    <div className="list-group ChatHistory align-items-center" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action m-1" id="list-home-list"
                           data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Home</a>
                        <a className="list-group-item list-group-item-action" id="list-profile-list"
                           data-bs-toggle="list" href="#list-profile" role="tab"
                           aria-controls="list-profile">Profile</a>
                        <a className="list-group-item list-group-item-action" id="list-messages-list"
                           data-bs-toggle="list" href="#list-messages" role="tab"
                           aria-controls="list-messages">Messages</a>
                        <a className="list-group-item list-group-item-action" id="list-settings-list"
                           data-bs-toggle="list" href="#list-settings" role="tab"
                           aria-controls="list-settings">Settings</a>
                    </div>


                </div>


                <div className={"col-8"} id={"ChatBlock"}>
                    <div className="input-group mb-3 InputText">

                        <div className="btn-group dropup">
                            <button type="button" className="btn btn-secondary dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                {/*paperclip icon*/}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-paperclip" viewBox="0 0 16 16">
                                    <path
                                        d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                                </svg>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <button type="button" className="dropdown-item" href="#" id="imagebutton">
                                        {/*image icon*/}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor"
                                             className="bi bi-image" viewBox="0 0 16 16">
                                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                            <path
                                                d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                                        </svg>
                                        photo
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="dropdown-item" href="#" id="videobutton">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor"
                                             className="bi bi-camera-video" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                  d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
                                        </svg>
                                        video
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <input type="text" className="form-control" placeholder="Type a message..."
                               aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        <button className="btn btn-outline-secondary" type="button" id="imagebutton">
                            {/*mic icon*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-mic-fill"
                                 viewBox="0 0 16 16">
                                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
                                <path
                                    d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                        </button>

                        <button className="btn btn-outline-secondary" type="button" id="sendbutton">
                            {/*message icon*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-chat" viewBox="0 0 16 16">
                                <path
                                    d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chats;