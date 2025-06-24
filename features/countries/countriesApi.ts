import { api } from "@/common/config/api";

export type CountryType = {
  _id: string;
  flag: string;
  code: string;
  name: string;
  currency: string;
};

const countriesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCountries: build.query<{ data: CountryType[]; total: number }, void>({
      query: () => ({
        url: `misc/countries`,
      }),
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApi;
