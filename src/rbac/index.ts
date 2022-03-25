import { ROLE } from "../enums";

export const ability = {
  can: (operation: string, resource: string) => {
    return window.role !== ROLE.COMPANY && operation === "view" && resource === "aftership/shipments";
  },
};
