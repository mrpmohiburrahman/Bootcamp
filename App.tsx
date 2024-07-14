import { View } from "react-native";
import { PersistGate } from "redux-persist/es/integration/react";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import RootNavigation from "./src/navigation/RootNavigation";
import { Provider } from "react-redux";
import { persistor, store } from "./src/store/index";
import Loading from "./src/components/common/Loading";
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          EncodeSansRegular: require("./assets/fonts/EncodeSans-Regular.ttf"),
          EncodeSansBold: require("./assets/fonts/EncodeSans-Bold.ttf"),
          MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
          MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <RootNavigation />
        </View>
      </PersistGate>
    </Provider>
  );
}
