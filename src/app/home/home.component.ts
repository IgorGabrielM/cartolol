import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';
import { PlayersModel } from '../model/players.model';
import { TeamService } from '../service/team.service';
import { TeamModel } from '../model/team.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  playersShow: PlayersModel[] = [];
  players: PlayersModel[] = [];
  playersSelected: PlayersModel[] = [];
  teams: TeamModel[] = [];

  constructor(
    private playersService: PlayersService,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.loadPlayers();
    this.loadTeams();
  }

  loadTeams() {
    this.teamService.list().subscribe((teams) => {
      this.teams = teams;
      console.log("teams", teams)
    })
  }

  loadPlayers() {
    this.playersService.list().subscribe((players) => {
      this.players = players;
      this.playersShow = players;
      console.log("players", players)
    })
  }

  countTotalPrice(): number {
    return this.playersSelected.reduce((total, player) => total + player.price, 0);
  }

  handleEvent(event: { playersModel: PlayersModel, remove: boolean }) {
    if (this.playersSelected.length > 5) {

    } else {
      if (event.remove) {
        this.playersSelected = this.playersSelected.filter((p) => p !== event.playersModel)
      } else {
        this.playersSelected.push(event.playersModel)
      }
    }
    console.log(this.playersSelected)
  }

  selectTeam(team?: TeamModel) {
    if (team) {
      console.log(team)
      this.playersShow = this.players.filter((play) => play.teamId === team.id)
    } else {
      this.playersShow = this.players
    }
  }
}
