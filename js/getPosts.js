axios.get('https://jsonplaceholder.typicode.com/users')
.then(response => {
    // Obtenemos los datos
    console.log(response.data);
})
.catch(e => {
    // Capturamos los errores
})