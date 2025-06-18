class AppState {
  state: any[];
  index: number;

  constructor() {
    this.state = [];
    this.index = 0;
  }
}

export const appState = new AppState();
