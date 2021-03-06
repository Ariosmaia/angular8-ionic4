import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';
import { OrderModel } from 'src/app/models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
	public orders: OrderModel[] = null;

  constructor(
		private navCtrl: NavController,
		private service: DataService
	) { }

  ngOnInit() {
		this
			.service
			.getOrders()
			.subscribe((res: any) => {
				this.orders = res;
			});
	}

	goToOrder(order) {
		this.navCtrl.navigateRoot(`/orders/${order}`)
	}

}
