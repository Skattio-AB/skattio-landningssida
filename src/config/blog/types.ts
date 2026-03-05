import type { ReactNode } from "react";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  keywords: string[];
  category: string;
  content: () => ReactNode;
}
