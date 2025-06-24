import { api } from "@/common/config/api";
import {
  ShipmentsQuerierType,
  TransactionType,
} from "@/common/types/common.types";

export const receiptApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTransactionReceipt: build.query<
      { transaction: TransactionType; shipment: ShipmentsQuerierType },
      string
    >({
      query: (tref) => ({
        url: `shipment/payment/user/transaction-info/${tref}`,
      }),
    }),
  }),
});

export const { useGetTransactionReceiptQuery } = receiptApi;
