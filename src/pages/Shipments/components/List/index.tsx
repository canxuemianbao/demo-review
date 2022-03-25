import { Button, DataTable } from "@shopify/polaris";
import { useFeatureCode } from "../../../../billing";
import { useGetShipmentQuery } from "../../../../graphql";

export const List = ({
  shipments,
}: {
  shipments: ReturnType<typeof useGetShipmentQuery>;
}) => {
  return (
    <>
      <DataTable
        columnContentTypes={["text", "text", "text", "text"]}
        headings={["tracking number", "origin", "destination", "status"]}
        rows={shipments.map((shipment) => {
          return [
            shipment.trackingNumber,
            shipment.origin,
            shipment.destination,
            shipment.status,
          ];
        })}
      />
    </>
  );
};
