function tambah(x,y){
    return x + y
}

var x = 5
if(x < 7){
    console.log('x kurang dari 7')
} else if(x <= 5){
    console.log('x kurang dari 5')
}

arrayX = [12, 98, 65]
console.log(arrayX[2])
console.log(tambah(arrayX[1],arrayX[2]))

for(let i=0; i<5; i++){
    console.log(i)
}

for (item in arrayX){

}

while(x < 5){
    x++
}

do{
    console.log('halo',x)
    x++
}while(x < 8)