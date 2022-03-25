import { Card, DataTable, Page } from "@shopify/polaris";
import { useFeatureCode } from "../../billing";
import consolePath from "../../constants/consolePath";
import { useGetShipmentQuery } from "../../graphql";
import { ability } from "../../rbac";
import Filter from "./components/Filter";
import { List } from "./components/List";

function Shipments() {
  const hasAbility = ability.can("view", "aftership/shipments");
  const shipments = useGetShipmentQuery();
  const hasFeatureCode = useFeatureCode("add shipment");

  return (
    <Page
      title="Sales by product"
      primaryAction={consolePath.includes(window.location.pathname) ? undefined :{
        content: "Add shipment",
        onAction: () => {
          !hasFeatureCode && alert("you dont has this feature");
        },
      }}
    >
      {hasAbility && <Filter />}
      {!hasAbility && "cannot view filter"}
      <Card>
        <List shipments={shipments} />
      </Card>
    </Page>
  );
}

export default Shipments;
