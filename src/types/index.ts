export type Facility = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  commonEvents: string[];
  metrics: string[];
  icon: "elevator" | "parking" | "locker" | "camera" | "playground" | "charging";
  gradient: string;
};

export type Devlog = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  cover: string;
  tags: string[];
  content: string[];
};

export type NavigationItem = {
  href: string;
  label: string;
};
