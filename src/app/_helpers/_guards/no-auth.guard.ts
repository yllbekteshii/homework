import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private _auth:AuthService,private _route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.canLoad();
  }
  canLoad(){
    return this._auth.check().pipe(switchMap((authenticated)=>{

      // If the user is not authenticated...
      if(!authenticated){

        // Redirect to the sign-in page
        this._route.navigate(['/log-in']);

        //Prevent the accses
        return of (false);
      }
      // Allow the accses
      return of(true)
    }))
  }
}
