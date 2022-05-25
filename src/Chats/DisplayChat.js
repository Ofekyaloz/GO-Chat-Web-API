import defaultImage from "../Pictures/icon-user-default.png"

    function DisplayChat(setFriend, friendUser, photo, friendNickname, server) {
        const bar = document.getElementById("ChatBar");
        if (bar.style.display !== "none") {
            bar.style.display = "block";
            if (photo === " " || photo === "") {
                document.getElementById("BarImage").src = defaultImage;
            } else {
                document.getElementById("BarImage").src = photo;
            }
            document.getElementById("BarName").innerText = friendNickname;
        }

        const toolbox = document.getElementById("toolbox");
        if (toolbox.style.display !== "none") {
            toolbox.style.display = "block";
        }
        const li = document.getElementById("chat-msgs");
        if (li.style.display !== "none") {
            li.style.display = "block";
        }
        setFriend({username: friendUser, server: server});
    }

export default DisplayChat;