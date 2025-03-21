type AppState = {
	worker: Worker | undefined;
};

export const appState = $state<AppState>({
	worker: undefined
});
