"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Package } from "lucide-react";
import { useRouter } from "next/navigation";

export function TrackingForm() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setIsLoading(true);

    setTimeout(() => {
      const detectedAgent = detectShippingAgent(trackingNumber);
      router.push(`?tracking=${trackingNumber}&agent=${detectedAgent}`);
      setIsLoading(false);
    }, 1000);
  };

  const detectShippingAgent = (trackingNumber: string): string => {
    if (trackingNumber.startsWith("1Z")) return "ups";
    if (trackingNumber.match(/^[0-9]{12}$/)) return "fedex";
    if (trackingNumber.startsWith("DHL")) return "dhl";
    return "unknown";
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <Package className="h-5 w-5 text-gray-500" />
              <label
                htmlFor="tracking"
                className="text-sm font-medium text-gray-700"
              >
                Tracking Number
              </label>
            </div>
            <Input
              id="tracking"
              type="text"
              placeholder="Enter your tracking number (e.g., 1Z999AA10123456784)"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="h-12 text-lg border-gray-300 focus:border-[#17affa] focus:ring-[#17affa]"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="h-12 px-8 bg-[#17affa] hover:bg-[#17affa] text-white font-medium rounded-lg"
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Tracking...
              </span>
            ) : (
              <span className="flex items-center">
                <Search className="mr-2 h-5 w-5" />
                Track Package
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
