import { useContext } from "react";
import { CompanyContext } from "../context";
export const useFeatureCode = (featureCode: string) => {
  const isCompanyConsole = useContext(CompanyContext);
  if (isCompanyConsole) return true

  return featureCode === "filter";
};
