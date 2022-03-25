import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import { CompanyContext } from "./context";
import Shipments from "./pages/Shipments";

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
  const isCompanyConsole = window.location.pathname.includes("/company.html");

  return (
    <AppProvider theme={theme} i18n={enTranslations}>
      <CompanyContext.Provider value={isCompanyConsole}>
        <Shipments />
      </CompanyContext.Provider>
    </AppProvider>
  );
}

export default App;
