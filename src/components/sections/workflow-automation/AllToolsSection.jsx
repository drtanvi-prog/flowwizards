import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Chip from '@/components/ui/Chip';
import Badge from '@/components/ui/Badge';

const TOOL_CATEGORIES = [
   {
      name: "Sales & CRM",
      color:
         "bg-[#fff4ef] border-[#ffb38f] hover:border-[#ff925c]",
      badge: "bg-[#ff6b2d]",
      tools: [
         "ActiveCampaign",
         "Apollo.io",
         "Close",
         "Pipedrive",
         "Clay",
         "Reply.io",
         "Lemlist",
      ],
   },
   {
      name: "Marketing & Email",
      color:
         "bg-[#fff8e8] border-[#f4d27a] hover:border-[#e9bf47]",
      badge: "bg-[#f4b000]",
      tools: [
         "Mailchimp",
         "Klaviyo",
         "Brevo",
         "MailerLite",
         "Kartra",
         "Leadpages",
      ],
   },
   {
      name: "Automation & Integration",
      color:
         "bg-[#eefbf3] border-[#9ed9b0] hover:border-[#6fc48d]",
      badge: "bg-[#29b36b]",
      tools: [
         "Zapier",
         "Make",
         "n8n",
         "Whalesync",
         "Unito.io",
      ],
   },
   {
      name: "Forms & Documents",
      color:
         "bg-[#f4f2ff] border-[#c8bfff] hover:border-[#a99cff]",
      badge: "bg-[#7b61ff]",
      tools: [
         "Typeform",
         "JotForm",
         "Fillout",
         "PandaDoc",
         "Nanonets",
      ],
   },
   {
      name: "Support & Messaging",
      color:
         "bg-[#fff1f5] border-[#ffb4ca] hover:border-[#ff86ab]",
      badge: "bg-[#ff4f87]",
      tools: [
         "Gorgias",
         "Help Scout",
         "AirCall",
         "OpenPhone",
         "Salesmsg",
      ],
   },
   {
      name: "Ops & Internal Tools",
      color:
         "bg-[#eef7ff] border-[#a8cff7] hover:border-[#6baef0]",
      badge: "bg-[#3291ff]",
      tools: [
         "Airtable",
         "monday.com",
         "Softr",
         "QuickBooks",
         "Databox",
      ],
   },
];

function AccordionItem({ item, open, onClick }) {
   return (
      <div
         className={`
            overflow-hidden rounded-xl
            border
            transition-all duration-300
            ${item.color}
            ${open ? "shadow-[0_15px_40px_rgba(0,0,0,0.06)]" : ""}
         `}
      >
         {/* HEADER */}
         <button
            onClick={onClick}
            className="
               flex w-full items-center justify-between
               gap-4
               px-5 py-5
               text-left
               sm:px-6
               md:px-8 md:py-6
            "
         >
            <div className="min-w-0">
               <div className="flex items-center gap-3">
                  <div
                     className={`h-3 w-3 rounded-full ${item.badge}`}
                  />

                  <h3
                     className="
                        text-[18px]
                        font-bold
                        leading-tight
                        tracking-[-0.03em]
                        text-[#111]
                        sm:text-[20px]
                        md:text-[20px]
                     "
                  >
                     {item.name}
                  </h3>
               </div>

               <p
                  className="
                     mt-2
                     text-[12px]
                     text-[#666]
                     sm:text-[13px]
                     md:text-[14px]
                  "
               >
                  {item.tools.length} integrations available
               </p>
            </div>

            {/* ICON */}
            <div
               className={`
                  flex h-10 w-10 shrink-0 items-center justify-center
                  rounded-full bg-white/80
                  transition-all duration-300
                  ${open ? "rotate-180 scale-105" : ""}
               `}
            >
               <ChevronDown size={18} className="text-[#222]" />
            </div>
         </button>

         {/* CONTENT */}
         <div
            className={`
               grid transition-all duration-300 ease-in-out
               ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
            `}
         >
            <div className="overflow-hidden">
               <div className="px-5 pb-5 sm:px-6 md:px-8 md:pb-8">

                  <div className="mb-5 h-px w-full bg-black/5" />

                  <div className="flex flex-wrap gap-2 md:gap-2.5">
                     {item.tools.map((tool) => (
                        <Badge
                           key={tool}
                           variant="gray"
                           className="!rounded-md !px-3 !py-1 !text-[12px] sm:!text-[13px] md:!text-[14px] border border-[#e5e5e5] bg-white/80 hover:bg-white transition-all duration-200 shadow-none"
                        >
                           {tool}
                        </Badge>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default function AllToolsSection() {
   const [openIdx, setOpenIdx] = useState(0);

   return (
      <section className="bg-white pt-8 pb-10 md:py-28">

         <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">

            {/* LABEL */}
            <Chip className="mb-5">
               Integrations & Workflow Stack
            </Chip>

            {/* HEADING */}
            <div className="max-w-3xl">

               <h2
                  className="
                     text-[25px]
                     leading-[1]
                     font-bold
                     tracking-[-0.03em]
                     text-[#111]
                     sm:text-[36px]
                     md:text-[48px]
                  "
               >
                  All The Tools
                  <br />
                  We Work With
               </h2>

            </div>

            {/* ACCORDION */}
            <div className="mt-12 space-y-4 md:mt-14">
               {TOOL_CATEGORIES.map((item, index) => (
                  <AccordionItem
                     key={item.name}
                     item={item}
                     open={openIdx === index}
                     onClick={() =>
                        setOpenIdx(openIdx === index ? -1 : index)
                     }
                  />
               ))}
            </div>
         </div>
      </section>
   );
}