var playerCharacter;
var currentEnemy;

$('.character').click(function (){
    if(playerCharacter === undefined){
        playerCharacter = this;
        $('#enemycharacterselect').append($('.character'));
        $('#yourcharacter').append(playerCharacter);
    }

    if(currentEnemy === undefined || currentEnemy.defeated){
        if(!(this === playerCharacter)){
            console.log('getting here');
            currentEnemy = this;
            $('#currentEnemy').append(currentEnemy);
        }
    }
});