import Shipments from "./Shipments";
import { useFeatureCode } from "../../billing";
import { useGetShipmentQuery } from "../../graphql";
import { ability } from "../../rbac";

export default function ShipmentContainer() {
  const hasAbility = ability.can("view", "aftership/shipments");
  const shipments = useGetShipmentQuery();
  const hasFeatureCode = useFeatureCode("add shipment");

  return (
    <Shipments
      hasAbility={hasAbility}
      hasFeatureCode={hasFeatureCode}
      shipments={shipments}
    ></Shipments>
  );
}
