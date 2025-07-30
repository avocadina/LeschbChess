import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateI {
	deviceType: "ios" | "android" | "web";
	[key: string]: any;
}

const initialState: InitialStateI = {
	deviceType: "web",
};

export const navigationSlice = createSlice({
	name: "navigation",
	initialState,
	reducers: {
		setNavigation: (state: InitialStateI, action: PayloadAction<Partial<InitialStateI>>) => {
			try {
				let key: keyof InitialStateI;
				const valueArg = action.payload;
				for (key in valueArg) {
					if (Object.hasOwnProperty.call(valueArg, key) && Object.hasOwnProperty.call(state, key)) {
						state[key] = valueArg[key];
					}
				}
			} catch (err) {
				console.error(err);
				throw err;
			}
		},
	},
});

export const { setNavigation } = navigationSlice.actions;
export const selectNav = (state: { nav: InitialStateI }) => state.nav;
export default navigationSlice.reducer;
