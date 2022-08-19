let convert = (doller) => {
    if(typeof(doller) == 'number'){
        return doller * 70
    }else{
        throw Error `invalid`
    }
}



try {
    console.log(convert('sss'));
} catch (error) {
    console.log(error);
}
console.log(typeof('tim'))