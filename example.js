const axios = require('axios').default;


//GET
// axios.get('https://gorest.co.in/public/v1/users/5947/')
// //Resolve the promise
// //DO something with the promise
// .then(response => {
//     console.log(response.data.data.name);
// })
// .catch(error => {
//     console.log('Error')
// })


//GET



//POST pass in url and object to post
// axios.post('https://marcusbassportfolioserver.herokuapp.com/customers', {
//     'email': 'who is cookin what for lunch yall spill it',
//     'first_name': 'mee',
//     'last_name': 'my last name',
//     'ip': '10101.12.2.2',
//     'latitude': 'margaritaville',
//     'longitude': 'wastin away',
//     'created_at': 'right mf now',
//     'updated_at': 'every time man'
// })
// .then(response => {
//     console.log('response')
// })
// .catch(error => {
//     console.log('error', error)
// })


axios.get('https://marcusbassporfoilioserver.herokuapp.com/customers')
.then(response => {
    console.log('RESPONSE', response.data)
})
.catch(error => {
    console.log('ERROR', error)
})


//PUT
// axios.put('https://marcusbassportfolioserver.herokuapp.com/customers/1', {
//     'email': 'logany@att.net',
//     'first_name': 'l',
//     'last_name': 'y',
//     'created_at': '10/28/2021'
// })
// .then(response => {
//     console.log('response', response.data)
// })
// .catch(error => {
//     console.log('error', error)
// })

//DELETE
// axios.delete('https://marcusbassporfoilioserver.herokuapp.com/customers/23')
// .then(response => {
//     console.log('RESPONSE', response.data)
// })
// .catch(error => {
//     console.log('ERROR')
// })