const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//head of html
const generateRoot = (ans) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team ${ans.teamName}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
</head>
<body>


    <div class="container row d-flex mt-3 text-center">

        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4 mb-2">Team ${ans.teamName}</h1>
              <p class="lead">${ans.teamQuote}</p>
            </div>
          </div>
          `


//end of html
const endpoint = () =>
    `</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    </body>
    </html>`


//for each added member
const cardQuestions =[
    {
        type: 'rawlist',
        name: 'role',
        message: 'Please choose the role',
        choices: [
          'engineer',
          'intern',
          'employee',
          'manager'
        ],
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter full name (ex. John Smith)',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter ID number assoicated with this role',
      },
      {
        type: 'input',
        name: 'school',
        message: 'Please enter the school associated with this person if applicable',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter the full email address',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter the github account',
      },
      {
        type: 'confirm',
        name: 'addPeople',
        message: 'add more people?',
      },
];


// general questions
const questions = [
    {
        type: 'confirm',
        name: 'welcome',
        message: 'Welcome to Team Profile generator!!! Ready to go?',
      },
    {
      type: 'input',
      name: 'teamName',
      message: 'Please enter the team name',
    },
    {
        type: 'rawlist',
        name: 'teamQuote',
        message: 'Please choose your team quote',
        choices: [
          'The purpose of software engineering is to control complexity, not to create it.',
          'Programing is 10% writing code, and 90% understanding why it is not working',
          'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots.',
          'Talk is cheap, show me the code'
        ],
    },
    {
        type: 'confirm',
        name: 'addPeople',
        message: 'add people?',
      },
]

//first flow of general question
inquirer.prompt(questions).then((ans) => {
    const firstContent = generateRoot(ans);
    fs.writeFile('dist/team.html', firstContent, (err) =>
    err ? console.log(err) : console.log('Dude, you have no member in your team')
    )
    if (ans.addPeople) {
        inquirer.prompt(cardQuestions).then((ans) => {
            addMember(ans);
            addPeople(ans)
        })
    }
    else {
        wrapup()
    }
})

//add member loop until client chooses NO
function addPeople(ans) {
    if (ans.addPeople) {
        inquirer.prompt(cardQuestions).then((ans) => {
            addMember(ans);
            addPeople(ans);
        })
    }
    else {
        wrapup()
    }
}

// detail of each registered member (body of html)
function addMember(ans) {
    if (ans.role == 'intern'){
        const member = new Intern(ans.name, ans.id, ans.email, ans.github, ans.school);
        fs.appendFile("dist/team.html", member.getHTML(), function (err) {
            if (err) {
                console.log(err);
            };
        });
    } else if (ans.role == 'manager') {
        const member = new Manager(ans.name, ans.id, ans.email, ans.github);
        fs.appendFile("dist/team.html", member.getHTML(), function (err) {
            if (err) {
                console.log(err);
            };
        });
    } else if (ans.role == 'engineer') {
        const member = new Engineer(ans.name, ans.id, ans.email, ans.github);
        fs.appendFile("dist/team.html", member.getHTML(), function (err) {
            if (err) {
                console.log(err);
            };
        });

    } else {
        const member = new Employee(ans.name, ans.id, ans.email, ans.github);
        fs.appendFile("dist/team.html", member.getHTML(), function (err) {
            if (err) {
                console.log(err);
            };
        });
    }
}



//final polish of html
function wrapup() {
    const endContent = endpoint();
    fs.appendFile("dist/team.html", endContent, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("YOU HAVE COMPELTED THE TEAM PROFILE! Please check the dist fold for your html file");
}
