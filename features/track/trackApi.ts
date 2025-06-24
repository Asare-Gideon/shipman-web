import { api } from "@/common/config/api";
import {
  ShipmentsQuerierType,
  ShipmentType,
} from "@/common/types/common.types";

export enum TrackKindEnum {
  CONTAINER_TRACKING,
  ITEM_TRACKING,
}

export type TrackShipmentRequestType = {
  tckFor: TrackKindEnum;
  tckNum: string;
  agent?: string;
  sentOn?: string;
  fromCountry?: string;
  toCountry?: string;
};
export const trackApi = api.injectEndpoints({
  endpoints: (build) => ({
    trackShipment: build.query<
      ShipmentsQuerierType | ShipmentType,
      TrackShipmentRequestType
    >({
      query: (params) => ({
        url: `shipment/track`,
        params,
      }),
    }),
    generateInvoice: build.mutation<
      { pdfbase64: string },
      { agentId: string; shipmentId: string }
    >({
      query: (params) => ({
        url: `shipment/agent-user/${params.agentId}/generate-invoice/${params.shipmentId}`,
      }),
    }),
  }),
});

export const { useTrackShipmentQuery, useGenerateInvoiceMutation } = trackApi;
