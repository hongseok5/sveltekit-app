// src/viewmodels/GameViewModel.ts
//import { writable } from "svelte/store";

export class GameViewModel {
    games = []

    async loadGames() {
      try{
        const response = await fetch('/api/games'); // 클라이언트에서 API 호출
        const data = await response.json();
        return data;
      }catch(err){
        console.log(err)
        return []
      }
    } 
  }
  