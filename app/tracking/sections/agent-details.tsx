"use client";

import Image from "next/image";
import type { AgentInfoType } from "@/features/agents/agentsApi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AgentDetailsProps {
  agent: AgentInfoType;
}

export default function AgentDetails({ agent }: AgentDetailsProps) {
  return (
    <div className="border-t border-b border-gray-200 mt-4">
      <Accordion type="single" collapsible className="w-full border-none">
        <AccordionItem value="agent-details" className="border-none">
          <AccordionTrigger className="px-6 py-4 hover:no-underline !border-r-0 !border-l-0">
            <span className="text-base text-gray-900 font-semibold">
              Shipping Agent Details
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pt-2 pb-6 md:pl-8">
            <div className="mt-2 flex items-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
              {/* Agent Logo */}
              <div className="bg-white p-3 rounded-lg mr-4 border border-gray-200 shadow-sm">
                <div className="relative w-12 h-12">
                  <Image
                    src={agent.smallLogo || ""}
                    alt={`${agent.companyName} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Agent Details */}
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {agent.companyName}
                </h3>
                {agent.address && (
                  <p className="text-gray-600 mb-1 text-sm">{agent.address}</p>
                )}
                {agent.phoneNumbers && agent.phoneNumbers.length > 0 && (
                  <p className="text-gray-600 mb-1 text-sm">
                    📞 {agent.phoneNumbers.join(", ")}
                  </p>
                )}
                {agent.email && (
                  <p className="text-gray-600 mb-1 text-sm">
                    ✉️{" "}
                    <a
                      href={`mailto:${agent.email}`}
                      className="hover:underline text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {agent.email}
                    </a>
                  </p>
                )}
                {agent.website && (
                  <p className="text-gray-600 text-sm">
                    🌐{" "}
                    <a
                      href={
                        agent.website?.startsWith("http")
                          ? agent.website
                          : `https://${agent.website}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {agent.website}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
