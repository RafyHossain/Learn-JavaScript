function  bestTeam( player1, player2 ) {
      if (typeof player1 === "object"  && typeof player2 === "object" ) {
        let total1=player1.foul+player1.cardR+player1.cardY;
        let total2=player2.foul+player2.cardR+player2.cardY;

        if(total1<total2)
            return player1.name;
        else if(total1>total2)
            return player2.name;
        else
            return "Tie";
      }

      else
        return "Invalid";

}

let player1={ name: "Argentina", foul: 7, cardY: 0, cardR: 0 };

let player2={ name: "Brazil", foul: 5, cardY: 1, cardR: 0 };
console.log(bestTeam(player1, player2));
