import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintGuard implements CanActivate {
    constructor(private readonly router: Router){}

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const token: number = localStorage.getItem('ctdevStudentToken') as unknown as number;
        if(token) {
            return true;
        }
        this.router.navigateByUrl('/student/view-complaint');
        return false;
    }
}
