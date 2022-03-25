import Shipments from "./Shipments";
import { useGetShipmentCompanyQuery } from "../../graphql";

export default function ShipmentCompanyContainer() {
  const hasAbility = true;
  const shipments = useGetShipmentCompanyQuery();
  const hasFeatureCode = true;

  return (
    <Shipments
      hasAbility={hasAbility}
      hasFeatureCode={hasFeatureCode}
      shipments={shipments}
    ></Shipments>
  );
}
