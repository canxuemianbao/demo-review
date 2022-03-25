import { Card, Page } from "@shopify/polaris";
import { useContext } from "react";
import { useFeatureCode } from "../../billing";
import { ROLE } from "../../enums";
import { useGetShipmentQuery } from "../../graphql";
import { ability } from "../../rbac";
import Filter from "./components/Filter";
import { List } from "./components/List";
import { SHIPMENTS_FEATURE } from "./context";

interface ShipmentsProps {
  role: ROLE
}
function Shipments({ role}: ShipmentsProps) {
  const feature = SHIPMENTS_FEATURE[role]
  const hasAbility = ability.can("view", "aftership/shipments");
  const shipments = useGetShipmentQuery();
  const hasFeatureCode = useFeatureCode("add shipment");
  return (
    <Page
      title="Sales by product"
      primaryAction={feature.add? {
        content: "Add shipment",
        onAction: () => {
          !hasFeatureCode && alert("you dont has this feature");
        },
      }: undefined}
    >
      {feature.filter && hasAbility && <Filter />}
      {feature.filter && !hasAbility && "cannot view filter"}
      <Card>
        <List shipments={shipments} />
      </Card>
    </Page>
  );
}

export default Shipments;
