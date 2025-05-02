# Getting Started with Create React App

This project was bootstrapped with [Create React App]

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm Install <package name>` 

Open Npm official web site and install third party packages as you need.
Install Tailwind css with:  npm install tailwindcss postcss autoprefixer
Update Tailwind.config.css file with:
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

### `Deplyment into Git `
Open github and click on new and give a name to it 
Copy Url and move to vscode and type git init to initiate github 
Enter copied url with git remote add origin <url> 
Add to Changes and commit the git 
Push to main branch and refresh the github page.

### `Deploy into render `

Open render website and click on new 
Open web services and click on add 
Copy github pushed url and paste on render 
click on deployment and check all the building and update logs.
After updating if successfull then it provides live url.
Copy url and check the deployment url work well or not.

