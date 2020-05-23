import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { SecurityUtil } from '../utils/security.util';

@Injectable()
export class ManagerService implements CanActivate {

	constructor() { }

	canActivate() {
		return SecurityUtil.isInRole('manager');
	}

}