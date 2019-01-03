/**
 * Created by kells4 on 18/07/2017.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {
  youtube: any = {
    ready: false,
    player: null,
    playerId: null,
    videoId: null,
    videoTitle: null,
    playerVars: {},
    playerHeight: '360',
    playerWidth: '640'
  };

  constructor() {
  }

  bindPlayer(elementId): void {
    this.youtube.playerId = elementId;
  };

  createPlayer(): void {
    return new window['YT'].Player(this.youtube.playerId, {
      events: {
        'onReady': this.onPlayerReady,
        'onStateChange': this.onPlayerStateChange,
        'onError': this.onPlayerError
      }
    });
  }

  setPlayerOptions(obj:any):void {
    this.youtube.playerVars = obj;
  }

  onPlayerReady(event): void{
  }

  onPlayerStateChange(event): void{
  }

  onPlayerError(event): void{
  }

  loadPlayer(): void {
    if (this.youtube.ready && this.youtube.playerId) {
      if (this.youtube.player) {
        this.youtube.player.destroy();
      }
      this.youtube.player = this.createPlayer();
    }
  }

  setupPlayer(id:string,options:any) {
    //we need to check if the api is loaded
    window['onYouTubeIframeAPIReady'] = () => {
      if (window['YT']) {
        this.youtube.ready = true;
        this.bindPlayer(id);
        if(options) {
          this.setPlayerOptions(options);
        }
        this.loadPlayer();
      }
    };
    if (window['YT'] && window['YT'].Player) {
      this.youtube.ready = true;
      this.bindPlayer(id);
      if(options) {
        this.setPlayerOptions(options);
      }
      this.loadPlayer();
    }
  }

  launchPlayer(id): void {
    this.youtube.player.loadVideoById(id);
    this.youtube.videoId = id;
    return this.youtube;
  }
}
