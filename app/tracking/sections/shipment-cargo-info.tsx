import type { ContainerType } from "@/common/types/common.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plane, Ship, Calendar, DollarSign, TrendingUp } from "lucide-react";

interface ShipmentCargoInfoProps {
  cargoInfo: ContainerType;
}

function formatDate(date?: Date | string) {
  if (!date) return "N/A";
  const d = typeof date === "string" ? new Date(date) : date;
  if (isNaN(d.getTime())) return "N/A";
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const ShipmentCargoInfo = ({ cargoInfo }: ShipmentCargoInfoProps) => {
  return (
    <div className="border-t border-b border-gray-200 mt-4">
      <Accordion type="single" collapsible className="w-full border-none">
        <AccordionItem value="cargo-info" className="border-none">
          <AccordionTrigger className="px-6 py-4 hover:no-underline !border-r-0 !border-l-0">
            <span className="text-base text-gray-900 font-semibold">
              Shipment Cargo Info
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pt-2 pb-6 md:pl-8">
            <div className="mt-2 bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-4 space-y-4">
                {/* Cargo Route */}
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        cargoInfo.isAir ? "bg-blue-100" : "bg-cyan-100"
                      }`}
                    >
                      {cargoInfo.isAir ? (
                        <Plane className="h-4 w-4 text-blue-600" />
                      ) : (
                        <Ship className="h-4 w-4 text-cyan-600" />
                      )}
                    </div>
                    <h3 className="text-gray-500 text-sm font-medium">
                      Cargo Route
                    </h3>
                  </div>
                  <p className="text-gray-900 font-semibold">
                    {cargoInfo.isAir ? "Air" : "Sea"}
                  </p>
                </div>

                {/* Loading Date */}
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-green-600" />
                    </div>
                    <h3 className="text-gray-500 text-sm font-medium">
                      Loading Date
                    </h3>
                  </div>
                  <p className="text-gray-900 font-semibold">
                    {formatDate(cargoInfo.loadingDate)}
                  </p>
                </div>

                {/* ETA */}
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-purple-600" />
                    </div>
                    <h3 className="text-gray-500 text-sm font-medium">ETA</h3>
                  </div>
                  <p className="text-gray-900 font-semibold">
                    {formatDate(cargoInfo.eta)}
                  </p>
                </div>

                {/* Rate */}
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-orange-600" />
                    </div>
                    <h3 className="text-gray-500 text-sm font-medium">Rate</h3>
                  </div>
                  <p className="text-gray-900 font-semibold">
                    {cargoInfo.rate
                      ? `$${cargoInfo.rate.toLocaleString()}/${
                          cargoInfo.isAir ? "1kg" : "1cbm"
                        }`
                      : "N/A"}
                  </p>
                </div>

                {/* Dollar Rate */}
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-4 w-4 text-yellow-600" />
                    </div>
                    <h3 className="text-gray-500 text-sm font-medium">
                      Dollar Rate
                    </h3>
                  </div>
                  <p className="text-gray-900 font-semibold">
                    {cargoInfo.dollarRate
                      ? `₵${cargoInfo.dollarRate.toLocaleString()}`
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ShipmentCargoInfo;
