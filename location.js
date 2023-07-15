const ipInput = document.querySelector('#ipAddress');
const key = 'e69e142677fa46999eaec32047443139';
const form = document.querySelector('.form');


const getIpAddres = async (ip) => {
    const url = `https://ipgeolocation.abstractapi.com/v1/?api_key=${key}&ip_address=${ip}`;
    
    const response = await fetch(url);
    const data = await response.json();
    return console.log(data);
}

form.addEventListener('submit', e => {
    e.preventDefault();

    getIpAddres(ipInput.value.trim());
})