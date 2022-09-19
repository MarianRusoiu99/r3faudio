class Audio {
    constructor(path, audio) {
        this.path = path;
        this.audio = audio;
        
    }
        
    
    init(){
        
    var context = new AudioContext()
    // console.log(this.audio)
    this.audio.src = this.path;
    console.log(context)
    // this.audio.muted="true"
    var src = context.createMediaElementSource(this.audio);
    this.audio.crossOrigin = "anonymous";
    console.log(src)
    var analyser = context.createAnalyser();
    src.connect(analyser);
    src.connect(context.destination);
    analyser.connect(context.destination);
    analyser.fftSize = 512;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);
    return dataArray
   }
    // static masterGainNode = Audio.context.createGain()
}

export default Audio