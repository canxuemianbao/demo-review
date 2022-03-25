import consolePath from '../constants/consolePath'

export const ability = {
  can: (operation: string, resource: string) => {
    if(consolePath.includes(window.location.pathname)) {
      return true;
    }
    return operation === "view" && resource === "aftership/shipments";
  },
};
