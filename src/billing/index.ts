import consolePath from "../constants/consolePath";

export const useFeatureCode = (featureCode: string) => {
  if(consolePath.includes(window.location.pathname)) {
    return true;
  }
  return featureCode === "filter";
};
