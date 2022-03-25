export const ability = {
  can: (operation: string, resource: string) => {
    let res = operation === "view" && resource === "aftership/shipments";

    const api = {
      mode(m: string) {
        if (m === "company") res = true;
        return api;
      },

      get() {
        return res;
      },
    };

    return api;
  },
};
