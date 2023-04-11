function generateCards(employee){
    var third_item =""; 
    if (employee.getRole() ==='Manager'){
        third_item = `Office: ${employee.officeNumber}`; 
    } else if (employee.getRole() === 'Intern'){
        third_item =`School: ${employee.school}`; 
    } else if (employee.getRole() === 'Engineer'){
        third_item = `Github: <a href="${employee.getGitHub()}">${employee.githubUsername}</a> `; 
    }
    
    card = `
    <div class="col-3 offset-1">
    <div class="card h-100">
        <div class="card-header bg-primary">
            <h3>${employee.name}</h3>
            <h4>${employee.getRole()}</h4>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.id} </li>
        <li class="list-group-item">Email:<a href="mailto:${employee.email}">${employee.email}</a></li>  
        <li class="list-group-item">${third_item}</li>
        </ul>
        </div>
    </div>
    </div>
    `
    return card; 
}

function generateMarkdown(data) {
    let innerHTML = ''; 
    for (let i = 0; i < data.length; i++){
        innerHTML += generateCards(data[i]); 
    }
    console.log(innerHTML); 
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Team</title>
      </head>
    
      <body>
        <header>
          <h1 class="bg-primary text-center">My Team</h1>
        </header>
        <div class="container">
          <div class="row offset-1">
            ${innerHTML}
          </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/dayjs@1.11.3/dayjs.min.js"
        integrity="sha256-iu/zLUB+QgISXBLCW/mcDi/rnf4m4uEDO0wauy76x7U="
        crossorigin="anonymous"></script>
      </body>
    </html>`

  }
  
  module.exports = generateMarkdown;