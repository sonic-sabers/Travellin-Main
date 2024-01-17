import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { Button } from "tamagui";
import RootNavigator from "../src/navigation/RootNavigator";
export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			{/* <RootNavigator /> */}
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<EditScreenInfo path="app/(tabs)/index.tsx" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: "center",
		// justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		fontFamily: "Inter_100Thin",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
