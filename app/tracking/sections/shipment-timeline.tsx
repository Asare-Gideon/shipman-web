import { CheckCircle2, CircleChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineEvent {
  date: string;
  time: string;
  status: string;
  location: string;
  pieceId: string;
  pieces: number;
  isDelivered?: boolean;
}

interface ShipmentTimelineProps {
  events: TimelineEvent[];
}

export default function ShipmentTimeline({ events }: ShipmentTimelineProps) {
  return (
    <div className="space-y-4 text-gray-900">
      {events.map((event, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row md:gap-8 relative pl-8 md:pl-0"
        >
          {/* Date and Time Column - Left side on desktop */}
          <div className="flex md:w-48 md:flex-col order-2 md:order-1">
            <div className="text-sm font-medium text-gray-900">
              {event.date}
            </div>
            <div className="text-sm koho-L text-gray-600 ml-2 md:ml-0">
              {event.time}
            </div>
          </div>

          {/* Icon and Line Column */}
          <div className="flex flex-col items-center order-1 md:order-2 absolute left-0 md:relative">
            {event.isDelivered ? (
              <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            ) : (
              <CircleChevronUp className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600" />
            )}
            {index !== events.length - 1 && (
              <div className="w-px absolute h-[calc(100%+5rem)] sm:h-[85%] bg-gray-300 top-7" />
            )}
          </div>

          {/* Content Column - Right side */}
          <div className="flex-1 pb-4 ml-4 md:ml-0 order-3">
            <div
              className={cn(
                "mt-2",
                event.isDelivered && "text-green-600 font-medium koho-B"
              )}
            >
              {event.status}
            </div>
            <div className="text-sm text-gray-600 koho-L">{event.location}</div>
            <div className="text-sm text-gray-600 koho-L">
              {event.pieces} Piece(s) ID:{" "}
              <span className="text-red-600 koho-L">{event.pieceId}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
