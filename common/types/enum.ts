export enum ContainerLocationInGroupEnum {
  FROM_ACTIVITIES,
  TRANSIT,
  TO_ACTIVITIES,
}

export enum TransactionForEnum {
  shipment = "shipment",
  rmb = "rmb",
  wallet_topup = "wallet_topup",
  wallet_withdrawal = "wallet_withdrawal",
}
export enum TransactionStatus {
  pending = "pending",
  complete = "complete",
  failed = "failed",
  processing = "processing",
  sendProcessing = "send-processing",
}
export enum TransactionMobileNetworks {
  mtn = "Mtn",
  vodafone = "Vodafone",
  airtelTigo = "Airtel Tigo",
  sWallet = "S-Wallet",
}
