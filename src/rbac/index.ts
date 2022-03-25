import { useContext } from "react";
import { CompanyContext } from "../context";

export const ability = {
  can: (operation: string, resource: string) => {
    const isCompanyConsole = useContext(CompanyContext);
    if (isCompanyConsole) return true

    return operation === "view" && resource === "aftership/shipments";
  },
};
