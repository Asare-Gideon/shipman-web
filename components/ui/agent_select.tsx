// import { useGetAgentsQuery } from "@/features/agents/agentsApi";
import React from "react";
import Combobox from "./combobox";
import { shippingAgents } from "@/lib/shipping-agents";

interface props {
  value: string;
  setValue: (val: string) => void;
}
const AgentSelect: React.FC<props> = ({ value, setValue }) => {
  // const { data: agents } = useGetAgentsQuery();
  return (
    <Combobox
      listItems={(shippingAgents || [])?.map((agent) => ({
        label: agent.label,
        value: agent.value,
        // ...(agent.logo && {
        //   image: agent.logo,
        // }),
      }))}
      value={value}
      setValue={setValue}
      placeholder="Shipping Agent"
      searchPlaceholder="Search agent"
    />
  );
};

export default AgentSelect;
