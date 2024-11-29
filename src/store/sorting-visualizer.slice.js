import { initialArray, selectedAlgosStatus } from '@/config';
import {
  maxInterval,
  simulator,
  setHighlightInterval,
  setSwapInterval,
} from './global.state';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  array: initialArray,
  visualizerType: 'cell',
  isPlaying: false,
  reset: false,
  time: 0,
  speed: 5,
  timeIntervalId: null,
  selectedAlgosStatus,
};

function setIntervals(state) {
  if (state.visualizerType === 'cell') {
    setSwapInterval(maxInterval / state.speed);
  } else {
    setSwapInterval(maxInterval / (state.speed * 4));
  }
  setHighlightInterval(maxInterval / (state.speed * 4));
}

export const sortingVisualizerSlice = createSlice({
  name: 'sortViz',
  initialState,
  reducers: {
    setArray: (state, action) => {
      state.array = action.payload;
    },

    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
      action.payload ? simulator.start() : simulator.pause();

      if (!state.isPlaying && state.timeIntervalId) {
        clearInterval(state.timeIntervalId);
        state.timeIntervalId = null;
      }
    },

    setIntervalId: (state, action) => {
      state.timeIntervalId = action.payload;
    },

    incrementTime: (state) => {
      state.time++;
    },

    setReset: (state) => {
      state.reset = !state.reset;
      simulator.pause();
      state.time = 0;
    },

    modifyAlgoSelection: (state, action) => {
      state.selectedAlgosStatus[action.payload] =
        !state.selectedAlgosStatus[action.payload];
    },

    setSpeed: (state, action) => {
      state.speed = action.payload;
      setIntervals(state);
    },

    toggleVisualizerType: (state) => {
      state.visualizerType = state.visualizerType === 'cell' ? 'bar' : 'cell';
      setIntervals(state);
    },
  },
});

export const {
  setArray,
  setIsPlaying,
  setReset,
  setSpeed,
  setIntervalId,
  incrementTime,
  modifyAlgoSelection,
  toggleVisualizerType,
} = sortingVisualizerSlice.actions;
export default sortingVisualizerSlice.reducer;

export const startTimer = () => (dispatch) => {
  const intervalId = setInterval(() => {
    dispatch(incrementTime());
  }, 100);
  dispatch(setIntervalId(intervalId));
};
