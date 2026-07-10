export type Facility = {
  slug: string;
  name: string;
  icon: string;
  summary: string;
  description: string;
  focus: string[];
  event: string;
  tone: "green" | "blue" | "orange";
};

export type Devlog = {
  slug: string;
  issue: string;
  title: string;
  date: string;
  status: string;
  excerpt: string;
  highlights: string[];
};

export type NavigationItem = {
  href: string;
  label: string;
};
