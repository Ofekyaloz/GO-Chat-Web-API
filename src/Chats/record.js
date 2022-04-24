async function record() {
    try {
        let stream = await navigator.mediaDevices.getUserMedia({audio: true})
        let rec = new MediaRecorder(stream);
        let audioChunks = [];

        rec.addEventListener("dataavailable", event => {
            audioChunks.push(event.data);
        });

        rec.addEventListener("stop", () => {
            let blob = new Blob(audioChunks);
            let recordedAudio = document.getElementById("recordedAudio");
            recordedAudio.src = URL.createObjectURL(blob);
            stream.getTracks().forEach(track => {
                track.stop()
            });
        })
        return rec;

    } catch (error) {
        console.log("error");
    }
}

export default record;