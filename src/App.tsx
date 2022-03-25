import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import Shipments from "./pages/Shipments";

import '@shopify/polaris/dist/styles.css';

export const theme = {
  colors: {
    primary: "#5c6ac4",
  },
  logo: {
    width: 137,
    topBarSource: "/src/logos/wineshipping_logo.svg",
    url: "/",
    accessibilityLabel: "aftership",
  },
};

function App() {
  return (
    <AppProvider theme={theme} i18n={enTranslations}>
      <Shipments />
    </AppProvider>
  );
}

export default App;
