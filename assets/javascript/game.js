var playerCharacter;
var currentEnemy;

$('.character').click(function (){
    if(playerCharacter === undefined){
        playerCharacter = this;
        $('#enemycharacterselect').append($('.character'));
        $('#yourcharacter').append(playerCharacter);
    }
    // }else if(currentEnemy === undefined){
    //     currentEnemy = this;
    //     $(this).detach();
    //     $('#enemycharacterselect').append(this);
    // }
});