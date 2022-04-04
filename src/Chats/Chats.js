import './Chats.css';
import img1 from '../Pictures/img1.jpg'
import icon from '../Pictures/icon-user-default.png'
import ChatHistory from './ChatHistory.js'
import history from "./history";

function Chats({username}) {

    const HistoryList = history.map((details, key) => {
        return <ChatHistory {...details} key={key}/>
    });

    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div className={"col-4 d-flex LeftSide"}>

                    <div className={"d-flex col-12"} id={"UserInfo"}>
                        <div className="col-2">
                            <img className="UserImage" src={img1} alt=""/>
                        </div>
                        <div className="col-7 m-3 ContactName" id="UserName">

                            <span className="m-3"> Ofek Yaloz </span>

                            <button className="btn btn--outline-secondary" type="button" id="dropdownMenu2"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                {/*3-dots icon*/}
                                <i className="bi bi-three-dots-vertical"/>
                            </button>

                            <ul className="dropdown-menu">
                                <li>
                                    <button className="btn btn-light SideMenu" type="button" id="NewContactButton">
                                        <span className="m-3"> New Contact </span>
                                        {/*contact icon*/}
                                        <i className="bi bi-person-plus-fill"/>
                                    </button>
                                </li>
                                <li>
                                    <button className="btn btn-light SideMenu" type="button" id="SearchButton">
                                        <span className="m-3"> Search </span>
                                        {/*search icon*/}
                                        <i className="bi bi-search"/>
                                    </button>
                                </li>
                                <li>
                                    <button className="btn btn-light SideMenu" type="button" id="LogOutButton">
                                        <span className="m-3"> LogOut </span>
                                        {/*logout icon*/}
                                        <i className="bi bi-box-arrow-right"/>
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/*<input id="SearchUser" type="text" className={"form-control"} placeholder="@Username"*/}
                        {/*       aria-label="Username"*/}
                        {/*       aria-describedby="addon-wrapping" maxLength={35}>*/}
                        {/*</input>*/}

                    </div>

                    <div className="list-group ChatHistory" id="list-tab" role="tablist">
                        {HistoryList}
                    </div>
                </div>

                <div className={"col-8 d-flex"} id={"ChatBlock"}>
                    <div className="ChatBar">
                        <div className="m-1">
                            <img className="UserImage" src={icon}/>
                            <span className="ContactName"> Mom </span>
                        </div>
                    </div>


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

                            <button className="btn btn-primary" type="button" id="send-button" onClick={SendMessage}>
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

function SendMessage() {

}

export default Chats;