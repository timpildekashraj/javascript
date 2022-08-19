let todo = ['wake up early','eat healthy','gym','read books']

for (i=0;i<todo.length;i++){
    console.log(todo[i])
}

todo.forEach(function(name,pos){
    console.log(`${pos}.${name}`);
});