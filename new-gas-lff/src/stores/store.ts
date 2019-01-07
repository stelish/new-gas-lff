import {Observable, BehaviorSubject} from 'rxjs';

export abstract class Store<T> {
    storeState: BehaviorSubject<T>;

    protected constructor (initialState: T) {
        this.storeState = new BehaviorSubject(initialState);
    }

    public getUpdates(): Observable<any> {
        return this.storeState.asObservable();
    }

    getStore():any {
        return this.storeState.getValue();
    }

    setState (nextState: T): void {
        console.log(nextState);
        
        this.storeState.next(nextState);
    }
}