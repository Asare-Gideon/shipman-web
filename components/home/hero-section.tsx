"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Search, Package, ScanSearch } from "lucide-react";
import GlobeVisualizer from "../globe/globe";
import { TrackingResults } from "./tracking-results";
import Image from "next/image";
import AgentSelect from "../ui/agent_select";
import DatePicker from "../ui/date_picker";
import CountrySelect from "../ui/country_select";

// Enum for tracking types
enum TrackKindEnum {
  ITEM_TRACKING = "ITEM_TRACKING",
  CONTAINER_TRACKING = "CONTAINER_TRACKING",
}

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("track");
  const [trackingType, setTrackingType] = useState<TrackKindEnum>(
    TrackKindEnum.ITEM_TRACKING
  );
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [detectedAgent, setDetectedAgent] = useState<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    supplyTracking: "",
    assignedTracking: "",
    agent: "",
    sentOn: "",
    fromCountry: "",
    toCountry: "",
  });

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20 md:py-0 overflow-hidden">
      {/* Globe Background */}
      <div className="absolute inset-0 z-0">
        <GlobeVisualizer />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-[3.5rem] header-title font-bold text-black mb-4 leading-tight">
            Enjoy digital solutions from <br /> shipping agents worldwide
          </h1>
          <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto px-4">
            Multi-agent logistics platform with real-time tracking across the
            globe
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-6 md:mb-8 px-4">
          <div className="bg-white border border-gray-200 rounded-xl p-2 inline-flex w-full max-w-3xl shadow-sm relative overflow-hidden">
            {/* Animated background for active tab */}
            <div
              className="absolute h-[calc(100%-0.5rem)] top-1 transition-all duration-300 ease-out bg-blue-600 rounded-lg"
              style={{
                left:
                  activeTab === "track"
                    ? "0.25rem"
                    : activeTab === "find"
                    ? "calc(33.333% + 0.125rem)"
                    : "calc(66.666% + 0.125rem)",
                width: "calc(33.333% - 0.25rem)",
              }}
            />

            <button
              onClick={() => {
                setActiveTab("track");
                setTrackingType(TrackKindEnum.ITEM_TRACKING);
              }}
              className={`flex-1 px-2 sm:px-4 py-2.5 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm whitespace-nowrap flex items-center justify-center z-10 ${
                activeTab === "track"
                  ? "text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <Package
                className={`h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 ${
                  activeTab === "track" ? "text-white" : "text-gray-500"
                }`}
              />
              <span className="hidden sm:inline">TRACKING</span>
              <span className="sm:hidden">TRACK</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("find");
                setTrackingType(TrackKindEnum.CONTAINER_TRACKING);
              }}
              className={`flex-1 px-2 sm:px-4 py-2.5 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm whitespace-nowrap flex items-center justify-center z-10 ${
                activeTab === "find"
                  ? "text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <Search
                className={`h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 ${
                  activeTab === "find" ? "text-white" : "text-gray-500"
                }`}
              />
              <span className="hidden sm:inline">FIND PACKAGE</span>
              <span className="sm:hidden">FIND</span>
            </button>
            <button
              onClick={() => setActiveTab("quote")}
              className={`flex-1 px-2 sm:px-4 py-2.5 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm whitespace-nowrap flex items-center justify-center z-10 ${
                activeTab === "quote"
                  ? "text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 ${
                  activeTab === "quote" ? "text-white" : "text-gray-500"
                }`}
              >
                <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
              </svg>
              <span className="hidden sm:inline">QUOTE</span>
              <span className="sm:hidden">QUOTE</span>
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-transparent  ">
          {/* Item Tracking Form */}
          <div className="md:bg-white md:shadow-md md:h-[4rem] relative flex items-center lg:w-full md:rounded-xl">
            {activeTab === "find" && (
              <div className="flex flex-col md:flex-row items-center w-full h-[3.8rem] cursor-pointer ">
                <div className="flex items-center rounded-lg md:rounded-none bg-white md:bg-transparent shadow-sm md:shadow-none w-full md:w-[25%] relative md:-ml-2 md:overflow-hidden md:pl-1 h-full">
                  <ScanSearch size={20} className="absolute left-4" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Supplier Tracking Number"
                    value={form.supplyTracking}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        supplyTracking: e.target.value,
                      });
                    }}
                    className="py-4 md:py-[14px] koho-M placeholder:text-gray-800 text-gray-800 w-full font-[500] md:ml-2 placeholder:text-sm text-sm Koho-L pl-10 outline-none active:border-1 focus:border-2 rounded-lg focus:ring-primary focus:border-primary"
                  />
                </div>
                <div className="h-[70%] hidden md:block w-[2px] mx-3 my-auto bg-white"></div>
                <div className="w-full bg-white md:bg-transparent shadow-sm md:shadow-none mt-3 md:mt-0 py-2 md:py-0 rounded-lg md:rounded-none md:w-[20%] h-full flex items-center relative">
                  <AgentSelect
                    value={form.agent}
                    setValue={(val) => {
                      setForm({ ...form, agent: val });
                    }}
                  />
                </div>
                <div className="h-[70%] hidden md:block w-[2px] mx-3 my-auto bg-white"></div>
                <div className="w-full bg-white md:bg-transparent shadow-sm md:shadow-none mt-3 md:mt-0 py-2 md:py-0 rounded-lg md:rounded-none md:w-[20%] h-full flex items-center relative">
                  <DatePicker
                    date={form.sentOn ? new Date(form.sentOn) : undefined}
                    setDate={(date) => {
                      setForm({
                        ...form,
                        sentOn: date?.toString() || "",
                      });
                    }}
                    placeholder="Package sent on"
                  />
                </div>
                <div className="h-[70%] hidden md:block w-[2px] mx-3 my-auto bg-white"></div>
                <div className="w-full bg-white md:bg-transparent py-2 md:py-0 shadow-sm md:shadow-none rounded-lg md:rounded-none mt-3 md:mt-0 md:w-[20%] h-full flex items-center relative">
                  <CountrySelect
                    label="From: Select country"
                    value={form.fromCountry}
                    setValue={(val) => {
                      setForm({ ...form, fromCountry: val });
                    }}
                  />
                </div>
                <div className="h-[70%] w-[2px] hidden md:block mx-3 my-auto bg-white"></div>
                <div className="w-full bg-white md:bg-transparent py-2 md:py-0 shadow-sm md:shadow-none rounded-lg md:rounded-none mt-3 md:mt-0 md:w-[20%] h-full flex items-center relative">
                  <CountrySelect
                    label="To: Select country"
                    value={form.toCountry}
                    setValue={(val) => {
                      setForm({ ...form, toCountry: val });
                    }}
                  />
                </div>
                <div className="w-full md:w-[10%] h-full flex justify-end mt-6 md:mt-0">
                  <button
                    onClick={() => {
                      // Handle tracking search
                      setIsLoading(true);
                      setTimeout(() => {
                        setShowResults(true);
                        setIsLoading(false);
                      }, 1000);
                    }}
                    className="md:bg-gray-800 bg-blue-600 flex items-center justify-center md:mt-0 py-3.5 md:py-3 w-full md:w-auto outline-none text-white px-5 rounded-lg md:rounded-l-xl md:rounded-r-lg h-full"
                  >
                    <Search className="h-4 w-4" />
                    <span className="ml-2 md:hidden">Search</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === "track" && (
              <div className="flex flex-col md:flex-row items-center w-full">
                <div className="flex bg-white shadow-sm md:shadow-none rounded-lg md:bg-transparent items-center w-full sm:w-[90%] md:w-[65%] relative -ml-2 md:overflow-hidden md:pl-1 h-full">
                  <ScanSearch
                    size={20}
                    className="absolute left-4 text-black opacity-60"
                  />
                  <input
                    ref={inputRef2}
                    type="text"
                    placeholder="Enter Tracking Number"
                    value={form.assignedTracking}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        assignedTracking: e.target.value,
                      });
                    }}
                    className="py-4 md:py-[17px] placeholder:text-gray-800 w-full font-[300] md:ml-2 placeholder:text-sm text-sm Koho-L pl-10 outline-none active:border-1 focus:border-2 rounded-lg focus:ring-primary focus:border-primary"
                  />
                </div>
                <div className="h-[70%] w-[2px] hidden md:block mx-3 my-auto bg-gray-200"></div>
                <div className="w-full sm:w-[90%] bg-white md:bg-transparent py-3 md:py-0 rounded-md md:rounded-none shadow-sm mt-3 md:mt-0 pl-2 md:pl-0 md:shadow-none md:w-[30%] h-full flex items-center relative">
                  <div className="flex items-center">
                    {detectedAgent?.logo ? (
                      <Image
                        src={detectedAgent?.smallLogo || ""}
                        height={20}
                        width={20}
                        alt="img"
                      />
                    ) : (
                      <Image
                        src={"/images/detect2.png"}
                        height={20}
                        width={20}
                        alt="img"
                      />
                    )}
                    <h3 className="text-sm md:text-md ml-3 opacity-60">
                      {detectedAgent
                        ? detectedAgent.companyName
                        : "Auto Detect"}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => {
                    // Handle find package search
                    setIsLoading(true);
                    setTimeout(() => {
                      setShowResults(true);
                      setIsLoading(false);
                    }, 1000);
                  }}
                  className="md:bg-blue-600 bg-blue-600 flex items-center justify-center w-full md:w-auto mt-5 md:mt-0 h-[3.7rem] md:py-0 outline-none text-white px-5 rounded-l-xl rounded-r-lg"
                >
                  <Search className="mr-2 md:mr-0" />
                  <span className="md:hidden">Find</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Results Section */}
        {showResults && (
          <div className="mt-8">
            <TrackingResults
              trackingNumber={form.supplyTracking || form.assignedTracking}
              agent={form.agent || "auto"}
            />
          </div>
        )}
      </div>
    </section>
  );
}
