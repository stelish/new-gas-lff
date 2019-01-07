import { Store } from "./store";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GasEndPoints, BaseUrl } from "../api/gas-endpoints";

@Injectable()
export class ServerTimeState {
    serverTime:string = '';
}

@Injectable()
export class ServerTimeStore extends Store<ServerTimeState> {
    constructor(private http:HttpClient) {
        super(new ServerTimeState());
        this.getServerTime();
    }

    getServerTime(): void {
        const apiUrl = new BaseUrl().getUrl() + GasEndPoints.server_time;
        this.http.get<ServerTimeState>( apiUrl ).subscribe(
            (res) => {
                console.log(res);
                this.setState(res);
            },
            err => {

            }
        )
    }
}