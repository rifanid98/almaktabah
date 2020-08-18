# <p align="center">Al Maktabah</p>

<p align="center">
  <image src="https://github.com/rifanid98/almaktabah/blob/master/src/assets/images/logo.png" width="100" alt="almaktabah logo">
</p>
<p align="center">
  Built with React Native, Build with love.
</p>

## :memo: Table Of Content

- [Introduction](#introduction)
- [Features](#features)
- [Screenshots](#screenshots)
- [Usage](#usage)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing-to-your-local-machine)
- [Contributing](#contributing-to-this-project)
- [Contributors](#contributors)
- [Related Project](#related-project)
- [Contact](#contact)
- [License](#license)

## Introduction

Al Maktabah Mobile is a mobile version of [Al Maktabah Web](https://github.com/rifanid98/libraryapp). Created using MERN Stack (MySQL, Express.Js, React Native & Node.Js). This application makes it easy for users to borrow books from their mobile phones.

## Features

#### Authentication

User can login or register if he does not have an account before. There is also standard authentication validation when logging in and registering.

- Login.
- Register.

#### Home Page

There is a menu to go to the dashboard page & logout at the left sidebar.

- Top Navigation Menu.
- Books Slider.
- Books List.

#### Detail Book Page

- Book Information (image, title, author name, genre name & stock available).
- Borrow/Return Book Action.

#### Dashboard Page

This page is used to manage data.

- Books Manager.
- Author Manager.
- Genre Manager.
- User Manager.
- Profile Page.

## Screenshots

<div align="center">
    <img width="250" src="https://github.com/rifanid98/almaktabah/blob/master/screenshots/login.jpg">   
    <img width="250" src="https://github.com/rifanid98/almaktabah/blob/master/screenshots/register.jpg">
    <img width="250" src="https://github.com/rifanid98/almaktabah/blob/master/screenshots/home.jpg">
</div>
<div align="center">
    <img width="250" src="https://github.com/rifanid98/almaktabah/blob/master/screenshots/chat.jpg">   
    <img width="250" src="https://github.com/rifanid98/almaktabah/blob/master/screenshots/profile.jpg">
    <img width="250" src="https://github.com/rifanid98/almaktabah/blob/master/screenshots/friends-request.jpg">
</div>
<div align="center">
    <img width="250" src="https://github.com/rifanid98/almaktabah/blob/master/screenshots/maps-friends-list.jpg">   
    <img width="250" src="https://github.com/rifanid98/almaktabah/blob/master/screenshots/maps-users-list.jpg">   
</div>

## Usage

- For common users, you can download the release apk at [google drive]()
- For developer, you can continue to follow the instructions bellow.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- `Node.Js`
- `MySQL Server`
- `Git`

### Installing to your local machine

- Go to your desktop directory or your dedicated projects folder.
- Open your favourite terminal or command prompt (use git bash if you use windows os).
- Follow these command :
  ```
  git clone https://github.com/rifanid98/almaktabah
  cd almaktabah
  npm install
  ```
- Open `env` environtment file at `src/configs/env.js`, and change following config :
  - change `API_URL` value to your local ip. Ex: `192.168.43.81:3000/libraryapp-api`
  - change `ORIGIN` value to your local ip.
  - change `ACTIVE_CONFIG` value to `dev`. (dev by default).
  - change `ACTIVE_THEME` value to `primary`. (primary by default).
- You need to install server of this app to run. Go to [Related Project](#related-project)
- You are ready to start.

## Contributing to this project (Al Maktabah)

To contribute to the project, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

Contact me immediately if you haven't received a response from me within 1 week to my email [adninsijawa.office@gmail.com]()

## Contributors

Thanks to the following people who have contributed to this project:

## Related Project

- [libraryapp](https://github.com/rifanid98/libraryapp) Website version of this project.
- [libraryapp-api](https://github.com/rifanid98/libraryapp-api) backend api for this project.

## Contact

If you want to contact me you can reach me at <adninsijawa.office@gmail.com>.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/rifanid98/almaktabah/blob/master/LICENSE) file for details
