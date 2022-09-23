class Audio {
    constructor(path, audio) {
        this.path = path;
        this.audio = audio;
    }

    init() {
        var context = new AudioContext()
        this.audio.src = this.path;
        var src = context.createMediaElementSource(this.audio);
        this.audio.crossOrigin = "anonymous";
        var analyser = context.createAnalyser();
        src.connect(analyser);
        src.connect(context.destination);
        analyser.connect(context.destination);
        analyser.fftSize = 512;
        var bufferLength = analyser.frequencyBinCount;
        var dataArray = new Uint8Array(bufferLength);
        return { context, analyser, dataArray }
    }
}

export default Audio
