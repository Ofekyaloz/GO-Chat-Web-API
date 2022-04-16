async function record() {

    let stream = await navigator.mediaDevices.getUserMedia({audio: true})
    let rec = new MediaRecorder(stream);
    let audioChunks = [];

    rec.ondataavailable = e => {
        audioChunks.push(e.data);
    }

    let record = document.getElementById("startRecord");
    let stopRecord = document.getElementById("stopRecord");

    record.onclick = e => {
        record.disabled = true;
        record.style.backgroundColor = "blue"
        stopRecord.disabled = false;
        rec.then(recorder => {
            recorder.start();
        })
    }

    stopRecord.onclick = e => {
        record.disabled = false;
        stopRecord.disabled = true;
        record.style.backgroundColor = "red"
        let blob = new Blob(audioChunks, {type: 'audio/mp3'});
        let recordedAudio = document.getElementById("recordedAudio");
        recordedAudio.src = URL.createObjectURL(blob);
        recordedAudio.controls = true;
        recordedAudio.autoplay = true;
        rec.then(recorder => {
            recorder.stop()
        })
        stream.getTracks().forEach(track => {
            track.stop()
        })
    }

}

export default record;