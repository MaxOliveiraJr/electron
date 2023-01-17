window.addEventListener('DOMContentLoaded', () => {
    const os = require('os');
    const processor = document.querySelector('#processor');
    processor.innerHTML = os.cpus()[0].model;

})
   
   
   