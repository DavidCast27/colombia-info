import { City } from '@/types/city';

export type President = {
	id: number;
	image: string | null;
	name: string;
	lastName: string;
	startPeriodDate: string;
	endPeriodDate: string | null;
	politicalParty: string;
	description: string;
	cityId: number;
	city?: City;
}
