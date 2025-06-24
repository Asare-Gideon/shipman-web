import {
  ContainerLocationInGroupEnum,
  TransactionForEnum,
  TransactionMobileNetworks,
  TransactionStatus,
} from "./enum";

export type UsedAgentType = {
  shippingMark: string;
  superAgent: string;
};

export type UserType = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  allnames: string;
  phoneNumber: string;
  createdOn: Date;
  country?: CountryType;
  countryState?: CountryStateType;
  verified?: boolean;
  userSignedUp: boolean;
  usedAgents?: UsedAgentType[];
} & UsedAgentType;

export type LocationType = {
  _id: string;
  name: string;
  longitude: number;
  latitude: number;
  createdOn: Date;
};

export type CountryType = {
  _id: string;
  flag: string;
  code: string;
  name: string;
  currency: string;
};

export type CountryStateType = {
  _id: string;
  country: CountryType;
  name: string;
  longitude?: number;
  latitude?: number;
};

export type AgentType = {
  _id: string;
  companyName: string;
  markPrefix: string;
};

export type ContainerType = {
  _id: string;
  code: string;
  routes?: {
    location: LocationType;
    reachedOn?: Date;
    isCurrent: boolean;
    inGroup: ContainerLocationInGroupEnum;
    indx: number;
  }[];
  routeId?: string;
  reachedLocalWarehouse?: boolean;
  loadingDate: Date;
  eta?: Date;
  createdOn: Date;
  rate: number;
  dollarRate: number;
  isAir?: boolean;
  from?: CountryType;
  to?: CountryType;
  superAgent: AgentType;
  reachedWarehouseOn?: Date;
};

export type ImageType = {
  _id: string;
  id: string;
  url: string;
};

export type OfficeType = {
  _id: string;
  locationName: string;
  locationData: {
    longitude: number;
    latitude: number;
    address: string;
    dAddress?: string;
    addressLink?: string;
  };
  image: ImageType;
  telPhone: string;
  superAgent: AgentType;
};

export type ShipmentType = {
  _id: string;
  user: UserType;
  container: ContainerType;
  tracking: string;
  shippingMark: string;
  delivered: boolean;
  cbm: number;
  confirmedCbm: number;
  quantity: number;
  isAir: boolean;
  measurementNumber?: number;
  description: string;
  supplyTracking: string;
  rate: number;
  price: number;
  confirmedPrice: number;
  found?: boolean;
  confirmedLength?: number;
  confirmedWidth?: number;
  confirmedHeight?: number;
  length?: number;
  width?: number;
  height?: number;
  calcQuantity?: number;
  confirmedCalcQuantity?: number;
  weight?: number;
  destinationOffice?: OfficeType;
  superAgent: AgentType;
};

export type ShipmentsQuerierType = {
  _id: string;
  container: ContainerType;
  user: UserType;
  shipments: ShipmentType[];
  tracking: string;
  shippingMark: string;
  delivered?: boolean;
  isAir: boolean;
  isNewLoading: boolean;
  createdOn: Date;
  superAgent: AgentType;
};

export type TransactionType = {
  _id: string;
  ref: string;
  receiptNumber: string;
  requestedAmount: number;
  charge: number;
  fee: number;
  channel: string;
  paymentFor: TransactionForEnum;
  forAgent?: AgentType;
  paid: boolean;
  status: TransactionStatus;
  paidAt: Date | string;
  userEmail?: string;
  user?: UserType;
  username?: string;
  phoneNumber?: string;
  mobileNetwork?: TransactionMobileNetworks;
  createdOn: Date;
};
