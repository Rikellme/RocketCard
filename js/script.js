function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

document.getElementById('change-background').addEventListener('click', () => {
    document.querySelector('.card').style.background = generateRandomColor()
})

document.querySelector("#black").addEventListener('click', () => {
    document.querySelector('.card').style.background = '#000'
})

document.querySelector("#purple").addEventListener('click', () => {
    document.querySelector('.card').style.background = '#8257e5'
})

document.querySelector("#white").addEventListener('click', () => {
    document.querySelector('.card').style.background = '#fff'
})

// function downloadPdf() {
//     const getData = document.getElementById('content').innerHTML;

//     const windows = window.open('', '', 'width=900,height=700');
//     windows.document.write('<html><head>');
//     windows.document.write('<link rel="stylesheet" href="../css/style.css">')
//     windows.document.write('<title>Rocketcard</title></head>');
//     windows.document.write('<body>');
//     windows.document.write('<div class="container">');
//     windows.document.write('<div class="content">');
//     windows.document.write(getData);
//     windows.document.write('</div>');
//     windows.document.write('</div>');
//     windows.document.write('</body></html>');
//     windows.document.close();
//     windows.print();
// }

function getGithubProfileInfos() {
    const userGithub = 'rikellme'
    const url = `https://api.github.com/users/${userGithub}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            avatar.src = data.avatar_url
            followers.textContent = data.followers + " seguidores"
            followings.textContent = data.following + " seguindo"
            repository.textContent = data.public_repos + " repositórios"
            company.textContent = data.company
            locations.textContent = data.location
        })
}

getGithubProfileInfos()