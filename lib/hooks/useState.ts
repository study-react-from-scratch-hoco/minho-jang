import { rerender } from "../render";
import { appState } from "../state";

export const useState = <T = any>(
  initialState: T
): [T, (newState: T) => void] => {
  const stateIndex = appState.index;

  if (appState.state[stateIndex] === undefined) {
    appState.state[stateIndex] = initialState;
  }

  console.log(
    `useState is initialized at cursor ${stateIndex} with value:`,
    appState.state
  );

  const setState = (newState: T) => {
    console.log(
      `setState is called at index ${stateIndex} with newState value:`,
      newState
    );
    appState.state[stateIndex] = newState;
    rerender();
  };

  appState.index++;
  console.log(`useState is incremented to ${appState.index}`);

  return [appState.state[stateIndex] as T, setState];
};
