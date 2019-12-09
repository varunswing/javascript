document.getElementById("button1").addEventListener("click", getText);

document.getElementById("button2").addEventListener("click", getJson);

document.getElementById("button3").addEventListener("click", getExternal);


// Get Local Text Data
function getText() {
    fetch("text.txt")

    // Using arrow function
        .then(res => res.text())
        .then(data => {
            console.log(data);
            document.getElementById("output").innerHTML = data;
        })
        .catch(err => console.log(err));

    // Without arrow function
        // .then(function(res) {
        //     return res.text();
        // })
        // .then(function(data) {
        //     console.log(data);
        //     document.getElementById("output").innerHTML = data;
        // })
        // .catch(function(err) {
        //     console.log(err);
        // });
}

// Get Local Json Data
function getJson() {

    
    fetch("posts.json")

    // Using arrow function
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(function(post){
                output += `<li>${post.title}</li>`;
            });
            document.getElementById("output").innerHTML = output;
        })
        .catch(err => {
            console.log(err);
        });

    // Whitout using arrow function
        // .then(function(res) {
        //     return res.json();
        // })
        // .then(function(data) {
        //     console.log(data);
        //     let output = '';
        //     data.forEach(function(post){
        //         output += `<li>${post.title}</li>`;
        //     });
        //     document.getElementById("output").innerHTML = output;
        // })
        // .catch(function(err) {
        //     console.log(err);
        // });
}

// Get from external API
function getExternal() {
    fetch("https://api.github.com/users")

    // Using arrow function
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(function(post){
                output += `<li>${post.login}</li>`;
            });
            document.getElementById("output").innerHTML = output;
        })
        .catch(err => {
            console.log(err);
        });

    // Whitout arrow function
        // .then(function(res) {
        //     return res.json();
        // })
        // .then(function(data) {
        //     console.log(data);
        //     let output = '';
        //     data.forEach(function(post){
        //         output += `<li>${post.login}</li>`;
        //     });
        //     document.getElementById("output").innerHTML = output;
        // })
        // .catch(function(err) {
        //     console.log(err);
        // });
}