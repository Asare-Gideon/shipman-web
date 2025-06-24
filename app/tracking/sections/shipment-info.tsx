"use client";

import { useState } from "react";
import type { ShipmentsQuerierType } from "@/common/types/common.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ShipmentInfoProps {
  shipment: ShipmentsQuerierType;
}

export default function ShipmentInfo({ shipment }: ShipmentInfoProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalQuantity = shipment.shipments.reduce(
    (sum, item) =>
      sum +
      (item.confirmedCalcQuantity || item.calcQuantity || item.quantity || 0),
    0
  );

  const totalCBMOrKG = shipment.container.isAir
    ? shipment.shipments.reduce((sum, item) => sum + (item.weight || 0), 0)
    : shipment.shipments.reduce(
        (sum, item) => sum + (item.confirmedCbm || item.cbm || 0),
        0
      );

  // Calculate paginated data
  const totalPages = Math.ceil(shipment.shipments.length / itemsPerPage);
  const paginatedShipments = shipment.shipments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="border-t border-b border-gray-200 mt-4">
      <Accordion type="single" collapsible className="w-full border-none">
        <AccordionItem value="shipment-info" className="border-none">
          <AccordionTrigger className="px-6 py-4 hover:no-underline !border-r-0 !border-l-0">
            <span className="text-base text-gray-900 font-semibold">
              Shipment Info
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pt-2 pb-6 md:pl-8">
            <div className="mt-2">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex flex-col items-center justify-center">
                  <h3 className="text-gray-600 mb-2 text-sm font-medium">
                    Total Quantity
                  </h3>
                  <p className="text-3xl font-bold text-blue-600">
                    {totalQuantity}
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex flex-col items-center justify-center">
                  <h3 className="text-gray-600 mb-2 text-sm font-medium">
                    {shipment.container.isAir ? "Total KG" : "Total CBM"}
                  </h3>
                  <p className="text-3xl font-bold text-green-600">
                    {shipment.container.isAir
                      ? totalCBMOrKG.toFixed(2)
                      : totalCBMOrKG.toFixed(3)}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="grid grid-cols-3 bg-gray-50 p-3 border-b border-gray-200">
                  <div className="font-semibold text-gray-900">Supply Tck</div>
                  <div className="font-semibold text-gray-900 text-center">
                    Quantity
                  </div>
                  <div className="font-semibold text-gray-900 text-center">
                    {shipment.container.isAir ? "Weight (KG)" : "CBM"}
                  </div>
                </div>

                {paginatedShipments.map((supply, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 p-3 border-b border-gray-100 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium">{supply.supplyTracking}</div>
                    <div className="text-center">{supply.quantity}</div>
                    <div className="text-center">
                      {shipment.container.isAir
                        ? (supply.weight || 0).toFixed(2)
                        : supply.cbm.toFixed(3)}
                    </div>
                  </div>
                ))}

                <div className="flex items-center justify-between p-3 bg-gray-50 border-t border-gray-200">
                  <button
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      currentPage === 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                    }`}
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <div className="text-gray-700 text-sm font-medium">
                    Page {currentPage} of {totalPages}
                  </div>
                  <button
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      currentPage === totalPages
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                    }`}
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
