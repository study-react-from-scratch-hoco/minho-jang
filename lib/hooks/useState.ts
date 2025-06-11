import { rerender } from "../render";
import { appState } from "../state";

export const useState = (initialState) => {
  const stateIndex = appState.index;
  appState.state[stateIndex] = appState.state[stateIndex] || initialState;
  console.log(
    `useState is initialized at cursor ${stateIndex} with value:`,
    appState.state
  );

  const setState = (newState) => {
    console.log(
      `setState is called at index ${stateIndex} with newState value:`,
      newState
    );
    appState.state[stateIndex] = newState;
    rerender();
  };

  appState.index++;
  console.log(`useState is incremented to ${appState.index}`);

  return [appState.state[stateIndex], setState];
};
