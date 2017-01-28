import Notes from './Notes';

class Synth {

    constructor() {
        this.notes = Notes.all();
        // var context = {};
        let ContextClass = (window.AudioContext ||
            window.webkitAudioContext ||
            window.mozAudioContext ||
            window.oAudioContext ||
            window.msAudioContext);
        if (ContextClass) {
            // Web Audio API is available.
            this.context = new ContextClass();
        } else {
            console.error('Browser does not support AudioContext, uh oh!');
        }
    }

    playSong(song, osc) {
        let duration = 0.5,
            startTime = this.context.currentTime,
            // song = ['G3', 'A#3/Bb3', 'D#4/Eb4', 'G3', 'A#3/Bb3', 'G#3/Ab3', 'G3'],
            // song = ['G3', 'G3', 'G3', 'G3', 'G3', 'G#3/Ab3', 'G3'],
            oscillatorType = osc,
            masterVolume = 0.1;


        for (var i = 0; i < song.length; i++) {
            // controller.updateSpheresByNote(song[i]);
            this.play(song[i], startTime + duration * i, duration, oscillatorType, masterVolume);
        }
    }

    play(note, startTime, duration, type, volumeLevel) {
        let osc1 = this.context.createOscillator(),
            osc2 = this.context.createOscillator(),
            volume = this.context.createGain(),
            frequency = this.notes[note];

        volume.gain.value = volumeLevel;

        // Set oscillator wave type
        osc1.type = type;
        osc2.type = type;

        // tune
        osc1.frequency.value = frequency;
        osc2.frequency.value = frequency - 3;

        // wire em up
        // osc1.connect(analyser);
        // analyser.connect(freqAnalyser);
        // freqAnalyser.connect(volume);
        osc1.connect(volume);

        osc2.connect(volume);
        volume.connect(this.context.destination);

        // Fade out
        volume.gain.setValueAtTime(0.1, startTime + duration - 0.25);
        volume.gain.linearRampToValueAtTime(0, startTime + duration);

        // Start oscillators
        osc1.start(startTime);
        osc2.start(startTime);

        // Stop oscillators
        osc1.stop(startTime + duration);
        osc2.stop(startTime + duration);
    }
}

export default Synth;