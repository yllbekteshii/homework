import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'app/_helpers/auth.service';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth:AuthService,private _route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this._check();

  }

  private _check(): Observable<boolean>
    {
        // Check the authentication status
        return this._auth.check()
                   .pipe(
                       switchMap((authenticated) => {
                            console.log(authenticated);
                            
                           // If the user is authenticated...
                           if ( authenticated )
                           {
                               // Redirect to the root
                               this._route.navigate(['products']);

                               // Prevent the access
                               return of(false);
                           }

                           // Allow the access
                           return of(true);
                       })
                   );
    }
}
