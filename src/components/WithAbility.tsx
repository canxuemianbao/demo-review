import { ability } from "../rbac";

export function WithAbility(Com1: React.FC, Com2: React.FC) {
    const hasAbility = ability.can("view", "aftership/shipments");
    return hasAbility ? Com1 : Com2;
}