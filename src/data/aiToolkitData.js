import { buildCells } from "../components/sections/toolkit/gridConfig";
import { BADGE_MAP } from "../components/sections/toolkit/PartnerBadges";

export const aiTools = [
  {
    id: "zapier",
    name: "Zapier",
    tagline: "Premier Expert",
    accentColor: "#FF4A00",
    description:
      "Zapier is the connective tissue of your AI automation stack. We'll build multi-step Zaps that link your CRM, support desk, and data tools into fully automated pipelines — no code required, no manual steps left behind.",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    tagline: "Certified Partner",
    accentColor: "#FF7A59",
    description:
      "HubSpot is the command centre for your sales and marketing workflows. We configure automated sequences, lead scoring, and CRM pipelines so your team spends time closing deals, not updating records.",
  },
  {
    id: "pipedrive",
    name: "Pipedrive",
    tagline: "Premier Partner",
    accentColor: "#22C55E",
    description:
      "Pipedrive keeps your sales pipeline moving automatically. We'll automate follow-ups, data entry, and stage transitions so your reps focus entirely on selling while Pipedrive handles the admin.",
  },
  {
    id: "airtable",
    name: "Airtable",
    tagline: "Services Partner",
    accentColor: "#6366F1",
    description:
      "Airtable is the flexible data backbone for AI-powered workflows. We build custom bases, automated views, and AI integrations that turn your unstructured data into actionable, real-time operational intelligence.",
  },
  {
    id: "make",
    name: "Make",
    tagline: "Official Partner",
    accentColor: "#9333EA",
    description:
      "Make handles the complex, multi-branch automations that simpler tools can't. We design visual workflows that process data, call APIs, and orchestrate entire business processes with precise conditional logic.",
  },
  {
    id: "monday",
    name: "monday.com",
    tagline: "Automation Partner",
    accentColor: "#FF3D57",
    description:
      "monday.com brings your project and operational data into one automated workspace. We connect it with your CRM, support, and data tools so project status, assignments, and updates flow automatically across your team.",
  },
  {
    id: "gumloop",
    name: "Gumloop",
    tagline: "AI Automation",
    accentColor: "#7C3AED",
    description:
      "Gumloop is a next-generation AI automation platform built for complex, AI-native workflows. We use it to build pipelines that read, reason over, and act on unstructured data — turning raw inputs into structured business outcomes.",
  },
  {
    id: "jotform",
    name: "Jotform",
    tagline: "Expert Partner",
    accentColor: "#0075FF",
    description:
      "Jotform is your intake layer for AI automation. We build smart forms that capture leads, orders, and requests — then wire them directly into your CRM, operations, and AI workflows the moment a submission arrives.",
  },
];

const AI_GRID_POS = {
  zapier: { row: 1, col: 1, colSpan: 1 },
  hubspot: { row: 1, col: 3, colSpan: 1 },
  pipedrive: { row: 1, col: 5, colSpan: 1 },
  airtable: { row: 1, col: 7, colSpan: 1 },
  make: { row: 2, col: 2, colSpan: 1 },
  monday: { row: 2, col: 4, colSpan: 1 },
  gumloop: { row: 2, col: 6, colSpan: 1 },
  jotform: { row: 2, col: 8, colSpan: 1 },
};

const AI_MOBILE_GRID_POS = {
  zapier: { row: 1, col: 1 },
  hubspot: { row: 1, col: 3 },
  pipedrive: { row: 2, col: 1 },
  airtable: { row: 2, col: 3 },
  make: { row: 3, col: 1 },
  monday: { row: 3, col: 3 },
  gumloop: { row: 4, col: 1 },
  jotform: { row: 4, col: 3 },
};

export const aiCells = buildCells(AI_GRID_POS, 8, 2);
export const aiMobileCells = buildCells(AI_MOBILE_GRID_POS, 3, 4);
export const aiBadgeMap = BADGE_MAP;
