import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { MenuProvider } from "react-native-popup-menu";

import { SafeAreaView } from "react-native-safe-area-context";
import "@tamagui/core/reset.css";

import { TamaguiProvider, createTamagui } from "tamagui";

// some nice defaults:
import { createTokens, Theme } from "tamagui";

// you usually export this from a tamagui.config.ts file:
import { config } from "@tamagui/config/v2";
// this can be as simple as an empty object
const tamaguiConfig = createTamagui(config);

// this makes typescript properly type everything based on the config
// type Conf = typeof tamaguiConfig;
declare module "tamagui" {
	interface TamaguiCustomConfig extends Conf {}
}
export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
};
import {
	Inter_100Thin,
	Inter_200ExtraLight,
	Inter_300Light,
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
	Inter_800ExtraBold,
	Inter_900Black,
} from "@expo-google-fonts/inter";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		Inter_100Thin,
		Inter_200ExtraLight,
		Inter_300Light,
		Inter_400Regular,
		Inter_500Medium,
		Inter_600SemiBold,
		Inter_700Bold,
		Inter_800ExtraBold,
		Inter_900Black,
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

const tokens = createTokens({
	color: {
		darkRed: "#550000",
		lightRed: "#ff0000",
	},
	space: {},
	size: {},
	radius: {},
	zIndex: {},
});

// const config = createTamagui({
// 	tokens,
// 	themes: {
// 		dark: {
// 			red: tokens.color.darkRed,
// 		},
// 		light: {
// 			red: tokens.color.lightRed,
// 		},
// 	},
// });

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	return (
		<TamaguiProvider defaultTheme="light" config={tamaguiConfig}>
			<MenuProvider>
				<SafeAreaView style={{ flex: 1 }}>
					<ThemeProvider
						value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
						<Stack>
							<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
							<Stack.Screen name="modal" options={{ presentation: "modal" }} />
						</Stack>
					</ThemeProvider>
				</SafeAreaView>
			</MenuProvider>
		</TamaguiProvider>
	);
}
