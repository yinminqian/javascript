import Pre from './lib'


console.log("Pre:", Pre);


let pro = () => {
    let p = new Promise((resolve, j) => {
        setTimeout(() => {
            console.log("111111:", 111111);
        }, 1000);
        return resolve(true);
    });
    return p;
};
