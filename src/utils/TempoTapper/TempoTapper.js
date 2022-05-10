/**
 * BPM Tapper
 *
 * A simple module to find music's BPM by tapping along.
 *
 * Usage:
 * Create a new instance with your animations FPS
 * and an optional starting BPM.
 * `const bpm = new BpmTapper(fps, 120);`
 * Now click the mouse or press "t" to time BPM.
 *
 * Methods:
 * // Returns the current BPM.
 * `bpm.getBpm()`
 *
 * // Returns how many frames per-beat.
 * `bpm.getBpmFps()`
 *
 * // Transition speed is 1/2 of BPM tick.
 * `bpm.getSpeed()`
 *
 * // A BPM start offset for syncing animations.
 * `bpm.getBpmOffset()`
 */
class BpmTapper {
    /**
     * BPM Tapper
     * @param {int} bpm Optional default bpm
     */
    constructor(bpm = 0) {
        this.bpm = bpm;
        this.bpmOffset = 0;

        this.tapCount = 0;
        this.tapMsFirst = 0;
        this.tapMsPrevious = 0;

        this.paused = false;
        this.pausedBpm = this.bpm;
    }

    /**
     * Return the current BPM
     *
     * @return {int} Current BPM.
     */
    getBpm() {
        return this.bpm;
    }

    /**
     * Handle tap event
     *
     * Record taps and calculate BPM tempo.
     * There is a 1 second reset timeout.
     */
    tap() {
        const timestamp = new Date();
        const ms = timestamp.getTime();

        // Reset counter?
        if ((ms - this.tapMsPrevious) > 1000) {
            this.tapCount = 0;
        }

        // First tap?
        if (this.tapCount === 0) {
            this.tapCount = 1;
            this.tapMsFirst = ms;
            this.bpm = 0;
        }
        else {
            const bpmAvg = (60000 * this.tapCount) / (ms - this.tapMsFirst);
            this.tapCount++;
            this.bpm = Math.round(bpmAvg);
        }
        this.tapMsPrevious = ms;
    }
}

export default BpmTapper