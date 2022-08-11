
prices = [8,2,0,3,1,7];

function check(arr){
    let highestStock = Math.max(...arr);
    let indexOfhighest = arr.indexOf(highestStock);
    let sellDay = indexOfhighest + 1;

    if(indexOfhighest == 0){
        return 'No day to buy';
    }else{
        var remains = arr.slice(0,indexOfhighest);
        var lowestStock = Math.min(...remains);
        var buyDay = arr.indexOf(lowestStock) + 1;

    }

    var profit = highestStock - lowestStock;

    return `Buy on day ${buyDay} and sell on day ${sellDay} to make a profit of ${profit}`
};


console.log(check(prices));


let share = document.querySelector('.share')
let ul = document.querySelector('ul');

share.addEventListener('click',(e)=>{
    ul.classList.toggle('show');
});
