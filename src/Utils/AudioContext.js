

export async function createAudio(url,audio) {
    // Fetch audio data and create a buffer source
    var res = await fetch(url)

    console.log(audio)
    audio.load()
    //  var src = context.createMediaElementSource(audio);
    var buffer = await res.arrayBuffer()
    var context = new AudioContext(audio);
    var source = context.createBufferSource(audio)
    source.buffer = await new Promise((res) => context.decodeAudioData(buffer, res))
    // source.loop = true

    source.start(0)
    // res.play()
    context.resume()
    // Create gain node and an analyser
    // const gain = context.createGain()
    var analyser = context.createAnalyser(audio)
    analyser.fftSize = 64
    source.connect(analyser)
    // analyser.connect(gain)
    
    // The data array receive the audio frequencies
    var data = new Uint8Array(analyser.frequencyBinCount)
    return {
      context,
      source,
      // gain,
      data,
      // This function gets called every frame per audio source
      update: () => {
        analyser.getByteFrequencyData(data)
        // Calculate a frequency average
        
        return (data.avg = data.reduce((prev, cur) => prev + cur / data.length, 0))
      },
    }
  }