function sam(ram){ //creating function 1
    return ` ${ram}`
}

console.log(sam('raa'));

let sum = (name) => { // arrow function
    return `sum ${name}`
}

console.log(sum('timpil'));


let rum = (name) => `sum ${name}` //method 2 arrow function
console.log(rum('rama'))

let array = [{
    title: 'raja',
    done: 'true'},{title: 'rama'
    ,done: 'false'}
    ]

    let filter = array.filter(() => array.done == true)
    console.log(filter);
