"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ShipmentTimeline from "./shipment-timeline";
import type {
  ShipmentsQuerierType,
  ShipmentType,
} from "@/common/types/common.types";
import moment from "moment";
import { TrackKindEnum } from "@/features/track/trackApi";

export default function ShipmentUpdates({
  trackInfo,
  tckFor,
}: {
  trackInfo: ShipmentsQuerierType | ShipmentType;
  tckFor: TrackKindEnum;
}) {
  const currentLocation = trackInfo.container.routes?.find(
    (route) => route.isCurrent
  );
  const events = (trackInfo.container.routes || [])
    ?.filter((route) => !!currentLocation && route.indx <= currentLocation.indx)
    .slice()
    .sort((a, b) => b.indx - a.indx)
    .map((route) => ({
      date: route.reachedOn
        ? moment.utc(route.reachedOn).format("dddd MMMM DD, YYYY")
        : "",
      time: route.reachedOn ? moment.utc(route.reachedOn).format("h:mm a") : "",
      status: route.location.name,
      location: `${trackInfo.container.from?.name} - ${trackInfo.container.to?.name}`,
      pieceId: `${trackInfo.tracking}`,
      pieces:
        tckFor === TrackKindEnum.CONTAINER_TRACKING
          ? (trackInfo as ShipmentsQuerierType).shipments.reduce(
              (p, c) =>
                p + (c.confirmedCalcQuantity || c.calcQuantity || c.quantity),
              0
            )
          : (trackInfo as ShipmentType).confirmedCalcQuantity ||
            (trackInfo as ShipmentType).calcQuantity ||
            (trackInfo as ShipmentType).quantity,
    }));
  return (
    <div className="border-t border-b border-gray-200 mt-4">
      <Accordion type="single" collapsible className="w-full border-none">
        <AccordionItem value="updates" className="border-none">
          <AccordionTrigger className="px-6 py-4 hover:no-underline  !border-r-0 !border-l-0">
            <span className="text-base text-gray-900 font-semibold">
              Shipment Location Update
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pt-2 pb-6 md:pl-8">
            <ShipmentTimeline events={events} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
