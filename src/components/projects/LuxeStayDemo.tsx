"use client";

import React, { useState } from "react";
import { Search, Calendar, Users, Star, MapPin, CheckCircle, ShieldCheck, X } from "lucide-react";

interface Property {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  image: string;
  amenities: string[];
}

const properties: Property[] = [
  {
    id: "prop-1",
    name: "The Grand Horizon Sanctuary",
    location: "Swiss Alps, Switzerland",
    pricePerNight: 850,
    rating: 4.98,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    amenities: ["Private Infinity Pool", "Helipad Access", "Spa & Wellness", "Private Chef"],
  },
  {
    id: "prop-2",
    name: "Azure Coastline Villa",
    location: "Amalfi Coast, Italy",
    pricePerNight: 920,
    rating: 4.96,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    amenities: ["Private Beach Access", "Wine Cellar", "Oceanfront Terrace", "Concierge"],
  },
];

export const LuxeStayDemo: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [nights, setNights] = useState<number>(3);
  const [guests, setGuests] = useState<number>(2);
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<string>("All Destinations");

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  return (
    <div className="w-full bg-[#121215] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Header */}
      <div className="bg-[#18181b] border-b border-white/10 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              LuxeStay Discovery Experience
              <span className="px-2 py-0.5 text-[10px] font-mono bg-teal-500/10 border border-teal-500/30 text-teal-300 rounded">
                HOSPITALITY DEMO
              </span>
            </h3>
          </div>
        </div>
        <div className="text-xs font-mono text-slate-400">
          Curated Luxury Properties
        </div>
      </div>

      {/* Filter Bar */}
      <div className="p-4 bg-[#0c0c0e] border-b border-white/5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-slate-400">Location:</span>
          {["All Destinations", "Switzerland", "Italy"].map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveFilter(loc)}
              className={`px-3 py-1 rounded-full transition-colors ${
                activeFilter === loc
                  ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                  : "bg-white/5 text-slate-400 hover:text-white"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-teal-400" /> 3 Nights
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-teal-400" /> 2 Guests
          </span>
        </div>
      </div>

      {/* Properties Cards Grid */}
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#121215]">
        {properties.map((prop) => (
          <div
            key={prop.id}
            className="group rounded-xl bg-[#0c0c0e] border border-white/10 overflow-hidden hover:border-teal-500/40 transition-all flex flex-col justify-between"
          >
            {/* Image Header */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#18181b]">
              <img
                src={prop.image}
                alt={prop.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#09090b]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-white flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>{prop.rating}</span>
                <span className="text-slate-400">({prop.reviews})</span>
              </div>
            </div>

            {/* Property Body Details */}
            <div className="p-4 space-y-3">
              <div>
                <h4 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                  {prop.name}
                </h4>
                <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-teal-400" /> {prop.location}
                </p>
              </div>

              {/* Amenities Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {prop.amenities.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 border border-white/5 text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Price & Booking Trigger */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-white font-mono">${prop.pricePerNight}</span>
                  <span className="text-xs text-slate-400 font-mono"> / night</span>
                </div>

                <button
                  onClick={() => {
                    setSelectedProperty(prop);
                    setIsBooked(false);
                  }}
                  className="px-4 py-1.5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-mono text-xs font-semibold rounded-lg transition-colors"
                >
                  Reserve Stay →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reservation Sandbox Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121215] border border-white/10 rounded-2xl max-w-md w-full p-6 space-y-5 relative shadow-2xl">
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {!isBooked ? (
              <form onSubmit={handleBook} className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-teal-400 uppercase">SANDBOX CHECKOUT</span>
                  <h3 className="text-lg font-bold text-white">{selectedProperty.name}</h3>
                  <p className="text-xs text-slate-400">{selectedProperty.location}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3 bg-[#18181b] rounded-xl border border-white/5 text-xs font-mono">
                  <div>
                    <label className="text-slate-400 block mb-1">NIGHTS</label>
                    <select
                      value={nights}
                      onChange={(e) => setNights(Number(e.target.value))}
                      className="w-full bg-[#09090b] border border-white/10 rounded p-1.5 text-white"
                    >
                      {[1, 2, 3, 4, 5, 7].map((n) => (
                        <option key={n} value={n}>
                          {n} Night{n > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">GUESTS</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-[#09090b] border border-white/10 rounded p-1.5 text-white"
                    >
                      {[1, 2, 3, 4].map((g) => (
                        <option key={g} value={g}>
                          {g} Guest{g > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="p-3 bg-white/5 rounded-xl space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between text-slate-300">
                    <span>${selectedProperty.pricePerNight} × {nights} nights</span>
                    <span>${selectedProperty.pricePerNight * nights}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Cleaning & Resort Fee</span>
                    <span>$120</span>
                  </div>
                  <div className="flex justify-between font-bold text-white pt-2 border-t border-white/10 text-sm">
                    <span>Total Estimate</span>
                    <span className="text-teal-400">${selectedProperty.pricePerNight * nights + 120}</span>
                  </div>
                </div>

                <div className="p-2.5 bg-teal-500/10 border border-teal-500/20 rounded-lg flex items-center gap-2 text-[11px] text-teal-300 font-mono">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Sandbox Reservation — No real payment requested.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-teal-400 hover:bg-teal-300 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-teal-500/20"
                >
                  Confirm Reservation Sandbox ↗
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Reservation Confirmed!</h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-xs mx-auto">
                    Your sandbox booking request for <span className="text-white font-semibold">{selectedProperty.name}</span> has been processed.
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-xs rounded-lg transition-colors"
                >
                  Close Demo Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
