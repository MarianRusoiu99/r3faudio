class Audio {
    constructor(path, audio) {
        this.path = path;
        this.audio = audio;
        
    }
        
    
    init(){
        
    var context = new AudioContext()
    console.log(this.audio)
    this.audio.src = this.path;
    var src = context.createMediaElementSource(this.audio);
    // src.disconnect()
    var analyser = context.createAnalyser();
    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 512;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);
    return dataArray
   }
    // static masterGainNode = Audio.context.createGain()
   getData(){
    return this.data;
   }
   getSource(){
    return this.source;
   }
}

export default Audio