import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Menu, Bell, Globe } from "lucide-react";

export default function HeroSection2() {
  return (
    <div className="min-h-[75vh] bg-white">
      <div className="relative bg-gradient-to-br from-blue-600 via-[#0071fb] to-[#0071fb] overflow-hidden pb-12 md:pb-16">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
            aria-hidden
            className={[
              "pointer-events-none absolute inset-y-0 right-0 h-full",
              "w-full ",
            ].join(" ")}
          >
            <defs>
              <linearGradient id="wash" x1="30%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#0891b2" />
              </linearGradient>
            </defs>

            <path
              d="M750,0 L1200,0 L1200,800 L900,800 C990,700 1040,1000 0,10000 C1000,1220 1180,420 1050,0 Z"
              fill="url(#wash)"
              opacity="0.9"
            />
          </svg>
        </div>
        {/* Notification Banner */}
        <div className="relative z-20 max-w-7xl mx-auto px-4   md:px-6 mt-24">
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg px-3 md:px-4 py-1  md:py-3 flex items-start md:items-center text-white text-xs md:text-sm max-w-2xl">
            <Bell className="w-5 h-5 mt-1 md:w-4 md:h-4 mr-2 text-cyan-300 flex-shrink-0  md:mt-0" />
            <span className="leading-relaxed">
              Track and manage your shipments — download our importers app on
              the AppStore or PlayStore.
            </span>
          </div>
        </div>

        {/* Notification Badge */}
        <div className="relative hidden md:flex z-20 max-w-7xl mx-auto px-4 md:px-6 mt-4 md:mt-6">
          <div className="inline-flex items-center bg-cyan-400/20 backdrop-blur-sm rounded-full px-3 md:px-4 py-1 border border-cyan-300/30 max-w-full overflow-x-auto">
            <span className="bg-cyan-300 text-xs px-2 py-1 rounded-full text-slate-800 font-medium mr-2 md:mr-3 flex-shrink-0">
              Notification
            </span>
            <span className="text-white text-xs md:text-sm whitespace-nowrap">
              Suspending Settlement During the Dragon Boat Festival
            </span>
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white ml-2 flex-shrink-0" />
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-4 md:pt-8 pb-6 md:pb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
            <div className="max-w-4xl lg:max-w-2xl mb-8 lg:mb-0">
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Accessible digital
                <br />
                logistics for everyone
              </h1>

              <p className="text-base md:text-lg text-white/90 mb-8 md:mb-12 max-w-2xl leading-relaxed">
                Join Shipman and our global partners serving customers at the
                forefront of digital logistics and supply chain innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute  h-[100vh] w-full top-8 left-[13rem]  ">
          <video
            src={"/globe_video.mp4"}
            autoPlay
            loop
            muted
            className="h-full w-full"
          />
        </div>

        {/* Curved bottom edge to blue background */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            className="relative block w-full h-12 md:h-16"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C300,100 600,120 900,80 C1050,50 1150,60 1200,70 L1200,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="relative z-20 mt-[-7rem]">
        <div className="container mx-auto px-4 md:px-6 pb-8 md:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* Logistics Manager Card */}
            <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <img
                    src="/images/logistics-manager-containers.png"
                    alt="Logistics Manager"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                </div>
                <div className="w-full sm:w-1/2 p-4 md:p-6 bg-slate-800 flex flex-col justify-center">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                    LOCAL MANAGER
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Your trusted partner for fast and reliable shipping in Ghana
                  </p>
                </div>
              </div>
            </div>

            {/* Fleet Partner Card */}
            <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 ">
                  <img
                    src="/images/logistics-handshake.png"
                    alt="Fleet Partner"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                </div>
                <div className="w-full sm:w-1/2 p-4 md:p-6 bg-slate-800 flex flex-col justify-center">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                    FLEET PARTNER
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Together we make efficient logistics solutions possible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
