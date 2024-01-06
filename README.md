# Dungeons and Dragons Character API with Laravel Vite/Bootstrap 5 Preset

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [System Requirements](#system-requirements)
5. [Project Setup](#project-setup)
6. [Frontend setup](#frontend-setup)
6. [Contributions](#contributions)
8. [Laravel Vite/Bootstrap 5 Preset](#laravel-vite-bootstrap-5-preset)

## Introduction

This repository combines a Dungeons and Dragons (D&D) character API developed with Laravel 10 and a frontend built using JavaScript, Bootstrap 5, Vite, and Sass. Additionally, it includes a Laravel Vite/Bootstrap 5 preset for easy setup.

## Features

- **CRUD Operations for Characters:** The API allows you to Create, Read, Update, and Delete D&D characters.
  
- **Intuitive User Interface:** An attractive and user-friendly interface has been implemented to interact with the API.

## Technologies Used

- **Laravel 10:** The backend of the application is built using the popular PHP framework, Laravel, to facilitate the creation and management of the API.

- **JavaScript:** Used to enhance the user experience in the frontend and make asynchronous requests to the API.

- **Bootstrap 5:** The frontend interface is designed using Bootstrap to ensure a responsive and visually appealing design.

- **Vite:** Utilized as a bundler for frontend development, providing a quick and efficient configuration.

- **Sass:** Used for stylesheet preprocessing, maintaining a more organized and modular CSS code.

## System Requirements

- PHP 8.0 or higher
- Composer
- Node.js and npm
- Laravel CLI
- A database compatible with Laravel (MySQL, PostgreSQL, SQLite, etc.)

## Project Setup

1. Clone the repository: `git clone https://github.com/franedsandi/characters_d_and_d.git`.

2. be sure to have a Database destined to the content you this repository creating it on `http://localhost/phpMyAdmin/index.php`.

2. Install backend dependencies: `composer install`.

3. Copy the configuration file `.env.example` to `.env` and configure your environment, including the database connection.

4. Generate the application key: `php artisan key:generate`.

5. Run migrations: `php artisan migrate`.

6. Run `npm install` , and `npm run dev`.

7. Start the Laravel server: `php artisan serve`.

8. In the browser window register yourself as a new user .

9. Run in a third terminal `php artisan db:seed`.

---

At this point you will be able to navigate though the backend site, being able to create new characters, races and skills, read and edit them aswell, incluiding the default character maded for the first user registered, by the other side, if any other user register in the site, they will not have default characters but they will be able to read and modify the races and skills because those are universal characteristics for every user registered . Its important to know that other users will not be able to read and modify your own characters.

Note:

    Every user is able to delete their own characters, but they are also be able to delete races and skills. If any race is deleted, all the characters from that race will also be deleted ( race extintion ). If any skill is deleted, all the characters with that skill will forget that skill ( masive mamory eraser ).



## Frontend setup

1. Clone the repository: `git clone https://github.com/erikvella/front-d-and-d.git`

2. Navigate to the `frontend` folder and run `npm install` to install frontend dependencies.

3. With the Laravel server running, run `npm run dev` to start the Vite development server.

4. Copy the store file `store.js.example` to `store.js` in the data folder.

5. Access the application in your browser: `http://localhost:8000`

---------------------------------------------------

Note:

    In this front end site you will be able to see a contact us space, that will send the messages directly to a my emailtrap account, if you want to modify this, you just need to modify the configuration in env. from this:

        MAIL_MAILER=smtp
        MAIL_HOST=sandbox.smtp.mailtrap.io
        MAIL_PORT=2525
        MAIL_USERNAME=4e509049657262
        MAIL_PASSWORD=4fc319e533d7b4
        MAIL_ENCRYPTION=null
        MAIL_FROM_ADDRESS='dnd@info.com'
        MAIL_FROM_NAME="${APP_NAME}"

    To your personal information. 
    Also dont forget to modify the email in 

        app/Http/Controllers/Api/LeadController.php 

    from this

        Mail::to('**MAIL_FROM_ADDRESS**')->send(new NewContact($new_lead));

    to your "MAIL_FROM_ADDRESS" used in the env. file

---------------------------------------------------

Note 2:

    Also is important to remark the the front-end site has been modified to work as mobile first, being compatible to every size of screen with an eficient adaptability

## Contributions

Contributions are welcome! If you find any issues or have ideas to improve the application, please open an issue or submit a pull request.

    Special thanks to all contributors that took time and effort to make this project a real application.

## Laravel Vite/Bootstrap 5 Preset

**_Attention_**: Run this package on fresh Laravel applications.

Install the package by running the composer command:

    composer require pacificdev/laravel_9_preset

