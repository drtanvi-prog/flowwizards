import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const TEAM_CATEGORIES = [
   {
      name: "Sales",
      desc: [
         "Automatically route and assign leads based on rules",
         "Sync deal stages and ownership across systems",
         "Trigger quote, contract, and handoff workflows"
      ]
   },
   {
      name: "RevOps/Operations",
      desc: [
         "Keep data in sync between tools in real time",
         "Standardize lifecycle stages across platforms",
         "Automate reporting and internal handoffs"
      ]
   },
   {
      name: "Marketing",
      desc: [
         "Segment contacts based on behavior or attributes",
         "Trigger campaigns and nurture sequences automatically",
         "Pass qualified leads to sales without manual steps"
      ]
   },
   {
      name: "Customer Support",
      desc: [
         "Route tickets based on priority, type, or SLA",
         "Trigger alerts and escalations automatically",
         "Sync customer data between support and CRM tools"
      ]
   },
   {
      name: "Finance",
      desc: [
         "Automate invoice creation and status updates",
         "Sync payments and records between systems",
         "Generate reports without manual reconciliation"
      ]
   },
   {
      name: "HR",
      desc: [
         "Automate onboarding and offboarding workflows",
         "Provision and revoke access automatically",
         "Trigger internal notifications and approvals"
      ]
   }
];


function TeamFAQCard({ name, desc, isOpen, onClick, color }) {
   return (
      <div
         className={`rounded-2xl border p-7 cursor-pointer transition-colors duration-300 ${color} bg-[#181212] border-[#ff4f00] w-full`}
         onClick={onClick}
      >
         <div className="flex items-start justify-between gap-5">
            <h3 className="text-lg md:text-[20px] leading-[1.35] font-bold text-white max-w-[85%]">
               {name}
            </h3>
            <div
               className={`min-w-[40px] h-[40px] rounded-full border-2 border-[#ff4f00] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            >
               <ChevronDown size={20} className="text-[#ff4f00]" />
            </div>
         </div>
         <div
            className={`grid ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            style={{
               transitionProperty: "grid-template-rows, margin-top",
               transitionDuration: "0.38s",
               transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
               marginTop: isOpen ? 20 : 0,
            }}
         >
            <div className="overflow-hidden">
               <ul className="text-[15px] leading-[1.7] text-[#ffe3d6] space-y-1">
                  {desc.map((d, i) => (
                     <li key={i}>{d}</li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
}


export default function TeamExamplesSection() {
   const [activeRow, setActiveRow] = useState(null);
   const [activeSide, setActiveSide] = useState(null);
   const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);

   useEffect(() => {
      const mq = window.matchMedia("(max-width: 1023px)");
      const handler = (e) => setIsMobile(e.matches);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
   }, []);

   const rows = Math.ceil(TEAM_CATEGORIES.length / 2);
   const leftTeams = TEAM_CATEGORIES.slice(0, rows);
   const rightTeams = TEAM_CATEGORIES.slice(rows);

   const handleClick = (row, side) => {
      if (activeRow === row && activeSide === side) {
         setActiveRow(null);
         setActiveSide(null);
      } else {
         setActiveRow(row);
         setActiveSide(side);
      }
   };

   return (
      <section className="py-24 pt-10 md:py-36 bg-[#181212] w-full">
         <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#ffe3d6] mb-6 text-left drop-shadow-xl">
               Workflow Automation<br />Examples by Team
            </h2>
            <p className="text-lg md:text-2xl text-[#ffe3d6] mb-12 max-w-2xl font-medium">
               From growth to operations to scale,<br />
               workflow automation <span className="text-[#ff4f00] font-bold">unleashes</span> the full power of your operations
            </p>
            <div className="flex flex-col md:flex-row gap-6 items-start">
               {/* Left column */}
               <div className="flex flex-col gap-6 flex-1">
                  {leftTeams.map((team, i) => (
                     <TeamFAQCard
                        key={team.name}
                        name={team.name}
                        desc={team.desc}
                        isOpen={activeRow === i && activeSide === "left"}
                        onClick={() => handleClick(i, "left")}
                        color=""
                     />
                  ))}
               </div>
               {/* Right column */}
               <div className="flex flex-col gap-6 flex-1">
                  {rightTeams.map((team, i) => (
                     <TeamFAQCard
                        key={team.name}
                        name={team.name}
                        desc={team.desc}
                        isOpen={activeRow === i && activeSide === "right"}
                        onClick={() => handleClick(i, "right")}
                        color=""
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
