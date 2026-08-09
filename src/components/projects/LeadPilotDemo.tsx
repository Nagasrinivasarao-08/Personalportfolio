"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, AlertTriangle, Send, RefreshCw, UserCheck, Search, Filter, ShieldAlert } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  rawInquiry: string;
  intent: "Enterprise Sales" | "Support Request" | "Pricing Inquiry" | "Spam";
  priority: "Hot" | "Warm" | "Cold";
  summary: string;
  suggestedDraft: string;
  status: "Needs Review" | "Approved & Queued" | "Replied";
}

const initialLeads: Lead[] = [
  {
    id: "lead-1",
    name: "Marcus Vance",
    email: "m.vance@apexglobal.io",
    company: "Apex Global Solutions",
    rawInquiry: "We need a custom security audit and full-stack redesign for our enterprise cloud platform by Q3. Budget is around $25,000. Can we schedule a technical scoping call this Thursday?",
    intent: "Enterprise Sales",
    priority: "Hot",
    summary: "High-value B2B redesign & security audit request with $25k budget and Q3 deadline.",
    suggestedDraft: "Hi Marcus,\n\nThanks for reaching out! Your $25k enterprise project scope aligns perfectly with our expertise in full-stack web applications and security architecture. I have availability this Thursday at 2:00 PM EST for a 30-minute scoping call.\n\nBest regards,\nNaga Srinivasa Rao",
    status: "Needs Review",
  },
  {
    id: "lead-2",
    name: "Sarah Jenkins",
    email: "sarah@nexusfintech.co",
    company: "Nexus Fintech",
    rawInquiry: "Hi Naga, we're interested in integrating AI intent classification into our customer support dashboard. Could you share your pricing models and timeline estimates?",
    intent: "Pricing Inquiry",
    priority: "Warm",
    summary: "Inquiry regarding AI intent classification integration and implementation timeline.",
    suggestedDraft: "Hi Sarah,\n\nThank you for reaching out! We build modular AI integration pipelines for customer dashboards. I can share our standard project tiers and breakdown a custom estimate for Nexus Fintech.\n\nBest regards,\nNaga Srinivasa Rao",
    status: "Needs Review",
  },
];

export const LeadPilotDemo: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [selectedLeadId, setSelectedLeadId] = useState<string>("lead-1");
  const [customInput, setCustomInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState<"pipeline" | "demo">("pipeline");

  const activeLead = leads.find((l) => l.id === selectedLeadId) || leads[0];
  const [draftContent, setDraftContent] = useState(activeLead ? activeLead.suggestedDraft : "");

  const handleSelectLead = (id: string) => {
    setSelectedLeadId(id);
    const target = leads.find((l) => l.id === id);
    if (target) setDraftContent(target.suggestedDraft);
  };

  const handleApproveDraft = () => {
    setLeads((prev) =>
      prev.map((l) => (l.id === selectedLeadId ? { ...l, status: "Approved & Queued" } : l))
    );
  };

  const handleRunCustomAI = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    setIsAnalyzing(true);
    setTimeout(() => {
      const isHot = customInput.toLowerCase().includes("budget") || customInput.toLowerCase().includes("enterprise");
      const newLead: Lead = {
        id: `lead-${Date.now()}`,
        name: "Incoming Client Inquiry",
        email: "client@business.com",
        company: "Direct Web Inquiry",
        rawInquiry: customInput,
        intent: isHot ? "Enterprise Sales" : "Pricing Inquiry",
        priority: isHot ? "Hot" : "Warm",
        summary: `Extracted intent: ${customInput.slice(0, 70)}...`,
        suggestedDraft: `Hi,\n\nThank you for reaching out regarding: "${customInput.slice(0, 50)}...". I have reviewed your request and would love to discuss how we can build this solution.\n\nBest regards,\nNaga Srinivasa Rao`,
        status: "Needs Review",
      };

      setLeads([newLead, ...leads]);
      setSelectedLeadId(newLead.id);
      setDraftContent(newLead.suggestedDraft);
      setCustomInput("");
      setIsAnalyzing(false);
    }, 600);
  };

  return (
    <div className="w-full bg-[#121215] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      {/* App Bar Header */}
      <div className="bg-[#18181b] border-b border-white/10 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              LeadPilot AI Platform
              <span className="px-2 py-0.5 text-[10px] font-mono bg-sky-500/10 border border-sky-500/30 text-sky-400 rounded">
                LIVE DEMO WORKSPACE
              </span>
            </h3>
          </div>
        </div>

        {/* Human Safety Protocol Note */}
        <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded text-xs text-amber-300 font-mono">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Human Review Required Prior to Sending</span>
        </div>
      </div>

      {/* Main Workspace Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Left Pane: Lead List */}
        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0c0c0e] p-4 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/5">
            <span>INCOMING LEADS ({leads.length})</span>
            <span>INTENT & PRIORITY</span>
          </div>

          <div className="space-y-2">
            {leads.map((lead) => {
              const isSelected = lead.id === selectedLeadId;
              return (
                <button
                  key={lead.id}
                  onClick={() => handleSelectLead(lead.id)}
                  className={`w-full text-left p-3 rounded-xl border transition-all ${
                    isSelected
                      ? "bg-sky-500/10 border-sky-500/40 text-white"
                      : "bg-[#18181b]/60 border-white/5 text-slate-300 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-white">{lead.name}</span>
                    <span
                      className={`px-2 py-0.5 text-[10px] font-mono rounded ${
                        lead.priority === "Hot"
                          ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                          : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                      }`}
                    >
                      {lead.priority}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 truncate mt-0.5">{lead.company}</div>
                  <div className="mt-2 text-[10px] font-mono flex items-center justify-between text-slate-400">
                    <span className="text-sky-400">{lead.intent}</span>
                    <span
                      className={
                        lead.status === "Approved & Queued" ? "text-emerald-400 font-bold" : "text-slate-400"
                      }
                    >
                      {lead.status}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Form to submit custom inquiry for instant AI classification */}
          <form onSubmit={handleRunCustomAI} className="pt-3 border-t border-white/10 space-y-2">
            <label className="text-[11px] font-mono text-slate-300 block">
              TEST YOUR OWN CUSTOM INQUIRY:
            </label>
            <textarea
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="e.g., We want an AI-powered SaaS dashboard built with Next.js..."
              rows={2}
              className="w-full bg-[#18181b] border border-white/10 rounded-lg p-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400"
            />
            <button
              type="submit"
              disabled={isAnalyzing}
              className="w-full py-1.5 px-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  Classifying Intent...
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  Analyze Inquiry with AI
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Pane: AI Analysis & Human Approval Sandbox */}
        <div className="lg:col-span-8 p-5 space-y-5 bg-[#121215] flex flex-col justify-between">
          {/* Active Lead Details & AI Insights */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
              <div>
                <h4 className="text-base font-bold text-white">{activeLead.name}</h4>
                <p className="text-xs text-slate-400">
                  {activeLead.email} · {activeLead.company}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 text-xs font-mono bg-sky-500/10 border border-sky-500/30 text-sky-300 rounded-full">
                  Intent: {activeLead.intent}
                </span>
                <span
                  className={`px-2.5 py-1 text-xs font-mono rounded-full ${
                    activeLead.priority === "Hot"
                      ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                      : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  }`}
                >
                  Priority: {activeLead.priority}
                </span>
              </div>
            </div>

            {/* Original Inquiry */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Original Customer Message:
              </label>
              <div className="p-3 rounded-lg bg-[#18181b] border border-white/5 text-xs text-slate-300 italic">
                "{activeLead.rawInquiry}"
              </div>
            </div>

            {/* AI Summary Box */}
            <div className="p-3 rounded-lg bg-sky-950/30 border border-sky-500/20 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-sky-400 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                AI Key Takeaway & Opportunity Summary
              </div>
              <p className="text-xs text-slate-200">{activeLead.summary}</p>
            </div>

            {/* AI Response Draft Sandbox */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-mono text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-sky-400" />
                  AI Suggested Response (Editable Draft):
                </label>
                <span className="text-[10px] font-mono text-slate-400">
                  Human verification active
                </span>
              </div>
              <textarea
                value={draftContent}
                onChange={(e) => setDraftContent(e.target.value)}
                rows={5}
                className="w-full bg-[#18181b] border border-white/10 rounded-xl p-3 text-xs text-slate-100 font-mono leading-relaxed focus:outline-none focus:border-sky-400"
              />
            </div>
          </div>

          {/* Action Footer Bar */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Status: {activeLead.status}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setDraftContent(activeLead.suggestedDraft)}
                className="px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                Reset Draft
              </button>
              <button
                onClick={handleApproveDraft}
                disabled={activeLead.status === "Approved & Queued"}
                className={`px-4 py-2 text-xs font-mono font-medium rounded-lg flex items-center gap-2 transition-all ${
                  activeLead.status === "Approved & Queued"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default"
                    : "bg-sky-400 hover:bg-sky-300 text-slate-950 shadow-md shadow-sky-500/20"
                }`}
              >
                {activeLead.status === "Approved & Queued" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Approved & Ready to Send
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Approve & Queue Message
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
