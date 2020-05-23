import { UserModel } from './user.model';

export class OrderModel {
	constructor(
		public number: number,
		public date: Date,
		public status: string,
		public total: number,
		public customer: UserModel[] = []
	) {

	}
}