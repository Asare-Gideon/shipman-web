"use client";

import type {
  ShipmentsQuerierType,
  ShipmentType,
} from "@/common/types/common.types";
import { Mail, Phone, MapPin, User } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ClientInfoProps {
  shipment: ShipmentsQuerierType | ShipmentType;
}

export default function ClientInfo({ shipment }: ClientInfoProps) {
  const client = shipment?.user;

  return (
    <div className="border-t border-b border-gray-200 mt-4">
      <Accordion type="single" collapsible className="w-full border-none">
        <AccordionItem value="client-info" className="border-none">
          <AccordionTrigger className="px-6 py-4 hover:no-underline !border-r-0 !border-l-0">
            <span className="text-base text-gray-900 font-semibold">
              Client Info
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pt-2 pb-6 md:pl-8">
            <div className="mt-2 bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-4 space-y-4">
                {/* Shipping Mark */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-500 text-sm font-medium mb-1">
                      Shipping Mark
                    </h3>
                    <p className="text-gray-900 font-semibold">
                      {client?.shippingMark || "N/A"}
                    </p>
                  </div>
                </div>

                {/* Name */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-500 text-sm font-medium mb-1">
                      Name
                    </h3>
                    <p className="text-gray-900 font-semibold">
                      {client?.allnames ||
                        `${client?.firstname} ${client?.lastname}` ||
                        "N/A"}
                    </p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-500 text-sm font-medium mb-1">
                      Phone Number
                    </h3>
                    <p className="text-gray-900 font-semibold">
                      {client?.phoneNumber || "N/A"}
                    </p>
                  </div>
                </div>

                {/* Email */}
                {client?.email && (
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-4 w-4 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-500 text-sm font-medium mb-1">
                        Email
                      </h3>
                      <p className="text-gray-900 font-semibold">
                        <a
                          href={`mailto:${client.email}`}
                          className="hover:underline text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          {client.email}
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                {/* Country and State */}
                {(client?.country || client?.countryState) && (
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-teal-600" />
                    </div>
                    <div className="flex-1 space-y-3">
                      {client?.country && (
                        <div>
                          <h3 className="text-gray-500 text-sm font-medium mb-1">
                            Country
                          </h3>
                          <p className="text-gray-900 font-semibold">
                            {client.country?.name || ""}
                          </p>
                        </div>
                      )}

                      {client?.countryState && (
                        <div>
                          <h3 className="text-gray-500 text-sm font-medium mb-1">
                            State/Region
                          </h3>
                          <p className="text-gray-900 font-semibold">
                            {client.countryState?.name || ""}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
