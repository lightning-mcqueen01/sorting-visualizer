export class Simulator {
  isPlaying = false;
  isPlayingPromise;
  isPlayingResolver;
  onPlay;
  onStop;

  constructor(onPlay, onStop) {
    this.onPlay = onPlay;
    this.onStop = onStop;
    this.isPlayingPromise = new Promise((r) => {
      this.isPlayingResolver = r;
    });
  }

  start() {
    if (this.isPlaying) {
      return;
    }

    this.isPlaying = true;
    this.isPlayingResolver();
    this.onPlay?.();
  }

  pause() {
    if (!this.isPlaying) {
      return;
    }

    this.isPlaying = false;
    this.isPlayingPromise = new Promise((r) => {
      this.isPlayingResolver = r;
    });
    this.onStop?.();
  }

  getStatus() {
    return this.isPlayingPromise;
  }
}
