import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
/**
 * loader service
 * toggle loader gif in website
 */
export class LoaderService {
    public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    show() {
        this.loading.next(true);
    }

    hide() {
        this.loading.next(false);
    }
}