import {
  ChartPieIcon,
  DocumentChartBarIcon,
  DocumentMinusIcon,
  FunnelIcon,
  ClipboardDocumentCheckIcon,
  ServerIcon,
  EnvelopeOpenIcon,
  DocumentMagnifyingGlassIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

type TnavbarLinks = {
  id: number;
  title: string;
  link: string;
  icon: string;
}[];

export const navbarLinks: TnavbarLinks = [
  {
    id: 1,
    title: "dashboard",
    link: "/dashboard",
    icon: "ChartPieIcon",
  },
  {
    id: 2,
    title: "risk register",
    link: "/",
    icon: "DocumentChartBarIcon",
  },
  {
    id: 3,
    title: "my risks",
    link: "/",
    icon: "DocumentMinusIcon",
  },
  {
    id: 4,
    title: "controls",
    link: "/",
    icon: "FunnelIcon",
  },
  {
    id: 5,
    title: "assessments",
    link: "/",
    icon: "ClipboardDocumentCheckIcon",
  },
  {
    id: 6,
    title: "reports",
    link: "/",
    icon: "ServerIcon",
  },
  {
    id: 7,
    title: "messages",
    link: "",
    icon: "EnvelopeOpenIcon",
  },
  {
    id: 8,
    title: "audit trail",
    link: "/",
    icon: "DocumentMagnifyingGlassIcon",
  },
  {
    id: 9,
    title: "settings",
    link: "/",
    icon: "Cog6ToothIcon",
  },
  {
    id: 10,
    title: "help and resources",
    link: "/",
    icon: "QuestionMarkCircleIcon",
  },
];
