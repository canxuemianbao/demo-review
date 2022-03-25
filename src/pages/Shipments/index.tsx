import { Card, DataTable, Page } from "@shopify/polaris";
import { useFeatureCode } from "../../billing";
import { useGetShipmentQuery } from "../../graphql";
import { ability } from "../../rbac";
import Filter from "./components/Filter";
import { List } from "./components/List";
import { useViewMode } from "./components/ViewModeProvider/ViewModeProvider";

function Shipments() {
  const viewMode = useViewMode();

  // You get the idea...
  const hasAbility = ability
    .can("view", "aftership/shipments")
    .mode(viewMode)
    .get();

  const shipments = useGetShipmentQuery();
  const hasFeatureCode = useFeatureCode("add shipment");

  return (
    <Page
      title="Sales by product"
      primaryAction={{
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
