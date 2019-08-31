var playerCharacter;
var currentEnemy;

var game = {
    playerCharacter: "",
    currentEnemy: "",
};

var captainAmerica = {
    health: 150,
    attackPower: 10,
    baseAttackPower: 10,
    counterAttackPower: 15,
};

var theHulk = {
    health: 150,
    attackPower: 10,
    baseAttackPower: 10,
    counterAttackPower: 15,
};

var captainMarvel = {
    health: 150,
    attackPower: 10,
    baseAttackPower: 10,
    counterAttackPower: 15,
};

var thor = {
    health: 150,
    attackPower: 10,
    baseAttackPower: 10,
    counterAttackPower: 15,
};

$('.character').click(function (){
    if(playerCharacter === undefined){
        playerCharacter = this;
        $('#enemycharacterselect').append($('.character'));
        $('#yourcharacter').append(playerCharacter);

        switch($(this).attr("value")){
            case "captainAmerica":
                game.playerCharacter = captainAmerica;
                break;
            case "captainMarvel":
                game.playerCharacter = captainMarvel;
                break;
            case "thor":
                game.playerCharacter = thor;
                break;
            case "hulk":
                game.playerCharacter = theHulk;
                break;
        }
    }

    if(currentEnemy === undefined){
        if(!(this === playerCharacter)){
            console.log('getting here');
            currentEnemy = this;
            $('#currentEnemy').append(currentEnemy);
            
            switch($(this).attr("value")){
                case "captainAmerica":
                    game.currentEnemy = captainAmerica;
                    break;
                case "captainMarvel":
                    game.currentEnemy = captainMarvel;
                    break;
                case "thor":
                    game.currentEnemy = thor;
                    break;
                case "hulk":
                    game.currentEnemy = theHulk;
                    break;
            }
        }
    }
});

$('#attackButton').click(function(){
    attack(game.playerCharacter, game.currentEnemy);
});

function attack(attacker, target){
    console.log("attacking");
    
    target.health -= attacker.attackPower;
    attacker.attackPower += attacker.baseAttackPower;

    if(attacker.health <= 0){
        gameOver();
    }

    if(target.health > 0){
        counterAttack(attacker, target);
    }

    if(target.health <= 0){
        //defeat code, select next enemy, etc.
        getNextEnemy();
    }

};

function counterAttack(attacker, target){
    console.log("counter attacking");
    attacker.health -= target.counterAttackPower;
};

function getNextEnemy(){
    console.log("getting...")
    game.currentEnemy = "";
    currentEnemy.remove();
    currentEnemy = undefined;
}

function gameOver(){
    
}