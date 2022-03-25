import { Card, DataTable, Page } from "@shopify/polaris";
import { useGetShipmentQuery } from "../../graphql";
import Filter from "./components/Filter";
import { List } from "./components/List";

function Shipments({
  hasAbility,
  shipments,
  hasFeatureCode,
}: {
  hasAbility: boolean;
  hasFeatureCode: boolean;
  shipments: ReturnType<typeof useGetShipmentQuery>;
}) {
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
