import { api } from "@/common/config/api";
import { AgentType } from "@/common/types/common.types";

export type AgentInfoType = AgentType & {
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  address?: string;
  website?: string;
  email?: string;
  phoneNumbers?: string[];
  markPrefix: string;
  smallLogo?: string;
  companyDescription?: string;
  expertTeamText?: string;
};
export const agentsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAgents: build.query<AgentInfoType[], void>({
      query: () => ({
        url: `users/user/list-agents`,
      }),
    }),
  }),
});

export const { useGetAgentsQuery } = agentsApi;
