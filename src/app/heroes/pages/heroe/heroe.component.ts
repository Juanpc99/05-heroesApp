import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  id!: string;
  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.ruta.params.subscribe(({ id }) => this.id = id);
    console.log(this.id);
  }

}
