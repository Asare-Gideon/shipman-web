"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MapPin, Calendar, Truck } from "lucide-react";
import { countries } from "@/lib/countries";
import { shippingAgents } from "@/lib/shipping-agents";

export function FindPackageForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    trackingNumber: "",
    shippingAgent: "",
    date: "",
    fromCountry: "",
    toCountry: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log("Finding package with data:", formData);
      setIsLoading(false);
      alert(
        "Search request submitted. Our team will contact you with updates."
      );
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Search className="h-4 w-4 text-gray-500" />
              <label className="text-sm font-medium text-gray-700">
                Tracking Number
              </label>
            </div>
            <Input
              value={formData.trackingNumber}
              onChange={(e) => handleChange("trackingNumber", e.target.value)}
              placeholder="Enter tracking number"
              className="h-12 border-gray-300 focus:border-[#17affa]"
            />
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Truck className="h-4 w-4 text-gray-500" />
              <label className="text-sm font-medium text-gray-700">
                Shipping Agent
              </label>
            </div>
            <Select
              value={formData.shippingAgent}
              onValueChange={(value) => handleChange("shippingAgent", value)}
            >
              <SelectTrigger className="h-12 border-gray-300">
                <SelectValue placeholder="Select agent" />
              </SelectTrigger>
              <SelectContent>
                {shippingAgents.map((agent) => (
                  <SelectItem key={agent.value} value={agent.value}>
                    {agent.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <label className="text-sm font-medium text-gray-700">Date</label>
            </div>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className="h-12 border-gray-300 focus:border-[#17affa]"
            />
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <label className="text-sm font-medium text-gray-700">From</label>
            </div>
            <Select
              value={formData.fromCountry}
              onValueChange={(value) => handleChange("fromCountry", value)}
            >
              <SelectTrigger className="h-12 border-gray-300">
                <SelectValue placeholder="Origin" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <label className="text-sm font-medium text-gray-700">To</label>
            </div>
            <div className="flex gap-2">
              <Select
                value={formData.toCountry}
                onValueChange={(value) => handleChange("toCountry", value)}
              >
                <SelectTrigger className="h-12 border-gray-300 flex-1">
                  <SelectValue placeholder="Destination" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                type="submit"
                disabled={isLoading}
                className="h-12 px-6 bg-[#17affa] hover:bg-[#17affa] text-white font-medium rounded-lg"
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
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
                ) : (
                  <Search className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
