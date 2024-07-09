function randomNumberGenerator(start,end){
    let randNum = Math.random()*end;
    while(start>randNum){
        randNum = Math.random()*end;
    }
    return Math.round(randNum);
}
console.log(randomNumberGenerator(10,20));