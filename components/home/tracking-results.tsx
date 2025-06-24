"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Package, Clock, MapPin } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface TrackingInfo {
  trackingNumber: string;
  agent: string;
  status: string;
  location: string;
  estimatedDelivery: string;
  progress: number;
}

interface TrackingResultsProps {
  trackingNumber: string;
  agent: string;
}

export function TrackingResults({
  trackingNumber,
  agent,
}: TrackingResultsProps) {
  const [trackingInfo, setTrackingInfo] = useState<TrackingInfo | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (trackingNumber && agent) {
      setLoading(true);

      setTimeout(() => {
        setTrackingInfo({
          trackingNumber: trackingNumber,
          agent: agent,
          status: "In Transit",
          location: "Distribution Center, Frankfurt",
          estimatedDelivery: "June 10, 2025",
          progress: 65,
        });

        setLoading(false);
      }, 1000);
    }
  }, [trackingNumber, agent]);

  if (loading) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        <p className="mt-4 text-white/80">Loading tracking information...</p>
      </div>
    );
  }

  if (!trackingInfo) {
    return null;
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 space-y-4 md:space-y-0">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            Tracking Details
          </h3>
          <p className="text-white/70 font-mono text-sm md:text-base">
            #{trackingInfo.trackingNumber}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          {trackingInfo.agent !== "unknown" && (
            <div className="bg-white/20 rounded-lg p-3 h-12 w-12 md:h-16 md:w-16 flex items-center justify-center">
              <Image
                src={`/images/${trackingInfo.agent}-logo.png`}
                alt={`${trackingInfo.agent} logo`}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          )}
          <div className="text-left md:text-right">
            <p className="text-sm text-white/70">Carrier</p>
            <p className="font-semibold text-white capitalize">
              {trackingInfo.agent}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="flex items-center space-x-4 p-4 bg-blue-900/30 rounded-lg">
          <div className="bg-blue-600 p-3 rounded-full">
            <Package className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-white/70">Status</p>
            <p className="font-semibold text-white text-sm md:text-base">
              {trackingInfo.status}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-blue-900/30 rounded-lg">
          <div className="bg-blue-600 p-3 rounded-full">
            <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-white/70">Current Location</p>
            <p className="font-semibold text-white text-sm md:text-base">
              {trackingInfo.location}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-blue-900/30 rounded-lg">
          <div className="bg-blue-600 p-3 rounded-full">
            <Clock className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-white/70">Estimated Delivery</p>
            <p className="font-semibold text-white text-sm md:text-base">
              {trackingInfo.estimatedDelivery}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between text-sm text-white/70">
          <span className="font-medium">Shipped</span>
          <span className="font-medium">In Transit</span>
          <span className="font-medium">Delivered</span>
        </div>
        <Progress value={trackingInfo.progress} className="h-3" />
        <div className="text-center">
          <span className="text-sm text-white/70">
            {trackingInfo.progress}% Complete
          </span>
        </div>
      </div>
    </div>
  );
}
