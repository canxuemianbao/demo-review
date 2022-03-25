export const ability = {
  can: (operation: string, resource: string) => {
    return operation === "view" && resource === "aftership/shipments";
  },
};
