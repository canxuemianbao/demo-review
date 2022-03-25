import React, { useState, useEffect, useMemo } from "react";

const ViewModeContext = React.createContext<string>("");

type ViewModeProviderProps = {
  children: React.ReactNode;
};

const ViewModeProvider = ({ children }: ViewModeProviderProps) => {
  const viewMode = useMemo(() => {
    let res = window.location.pathname.match(/company/);
    if (res) return "company";
    return "normal";
  }, [window.location.pathname]);

  return (
    <ViewModeContext.Provider value={viewMode}>
      {children}
    </ViewModeContext.Provider>
  );
};

export const useViewMode = () => {
  const context = React.useContext(ViewModeContext);
  if (context === undefined) {
    throw new Error("useViewMode must be used within a ViewModeProvider");
  }

  return context;
};

export default ViewModeProvider;
