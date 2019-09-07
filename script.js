// Make a request for a user with a given ID
axios.get('https://tk-whatsapp.herokuapp.com/messages')
    .then(function (response) {
        // handle success
        for (let i = 0; i < response.data.length; i++) {
            let a = response.data[i];
            document.querySelector('ul').innerHTML +=
                `
                <div class="main">
                <img class="profile-pics" src="${a.profilePic}" >
                    <div class="content">
                        <div>
                        <h1 class="names">${a.name}</h1>
                        </div>                        
                        <p class="numbers">${a.number}</p>
                        <p class="chats">${a.firstLine}</p>
                        <p class="times">${a.time}</p>
                    </div>            
                </div>
            `

        }



        // console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });