import { Department } from "@/types/department";

export type Region = {
	id: number;
	name: string;
	description: string;
	departments: Array<Department>;
}
