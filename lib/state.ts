class AppState {
  private appState: any[];
  private appStateIndex: number;

  constructor() {
    this.appState = [];
    this.appStateIndex = 0;
  }

  get index() {
    return this.appStateIndex;
  }

  set index(value: number) {
    this.appStateIndex = value;
  }

  get state() {
    return this.appState;
  }

  set state(value: any[]) {
    this.appState = value;
  }
}

export const appState = new AppState();
