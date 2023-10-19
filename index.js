let reset = document.querySelector("#reset");
reset.addEventListener('click',()=>{
    location.reload();
});
window.onload = function() {
    let numbers = ['A',1,2,3,4,5,6,7,8,9,10,'J','Q','K'];
    let number = document.querySelector('#number');
    let random = getRandom(11);
    let symbol = getSymbol(getRandom(4));
    let topo = document.querySelector('.top');
    let botton = document.querySelector('.botton');
    if(symbol==='\u2660' || symbol==='\u2663'){
       top.style.color = 'black';
       botton.style.color = 'black';
    }
    number.innerHTML = number[getRandom(14)];
    top.innerHTML = symbol;
    botton.innerHTML = symbol;
};
function getRandom(max){
    return Math.floor(Math.random() * (max - 1) + 1 );
}
function getSymbol(option){
    switch (option){
        case 1:
            let spades ='\u2660'
            return spades;
            break;
        case 2:
            let trebols ='\u2660';
            return spades;
            break;
            case 3: 
            let hearts ='\u2660';
            return hearts;
            break;
            default:
                hearts ='\u2660';
                return hearts;
                break;
            
        
    }
}