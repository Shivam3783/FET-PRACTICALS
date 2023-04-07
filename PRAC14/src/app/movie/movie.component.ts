import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  genres: string[] = ['Action', 'Crime', 'Horror', 'History', 'Sci-Fi'];
  selectedGenre: string = '';
  recommendedMovies: any[] = [];

  onSubmit() {
    this.recommendedMovies = this.getRecommendedMovies(this.selectedGenre);
  }

  getRecommendedMovies(genre: string): any[] {
    switch (genre) {
      case 'Action':
        return [
          { title: 'The Dark Knight', image: 'https://image.tmdb.org/t/p/w185/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg', overview: 'Batman raises the stakes in his war on crime. With the help of Lieutenant Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets.', rating: 8.5 },
          { title: 'Avengers: Endgame', image: 'https://image.tmdb.org/t/p/w185/or06FN3Dka5tukK1e9sl16pB3iy.jpg', overview: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.', rating: 8.3 },
          { title: 'John Wick 4', image: 'https://www.themoviedb.org/t/p/w1280/iHDPzdFLjZ89hFS9T9J7GcuxDtx.jpg', overview: 'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.', rating: 7.7 }
        ];
      case 'Crime':
        return [
          { title: 'Transfusion', image: 'https://www.themoviedb.org/t/p/w1280/jOqHkfg4F53aR77PcuAqflKkvGE.jpg', overview: 'Ryan Logan, a former Special Forces operative, is battling to cope with life after the loss of his wife. He is thrusted into the criminal underworld to keep his only son from being taken from him.', rating: 7.4 },
          { title: 'The Enforcer', image: 'https://www.themoviedb.org/t/p/w1280/pXC8JJbfnRWtbD8i2yKFqqWEO4X.jpg', overview: 'A noir thriller set in Miami, the film follows an enforcer who discovers his femme fatale boss has branched out into cyber sex trafficking, putting a young runaway he’s befriended at risk. He sacrifices everything to save the young girl from the deadly organization he’s spent his life building.', rating: 7.4 },
          { title: 'Cocaine Bear', image: 'https://www.themoviedb.org/t/p/w1280/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg', overview: 'Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.', rating: 9.1 },
          { title: 'The Batman', image: 'https://www.themoviedb.org/t/p/w1280/74xTEgt7R36Fpooo50r9T25onhq.jpg', overview: 'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.', rating:7.8},
          { title: 'Fast X ', image: 'https://www.themoviedb.org/t/p/w1280/jwMMQR69Xz9AYtX4u2uYJgfAAev.jpg', overview: 'Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path.', rating: 9.3}
        ];
      case 'Horror':
        return [
          { title: 'The Shining', image: 'https://www.themoviedb.org/t/p/w1280/5h6srSwDErt12eq5S6BWKvV8g98.jpg', overview: 'Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren\'t prepared for the madness that lurks within.', rating: 8.3 },
          { title: 'The Conjuring', image: 'https://www.themoviedb.org/t/p/w1280/tdSZGTBTm4EFNCMz3laZ96Ht8ao.jpg', overview: 'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse. Forced to confront a powerful entity, the Warrens find themselves caught in the most terrifying case of their lives.', rating: 7.9 },
          { title: 'A Quiet Place', image: 'https://image.tmdb.org/t/p/w185/nAU74GmpUk7t5iklEp3bufwDq4n.jpg', overview: 'A family is forced to live in silence while hiding from creatures that hunt by sound.', rating: 7.5 }
        ];
      case 'Sci-Fi':  
        return [
          { title: 'sixty-five', image: 'https://www.themoviedb.org/t/p/w1280/uMMIeMVk1TCG3CZilpxbzFh0JKT.jpg', overview: 'After a catastrophic crash on an unknown planet, pilot Mills quickly discovers he actually stranded on Earth 65 million years ago. Now, with only one chance at rescue, Mills and the only other survivor, Koa, must make their way across an unknown terrain riddled with dangerous prehistoric creatures in an epic fight to survive.', rating: 8.4},
          { title: 'Project Gemini ', image: 'https://www.themoviedb.org/t/p/w1280/eX6tDFp4RhhjZaa1HUDUzFGPWYk.jpg', overview: 'After depleting Earths resources for centuries, humankinds survival requires an exodus to outer space. An international expedition is quickly formed to find a suitable new planet, but when plans go awry, the crew is suddenly stranded without power on a strange planet, where something unimaginable lies in wait.', rating: 5.9 },
          { title: 'Control', image: 'https://www.themoviedb.org/t/p/w1280/oxi29Eg7JymhqV5QkSrMviUb3e9.jpg', overview: 'A young mother awakens in a mysterious cell and is forced to harness her telekinetic abilities in order to escape and save her daughter.', rating: 7.4  }
        ];

      case 'History':
        return [
          { title: 'Saving Private Ryan', image: 'https://www.themoviedb.org/t/p/w1280/1wY4psJ5NVEhCuOYROwLH2XExM2.jpg', overview: 'As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.', rating: 9.7},
          { title: 'All Quiet on the Western Front ', image: 'https://www.themoviedb.org/t/p/w1280/2IRjbi9cADuDMKmHdLK7LaqQDKA.jpg', overview: 'Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I.', rating: 5.9 },
          { title: 'Medieval', image: 'https://www.themoviedb.org/t/p/w1280/eeUNWsdoiOijOZAMaWFDA5Pb1n8.jpg', overview: 'The story of 14th century Czech icon and warlord Jan Zizka who defeated armies of the Teutonic Order and the Holy Roman Empire.', rating: 6.3 }
        ];

      default:
        return [];
    }
  }
  // constructor(private route: ActivatedRoute, private router: Router) {}

}
