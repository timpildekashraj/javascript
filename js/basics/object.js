let school = {
    id:'101',
    red: 'edf',
    pol: 'cds',
    lof: 'ewq',
    low: function(prise){
        this.id = prise; //this keyword is used to access globally
    }

}


school.low('102')
//console,log(this)
console.log(`the id of the school is ${school.id}`)
