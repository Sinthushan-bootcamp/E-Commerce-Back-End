# E-Commerce-Back-End

![MIT license](https://img.shields.io/badge/license-MIT-blue)
## Description 

Complete e-commerce CRUD backend that inserts, updates and deletes data in a mysql database. This backend can be paired with a front-end to make a e-commerce website that sells a variety of products where the user can group products into categories and search and filter products based on associated tags.

## Table of Contents
* [installation](#installation)
* [Usage](#usage)
* [License](#license)

## Installation
To install necessary dependencies, run the following command:
```
npm i
```
Ensure that you have MySQL installed as well as an account created!

## Usage
First clone the repo and from the command line CD into the directory. Once in the directory follow the [install instructions](#installation) and then follow the following steps:

### Steps
1. First create the necessary schema. To do this use the MySQL CLI by running the following commands:
    ```
    mysql -u <your username> -p
    ```
    the press enter and then put in your password

    Then run the following:
    ```
    source ./db/schema.sql
    ```
2. Update the configuration file in the config folder to add your MySQL credentials
3. run ```npm seed``` to seed the database with initial data
4. Once the database is made and seeded and the configuration is corrected you can then run ```npm start```
5. The end points are as follows:
    * Get all categories **GET:** http://localhost:3001/api/categories
    * Get a specific category **GET:** http://localhost:3001/api/categories/:id
    * Create a new category **POST:** http://localhost:3001/api/categories
    * Update a category **PUT:** http://localhost:3001/api/categories/:id
    * Delete a category **DELETE:** http://localhost:3001/api/categories/:id
    * Get all products **GET:** http://localhost:3001/api/products
    * Get a specific product **GET:** http://localhost:3001/api/products/:id
    * Create a new product **POST:** http://localhost:3001/api/products
    * Update a product **PUT:** http://localhost:3001/api/products/:id
    * Delete a product **DELETE:** http://localhost:3001/api/products/:id
    * Get all tags **GET:** http://localhost:3001/api/tags
    * Get a specific tag **GET:** http://localhost:3001/api/tags/:id
    * Create a new tag **POST:** http://localhost:3001/api/tags
    * Update a tag **PUT:** http://localhost:3001/api/tags/:id
    * Delete a tag **DELETE:** http://localhost:3001/api/tags/:id

Please refer to this [video demonstration](https://drive.google.com/file/d/1N4EfVf36TkXUKuiflzisIggnYnepr3Yh/view?usp=sharing) for a full demo of the application

## License
This project is licensed under the MIT.