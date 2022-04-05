import './Chats.css';
import img1 from '../Pictures/img1.jpg'
import icon from '../Pictures/icon-user-default.png'
import ChatHistory from './ChatHistory.js'
import history from "./history";
import LeftMenu from "./LeftMenu";
import Toolsbox from "./Toolsbox";
import {useState} from "react";
import msgs from "./msgs";
import ChatResults from "./ChatResults";

function Chats({username}) {

    const HistoryList = history.map((details, key) => {
        return <ChatHistory {...details} key={key}/>
    });

    const [MessageList, setMessageList] = useState(msgs);

    const doSearch = function (q) {
        // setMessageList(msgs.filter((message) => message.msg.includes(q)));
        setMessageList(msgs.push({msg: q}));

    }

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
                            <LeftMenu/>
                        </div>

                        {/*<input id="SearchUser" type="text" className={"form-control"} placeholder="Username"*/}
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

                    <ChatResults msgs={MessageList}/>

                    <Toolsbox doSearch={doSearch}/>

                </div>
            </div>
        </div>
    );
}

export default Chats;