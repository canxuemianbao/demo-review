import ShipmentContainer from "./Container";
import ShipmentCompanyContainer from "./CompanyContainer";

export default function () {
  return import.meta.env.company ? (
    <ShipmentCompanyContainer />
  ) : (
    <ShipmentContainer />
  );
}
