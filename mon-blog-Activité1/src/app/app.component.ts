import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon blog';

  //tableau des posts :
  posts = [
  			{
  				title : 'Ligue des champions : défaite interdite pour le PSG contre Liverpool', 
  				content : 'Le club parisien, qui joue ce soir contre les Reds, n’a jamais semblé en aussi fâcheuse posture dans la compétition.',
  				loveIts : 1,
  				created_at : new Date()
  			},
  		  	{	
  				title : 'Football : le printemps des sélectionneurs africains', 
  				content : 'Longtemps chasse gardée des coachs européens, les fédérations du continent font de plus en plus appel à des techniciens locaux pour encadrer les équipes nationales.',
  				loveIts : 0,
  				created_at : new Date()
  			},
  		  	{
  				title : 'FIFA 19', 
  				content : 'FIFA 19 est un jeu vidéo de football développé par EA Canada et EA Bucarest, édité par EA Sports, sorti le 28 septembre 2018 sur Nintendo Switch, PC, PlayStation 3, PlayStation 4, Xbox One et Xbox 360. Il s\'agit du vingt-sixième opus de la franchise FIFA développé par EA Sports.',
  				loveIts : -1,
  				created_at : new Date()
  			}
  		  ]
}