import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../../services/cinema.service'

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  movie;
  constructor(private activatedRoute: ActivatedRoute, private cinemaService: CinemaService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.movie = this.cinemaService.getMovie(Number(params.id));
    });
  }

}
