import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import { ROLE } from "./enums";
import CompanyShipments from "./pages/Shipments/Company";
import NormalShipments from "./pages/Shipments/Normal";

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
    <AppProvider  i18n={enTranslations} >
      {window.role === ROLE.COMPANY? <CompanyShipments/> : <NormalShipments />}
    </AppProvider>
  );
}

export default App;
