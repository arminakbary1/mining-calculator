async function getapi() {
    coin = document.getElementById('coinselect').value
    device = document.getElementById('device').value
    const response = await fetch('https://api.minerstat.com/v2/coins')
    var data = await response.json()
    for(i=0;i<data.length;i++){
        if(data[i]['coin'] == coin){
            block_reward = data[i]['reward_block']
            difficulty = data[i]['difficulty']
            price = data[i]['price']
            algo = data[i]['algorithm']
            if (algo == 'SHA-256') {
              profit = (86400 *block_reward*device*10**12)/((2**32) * difficulty)*price
            }else {
            profit = (price*86400 *block_reward*device*10**12)/((2**32)*difficulty)  
            }
            alert('در آمد روزانه شما'+profit+"دلار می باشد")
        }
    }
  }
// button = document.getElementById('run')
// button.addEventListener('click',getapi())


// read local JSON file using jQuery
// let response = fetch('https://api.minerstat.com/v2/coins')
// Defining async function
// async function getapi(url) {
//
//     // Storing response
//     const response = await fetch(url);
//
//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log(data);
//     if (response) {
//         hideloader();
//     }
//     show(data);
// }
// // Calling that async function
// getapi(api_url);
//
// // Function to hide the loader
// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }
// // Function to define innerHTML for HTML table
// function show(data) {
//     let tab =
//         `<tr>
//           <th>Name</th>
//           <th>Office</th>
//           <th>Position</th>
//           <th>Salary</th>
//          </tr>`;
//
//     // Loop to access all rows
//     for (let r of data.list) {
//         tab += `<tr>
//     <td>${r.name} </td>
//     <td>${r.office}</td>
//     <td>${r.position}</td>
//     <td>${r.salary}</td>
// </tr>`;
//     }
//     // Setting innerHTML as tab variable
//     document.getElementById("employees").innerHTML = tab;
// }
