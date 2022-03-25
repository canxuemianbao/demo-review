import { useContext } from "react";
import { normalShipments } from "./mock";
import { companyShipments } from "./mock";
import { CompanyContext } from "../context";

export const useGetShipmentQuery = () => {
  const isCompanyConsole = useContext(CompanyContext);

  return isCompanyConsole ? companyShipments : normalShipments;
};
