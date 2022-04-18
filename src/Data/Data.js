import cat from "../Pictures/cat.jpg";
import panda from "../Pictures/panda.jpg";
import defaultImage from "../Pictures/icon-user-default.png";
import squirrel from "../Pictures/squirrel.jpg";
import Message from "../Chats/Message";
import {User} from "../App";
import bibi from "../Pictures/Benjamin Netanyahu.jpg";
import omer from "../Pictures/Omer Adam.webp";
import eden from "../Pictures/Eden Hason.jpg";
import convertMessage from "./convertMessage";

function Data({myMap}) {
    myMap.set("giligutfeld", new User("giligutfeld", "123456", "gili@gmail.com", "gili", cat));
    myMap.set("ofekyaloz", new User("ofekyaloz", "234567", "ofek@gmail.com", "Ofek", panda));
    myMap.set("benjaminnetanyahu", new User("benjaminnetanyahu", "rekbibi", "bibihamelch.gov.il", "BiBi", bibi));
    myMap.set("edenhason", new User("edenhason", "shemishoyatoroti", "edenh@gmail.com", "Eden", eden));
    myMap.set("omeradam", new User("omeradam", "shigramefoert", "omeradam@walla.com", "Omer", omer));

    myMap.set("leomessi", new User("leomessi", "101010", "leo@gmail.com", "leo", defaultImage));
    myMap.set("noakirel", new User("noakirel", "111111", "noa@gmail.com", "Noa", squirrel));

    const ofekandgili = myMap.get("ofekyaloz").friends;
    ofekandgili.set("giligutfeld", []);
    ofekandgili.get("giligutfeld").push({message: new Message("aaaa", true, new Date())});
    ofekandgili.get("giligutfeld").push({message: new Message("bbbb", false, new Date())});
    ofekandgili.get("giligutfeld").push({message: new Message("cccc", false, new Date())});
    ofekandgili.get("giligutfeld").push({message: new Message("dddd", true, new Date())});
    ofekandgili.get("giligutfeld").push({message: new Message("eeee", true, new Date())});
    ofekandgili.get("giligutfeld").push({message: new Message("eeee", true, new Date())});
    ofekandgili.get("giligutfeld").push({message: new Message("eeee", true, new Date())});
    ofekandgili.get("giligutfeld").push({message: new Message("eeee", true, new Date())});
    ofekandgili.get("giligutfeld").push({message: new Message("1234", false, new Date())});
    ofekandgili.get("giligutfeld").push({message: new Message("1234", false, new Date())});
    ofekandgili.get("giligutfeld").push({message: new Message("1234", false, new Date())});
    ofekandgili.get("giligutfeld").push({message: new Message("1234", false, new Date())});

    convertMessage(myMap.get("giligutfeld"), myMap.get("ofekyaloz"), ofekandgili.get("giligutfeld"));

    // const giliandofek = myMap.getgid("giligutfeld").friends;
    // giliandofek.set("ofekyaloz", []);
    // giliandofek.get("ofekyaloz").push({message: new Message("aaaa", false, new Date())});
    // giliandofek.get("ofekyaloz").push({message: new Message("bbbb", true, new Date())});
    // giliandofek.get("ofekyaloz").push({message: new Message("cccc", true, new Date())});
    // giliandofek.get("ofekyaloz").push({message: new Message("dddd", false, new Date())});
    // giliandofek.get("ofekyaloz").push({message: new Message("eeee", false, new Date())});
    // giliandofek.get("ofekyaloz").push({message: new Message("eeee", false, new Date())});
    // giliandofek.get("ofekyaloz").push({message: new Message("eeee", false, new Date())});
    // giliandofek.get("ofekyaloz").push({message: new Message("eeee", false, new Date())});
    // giliandofek.get("ofekyaloz").push({message: new Message("1234", true, new Date())});
    // giliandofek.get("ofekyaloz").push({message: new Message("1234", true, new Date())});
    // giliandofek.get("ofekyaloz").push({message: new Message("1234", true, new Date())});
    // giliandofek.get("ofekyaloz").push({message: new Message("1234", true, new Date())});

}

export default Data;