"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowDownToLine, ScanSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShipmentUpdates from "./sections/shipment-updates";
import AgentDetails from "./sections/agent-details";
import ContentLoader from "@/components/ui/content-loader";
import {
  TrackKindEnum,
  useGenerateInvoiceMutation,
  useTrackShipmentQuery,
} from "@/features/track/trackApi";
import { useSearchParams } from "next/navigation";
import moment from "moment";
import { cn } from "@/lib/utils";
import { useGetAgentsQuery } from "@/features/agents/agentsApi";
import PDFReaderModal from "@/components/ui/pdf-reader-modal";
import { FAQS_LIST } from "@/common/constants";
import ShipmentInfo from "./sections/shipment-info";
import type { ShipmentsQuerierType } from "@/common/types/common.types";
import ClientInfo from "./sections/client-info";
import ShipmentCargoInfo from "./sections/shipment-cargo-info";
import Faq from "@/components/Faq";

const faqArr = [
  {
    id: "1",
    question: "How do I track my shipment on Shipman?",
    answer: `On the mobile app, log in to your account, navigate to the "Shipments" section, and you'll see all available shipments. On the website, simply go to the "Track Shipment" section and enter your tracking number to get real-time updates.`,
  },
  {
    id: "2",
    question: "How do I track my shipment on Shipman?",
    answer: `On the mobile app, log in to your account, navigate to the "Shipments" section, and you'll see all available shipments. On the website, simply go to the "Track Shipment" section and enter your tracking number to get real-time updates.`,
  },
];

const Page = () => {
  const { data: agents } = useGetAgentsQuery();
  const searchParams = useSearchParams();
  const tckFor = Number.parseInt(searchParams.get("tckFor") || "0");
  const tckNum = searchParams.get("tckNum") as string;
  const agt = searchParams.get("agent");
  const sentOn = searchParams.get("sentOn");
  const fromCountry = searchParams.get("fromCountry");
  const toCountry = searchParams.get("toCountry");
  const [tracking, setTracking] = useState(tckNum);
  const [searchableTracking, setSearchableTracking] = useState(tckNum);
  const {
    isLoading: trackLoading,
    isFetching,
    data: trackInfo,
  } = useTrackShipmentQuery(
    {
      tckFor,
      tckNum: searchableTracking,
      ...(agt && { agent: agt }),
      ...(sentOn && { sentOn }),
      ...(fromCountry && { fromCountry }),
      ...(toCountry && { toCountry }),
    },
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
    }
  );
  const [
    handleGenerateInvoice,
    { isLoading: invoiceLoading, data: invoiceData, reset: resetInvoiceData },
  ] = useGenerateInvoiceMutation();
  const agent = agents?.find(
    (ag) => ag._id.toString() === trackInfo?.superAgent?._id.toString()
  );
  const currentLocation = trackInfo?.container.routes?.find(
    (route) => route.isCurrent
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-400/3 to-indigo-400/3 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <PDFReaderModal
          isOpen={Boolean(invoiceData)}
          onClose={() => resetInvoiceData()}
          pdfUrl={invoiceData?.pdfbase64 || ""}
        />
        <ContentLoader
          open={trackLoading || isFetching}
          setOpen={(val) => {}}
        />

        <div className="container mt-[7.5rem] sm:mt-4 z-[99]">
          <h1 className="text-[1.3rem] md:text-[2rem] text-center mb-3 sm:text-start md:w-[60%] text-gray-900 mt-[4rem] sm:mt-[4rem] xl:mt-[8rem] leading-[50px] sm:leading-[70px] koho-B">
            Tracking & Trace
          </h1>
          <div className="bg-white border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center p-1 md:px-2 w-full md:w-[35rem] rounded-lg hover:shadow-md transition-all duration-300">
            <div className="flex flex-row items-center w-full">
              <ScanSearch className="mx-3 text-blue-600" />
              <input
                type="text"
                value={tracking}
                onChange={(e) => setTracking(e.target.value)}
                placeholder="Enter tracking number"
                className="outline-none caret-blue-600 border-none bg-transparent w-full py-3 md:p-4 text-sm md:text-md text-gray-900 placeholder:text-gray-500"
              />
            </div>
            <Button
              className="px-5 w-full sm:w-auto rounded-md bg-blue-600 hover:bg-blue-700 transition-all duration-300"
              onClick={() => {
                setSearchableTracking(tracking?.trim() || "");
              }}
            >
              Track
            </Button>
          </div>
        </div>

        {trackInfo && (
          <div className="pb-10">
            <div className="container mt-[3rem] p-2">
              <div className="w-full bg-white border border-gray-200 shadow-sm rounded-lg p-6 hover:shadow-md transition-all duration-300">
                <div className="flex md:items-center items-start justify-between border-b pb-6 border-gray-200 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 -m-6 mb-6 p-6 rounded-t-lg">
                  <div>
                    <h5 className="text-gray-900 Koho-L text-md font-semibold flex md:flex-row flex-col">
                      <span className="text-gray-600">Tracking code:</span>{" "}
                      <span className="text-blue-600 font-bold">
                        {trackInfo?.tracking}
                      </span>
                    </h5>
                    <h5 className="text-gray-700 Koho-L text-md mt-3 font-normal">
                      This shipment is handled by:{" "}
                      <span className="font-semibold text-gray-900">
                        {trackInfo.superAgent.companyName}
                      </span>
                    </h5>
                  </div>
                  {tckFor === TrackKindEnum.CONTAINER_TRACKING && (
                    <Button
                      onClick={async () => {
                        if (!trackInfo) return;
                        await handleGenerateInvoice({
                          agentId: trackInfo.superAgent?._id as string,
                          shipmentId: trackInfo._id,
                        });
                      }}
                      disabled={invoiceLoading}
                      className="flex cursor-pointer disabled:opacity-80 bg-green-600 hover:bg-green-700 transition-all duration-300 rounded-md"
                    >
                      <ArrowDownToLine className="mr-2 text-md" />
                      Invoice
                    </Button>
                  )}
                </div>

                <div className="mt-2">
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <h1 className="mt-2 text-xl font-bold text-yellow-700">
                      {trackInfo.delivered
                        ? "✅ Delivered"
                        : trackInfo.container.reachedLocalWarehouse
                        ? "📦 Ready for Collection"
                        : `🚚 ${
                            currentLocation?.location.name ||
                            trackInfo.container.from?.name
                          }`}
                    </h1>
                    <p className="text-gray-700 text-sm mt-2">
                      {currentLocation && currentLocation.reachedOn && (
                        <>
                          {moment
                            .utc(currentLocation?.reachedOn)
                            .format("llll")}{" "}
                          (UTC)
                        </>
                      )}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50/50 to-cyan-50/50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-gray-900 text-[14px] sm:text-sm mb-4 flex items-center space-x-2">
                      <span className="font-semibold">Origin:</span>
                      <div className="flex items-center space-x-2 bg-white px-3 py-1 rounded-md border border-gray-100">
                        <Image
                          src={
                            (trackInfo.container.from?.flag as string) ||
                            "/placeholder.svg"
                          }
                          alt={trackInfo.container.from?.name as string}
                          width={24}
                          height={24}
                          className="rounded-sm"
                        />
                        <span className="font-medium">
                          {trackInfo.container.from?.name}
                        </span>
                      </div>
                    </p>

                    <div className="my-6 flex w-full">
                      <div className="flex flex-row items-center w-[33%]">
                        <div className="w-full h-3 bg-gradient-to-r from-green-500 to-green-600 relative after:content-[''] after:absolute after:w-3 after:h-6 after:bg-gradient-to-r after:from-green-500 after:to-green-600 rounded-bl-xl after:bottom-0 after:rounded-bl-xl"></div>
                        <div className="w-[2rem] h-3 bg-gradient-to-r from-green-500 to-green-600 arrow-clip-out -ml-1"></div>
                      </div>
                      <div className="flex flex-row items-center w-[34%]">
                        <div
                          className={cn(
                            "w-[2rem] h-3 bg-gradient-to-r from-green-500 to-green-600 arrow-clip-in-back -mr-1",
                            (!currentLocation || currentLocation.indx <= 1) &&
                              "bg-gradient-to-r from-gray-300 to-gray-400"
                          )}
                        ></div>
                        <div
                          className={cn(
                            "w-full h-3 bg-gradient-to-r from-green-500 to-green-600",
                            (!currentLocation || currentLocation.indx <= 1) &&
                              "bg-gradient-to-r from-gray-300 to-gray-400"
                          )}
                        ></div>
                        <div
                          className={cn(
                            "w-[2rem] h-3 bg-gradient-to-r from-green-500 to-green-600 arrow-clip-in-forward -ml-1",
                            (!currentLocation || currentLocation.indx <= 1) &&
                              "bg-gradient-to-r from-gray-300 to-gray-400"
                          )}
                        ></div>
                      </div>
                      <div className="flex flex-row items-center w-[33%]">
                        <div
                          className={cn(
                            "w-[2rem] h-3 bg-gradient-to-r from-green-500 to-green-600 arrow-clip-out-back",
                            (!currentLocation ||
                              !trackInfo.container.reachedLocalWarehouse) &&
                              "bg-gradient-to-r from-gray-300 to-gray-400"
                          )}
                        ></div>
                        <div
                          className={cn(
                            "w-full h-3 bg-gradient-to-r from-green-500 to-green-600 relative -ml-1 before:content-[''] before:absolute before:w-3 before:h-6 before:bg-gradient-to-r before:from-green-500 before:to-green-600 before:right-0 before:rounded-tr-xl rounded-tr-xl",
                            (!currentLocation ||
                              !trackInfo.container.reachedLocalWarehouse) &&
                              "bg-gradient-to-r from-gray-300 to-gray-400 before:bg-gradient-to-r before:from-gray-300 before:to-gray-400"
                          )}
                        ></div>
                      </div>
                    </div>

                    <div className="w-full flex justify-end">
                      <p className="text-gray-900 text-[14px] sm:text-sm text-right flex items-center space-x-2">
                        <span className="font-semibold">Destination:</span>
                        <div className="flex items-center space-x-2 bg-white px-3 py-1 rounded-md border border-gray-100">
                          <Image
                            src={
                              (trackInfo.container.to?.flag as string) ||
                              "/placeholder.svg"
                            }
                            alt={trackInfo.container.to?.name as string}
                            width={24}
                            height={24}
                            className="rounded-sm"
                          />
                          <span className="font-medium">
                            {trackInfo.container.to?.name}
                          </span>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 z-[99]">
                  <ClientInfo shipment={trackInfo} />
                </div>
                <div className="z-[99]">
                  {Boolean((trackInfo as ShipmentsQuerierType)?.shipments) && (
                    <ShipmentInfo
                      shipment={trackInfo as ShipmentsQuerierType}
                    />
                  )}
                </div>
                <div className="z-[99]">
                  {Boolean((trackInfo as ShipmentsQuerierType)?.shipments) && (
                    <ShipmentCargoInfo cargoInfo={trackInfo.container} />
                  )}
                </div>
                <div className="z-[99]">
                  {agent && <AgentDetails agent={agent} />}
                </div>
                <div className="z-[99]">
                  <ShipmentUpdates trackInfo={trackInfo} tckFor={tckFor} />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mx-4 mb-8">
          <Faq qArray={FAQS_LIST} />
        </div>
      </div>
    </div>
  );
};

export default Page;

//  onClick={() => {
//                 setSearchableTracking(tracking?.trim() || "");
//               }}
