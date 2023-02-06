const user = {
    name:'pablo',
    idade: 23,
    address:{
        street: 'Rua tirusbango',
        number: 176,

    },



}

document.body.innerText = JSON.stringify(Object.values(user))