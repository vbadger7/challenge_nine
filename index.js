import inquirer from 'inquirer';
import fs from 'fs';

const generateReadme = (answers) => `
# ${answers.title}

![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For questions, you can reach me at:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
`;

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'BSD'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
]).then((answers) => {
    const readmeContent = generateReadme(answers);
    fs.writeFileSync('README.md', readmeContent);
    console.log('README.md has been generated!');
});
