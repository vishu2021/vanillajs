createPolitician = function (name, partyColor) {
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
  politician.tallyUpTotalVotes = function () {
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
  return politician;
};
var theRock = createPolitician("The Rock", [245, 141, 136]);
var underTaker = createPolitician("Under Taker", [132, 17, 11]);
underTaker.electionResults = [
  4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3,
  3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3,
  1,
];
theRock.electionResults = [
  5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3,
  7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3,
  7, 2,
];
theRock.electionResults[9] = 1;
underTaker.electionResults[9] = 28;
theRock.electionResults[4] = 17;
underTaker.electionResults[4] = 38;
theRock.electionResults[43] = 11;
underTaker.electionResults[43] = 27;
// console.log(theRock.electionResults);
// console.log(underTaker.electionResults);
var setStateResults = function (state) {
  theStates[state].winner = null;
  if (underTaker.electionResults[state] > theRock.electionResults[state]) {
    theStates[state].winner = underTaker;
  } else if (
    underTaker.electionResults[state] < theRock.electionResults[state]
  ) {
    theStates[state].winner = theRock;
  }
  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }
  var stateInfoTable = document.getElementById("stateResults");
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];
  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
  candidate1Name.innerText = underTaker.name;
  candidate2Name.innerText = theRock.name;
  candidate1Results.innerText = underTaker.electionResults[state];
  candidate2Results.innerText = theRock.electionResults[state];
  if (theStates[state].winner === null) {
    winnersName.innerText = "DRAW";
  } else {
    winnersName.innerText = theStates[state].winner.name;
  }
};
underTaker.tallyUpTotalVotes();
theRock.tallyUpTotalVotes();
// console.log(underTaker.totalVotes);
// console.log(theRock.totalVotes);
// console.log("underTaker's color is: " + underTaker.partyColor);
// console.log("theRock's color is: " + theRock.partyColor);
var winner = "???";
if (theRock.totalVotes > underTaker.totalVotes) {
  winner = theRock.name;
} else if (theRock.totalVotes < underTaker.totalVotes) {
  winner = underTaker.name;
} else {
  winner = "DRAW.";
}
// console.log("AND THE WINNER IS..." + winner + "!!!");
var countryInfoTable = document.getElementById("countryResults");
var row = countryInfoTable.children[0].children[0];
row.children[0].innerText = underTaker.name;
row.children[1].innerText = underTaker.totalVotes;
row.children[2].innerText = theRock.name;
row.children[3].innerText = theRock.totalVotes;
row.children[5].innerText = winner;
