//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName,managerAge,currentTeam,trophiesWon) {
     return [managerName,managerAge,currentTeam,trophiesWon];
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
var i=0;
function createFormation(layout){
  const order = ["defender","midfield","forward"]
  const formationlayout={};
  var i=0;
  for(const pos of order){
    if(layout <=0)
    {
      return null;
    }
    formationlayout[pos] = layout[i++];
  }

  return formationlayout;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  const playeryear = []
  var j=0;
  for(var i=0;i<players.length;i++)
  {
    if(players[i].debut == year){
      playeryear[j++] = players[i];
    }
  }
  return playeryear;

}
year.onclick= function(){
const year = document.getElementById("debutflag").Value;
filterByDebut(year)
  
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position){
  const playerpos = []
  var j=0;
  for(var i=0;i<players.length;i++)
  {
    if(players[i].position == position){
      playerpos[j++] = players[i];
    }
  }
  return playerpos;

}
position.onclick= function(){
const position = document.getElementById("positionflag").Value;
filterByPosition(position)
  

}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName){
 return players.filter(player =>player.awards.some(award => award.name === awardName));
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName,noOfTimes){
  const filteredPlayers = players.filter(player =>{
    return player.awards.filter(a => a.name === awardName).length === noOfTimes});
    return filteredPlayers;

}

//Progression 7 - Filter players that won ______ award and belong to ______ country


function filterByAwardxCountry(awardName,country){
  const filteredPlayers = players.filter(player => {
    return player.awards.some(a => a.name === awardName)
    && player.country === country});
    return filteredPlayers;

}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards,team,age){
  const filteredPlayers = players.filter(player => {
    return player.awards.length >= noOfAwards
     && player.age<age && 
     player.team === team});
    return filteredPlayers;

}

//Progression 9 - Sort players in descending order of their age

function sortByAge(players){
  const sortedPlayers = players.slice().sort((a,b) => b.age - a.age);
  return sortedPlayers;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function filterByTeamxSortByNoOfAwards(team){
  const teammem = players.filter(player => player.team === team);
  const finalteam = teammem.slice().sort((a,b) => b.awards.length -a.awards.length);
  return finalteam;

}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

function sortByNamexAwardxTimes(awardName, noOfTimes, country) {
  const filteredPlayers = players.filter(player => {
      return player.awards.filter(award => award === awardName).length === noOfTimes && player.country === country;
  });
  const sortedPlayers = filteredPlayers.slice().sort((a, b) => a.name.localeCompare(b.name));
  
  return sortedPlayers;
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order


function sortByNamexOlderThan(age){
  const filteredPlayers = players.filter(player =>player.age>age);
  filteredPlayers.sort((a,b) => a.name.localeCompare(b.name));
  filteredPlayers.forEach(player => {
    player.awards.sort((a,b) => new Date(b.date) - new date(a.date));
  });
  return filteredplayers;
}
