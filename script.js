// textos de retorno da API
let ipAddress = document.getElementById('ip_address');
let locationIp = document.getElementById('location');
let timeZone = document.getElementById('time_zone');
let isp = document.getElementById('isp');
let map = document.getElementById('gmaps');

function API() {
    // IP desejado pelo usuário
    let queryInput = document.getElementById('ip_input').value;

    // URL da API
    const endpoint =
        'http://ip-api.com/json/' +
        queryInput +
        '?fields=query,country,countryCode,region,regionName,city,lat,lon,,timezone,isp,';

    // dados da API
    fetch(endpoint).then((response) => {
        response.json().then((ipNumber) => {
            console.log(ipNumber);
            ipAddress.innerHTML = ipNumber.query;
            locationIp.innerHTML = `${ipNumber.city}, ${ipNumber.region}`;
            timeZone.innerHTML = ipNumber.timezone;
            isp.innerHTML = ipNumber.isp;
            gmaps.setAttribute(
                'src',
                `https://www.google.com/maps?q=${ipNumber.lat},${ipNumber.lon}&output=embed`
            );
        });
    });
}

// função API ser chamada com acionamento da tecla Enter
document.getElementById('ip_input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        API();
    }
});
