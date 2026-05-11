import { TrendingUp, Inbox, Settings, DollarSign, BarChart2 } from "lucide-react";

export const useCaseCategories = [
  {
    id: 0,
    label: "Revenue",
    color: "#ff4f00",
    icon: TrendingUp,
    heading: "AI-Powered\nRevenue Workflows",
    description: "Handle lead volume, timing, and follow-up so sales stays responsive.",
    workflows: [
      {
        title: "Lead capture → enrichment → CRM create → assign → sequence launch",
        desc: "Incoming leads are evaluated, enriched, routed, and followed up on automatically.",
      },
      {
        title: "Deal stage changes → tasks → alerts → proposal generation",
        desc: "Deal activity is monitored so next steps, notifications, and proposals happen without manual tracking.",
      },
      {
        title: "Form submission → qualification → CRM update → notification",
        desc: "Submissions are reviewed and qualified before being passed to the right team.",
      },
    ],
  },
  {
    id: 1,
    label: "Support & Inbox Workflows",
    color: "#f59e0b",
    icon: Inbox,
    heading: "AI-Powered Support &\nInbox Workflows",
    description: "Read and direct incoming messages so teams respond faster and more consistently.",
    workflows: [
      {
        title: "Support inbox → classify → route → draft response → log in CRM",
        desc: "Messages are read, sorted by topic, and routed with context already prepared.",
      },
      {
        title: "Customer churn signal → alert → follow-up sequence → status update",
        desc: "Changes in behavior are flagged early so teams can act before issues escalate.",
      },
      {
        title: "Task overdue → escalation → notification → reassignment",
        desc: "Missed deadlines are detected and escalated automatically.",
      },
    ],
  },
  {
    id: 2,
    label: "Operations & Approvals",
    color: "#fb923c",
    icon: Settings,
    heading: "AI-Powered Operations\n& Approvals",
    description: "Keep internal processes moving without constant checking and reminders.",
    workflows: [
      {
        title: "Ops approvals → reminders → exception handling → audit trail",
        desc: "Requests are tracked end to end, including edge cases and approvals.",
      },
      {
        title: "New customer onboarding → welcome sequence → document delivery → task kickoff",
        desc: "Onboarding steps are triggered and coordinated without manual coordination.",
      },
      {
        title: "Event registration → calendar add → confirmation → checklist kickoff",
        desc: "Registrations or appointments are processed and operational tasks are set in motion automatically.",
      },
    ],
  },
  {
    id: 3,
    label: "Finance & Admin Workflows",
    color: "#6b8c1a",
    icon: DollarSign,
    heading: "AI-Powered Finance &\nAdmin Workflows",
    description: "Reduce manual oversight across routine financial and admin tasks.",
    workflows: [
      {
        title: "Invoice generated → status update → reminder → payment posting",
        desc: "Invoice activity is monitored so follow-ups and updates happen on time.",
      },
      {
        title: "Contract signed → document storage → access provisioning → team alert",
        desc: "Signed documents are processed and distributed without manual handling.",
      },
    ],
  },
  {
    id: 4,
    label: "Visibility & Reporting",
    color: "#dc4810",
    icon: BarChart2,
    heading: "AI-Powered Visibility\n& Reporting",
    description: "Transform your hub of activity into usable summaries instead of raw noise.",
    workflows: [
      {
        title: "Review request → send → collect → CRM tag",
        desc: "Feedback is gathered and organized without manual follow-up.",
      },
      {
        title: "Conversations → summaries → reporting updates",
        desc: "Long threads and activity are condensed so teams can see the important points and action items.",
      },
    ],
  },
];
