// Types for the frontend application

import { LucideIcon } from "lucide-react";

export interface SkillItem {
	name: string;
	level: number;
	description?: string;
	icon?: LucideIcon;
}

export interface SkillCategory {
	title: string;
	skills: SkillItem[];
	highlight?: string;
	icon?: LucideIcon;
}