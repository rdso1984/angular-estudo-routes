import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  constructor(private parametrizador: ActivatedRoute){
    this.parametrizador.params.subscribe(
      res => console.log(res)
    )
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
