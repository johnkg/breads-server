require('dotenv').config();
let mysql = require('mysql');

let localSetup = {
    connectionLimit: 25,
    host: process.env.HOST || process.env.LOCAL_HOST,
    user: process.env.USERNAME || process.env.LOCAL_USER,
    password: process.env.DBPASSWORD || process.env.LOCAL_DBPASSWORD,
    database: process.env.DB || process.env.LOCAL_DB
}

// let connection = mysql.createConnection(localSetup);
let connection = mysql.createPool(localSetup);
// process.env.CLEARDB_DATABASE_URL


module.exports.connection = connection;

// ************SCHEMAS************

// CREATE TABLE users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     first_name VARCHAR(255) NOT NULL,
//     last_name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     username VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255),
//     image VARCHAR(255),
//     created_at TIMESTAMP DEFAULT NOW()
// );

// CREATE TABLE readings (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     domain VARCHAR(255) NOT NULL,
//     word_count INT NOT NULL,
//     url VARCHAR(255) UNIQUE NOT NULL,
//     user_id INT NOT NULL,
//     created_at TIMESTAMP DEFAULT NOW(),
//     FOREIGN KEY(user_id) REFERENCES users(id)
// );

// CREATE TABLE subscriptions (
//     subscriber_id INT NOT NULL,
//     publisher_id INT NOT NULL,
//     created_at TIMESTAMP DEFAULT NOW(),
//     FOREIGN KEY(subscriber_id) REFERENCES users(id),
//     FOREIGN KEY(publisher_id) REFERENCES users(id),
//     PRIMARY KEY(subscriber_id, publisher_id)
// );

// CREATE TABLE favorites (
//     user_id INTEGER NOT NULL,
//     reading_id INTEGER NOT NULL,
//     created_at TIMESTAMP DEFAULT NOW(),
//     FOREIGN KEY(user_id) REFERENCES users(id),
//     FOREIGN KEY(reading_id) REFERENCES readings(id),
//     PRIMARY KEY(user_id, reading_id)
// );

// ALTER TABLE users ADD FULLTEXT (first_name, last_name, username);
// ALTER TABLE subscriptions ADD COLUMN isNew INT DEFAULT 1 AFTER created_at;
// ALTER TABLE readings DROP INDEX url;

// solid bookmark <- state readings.data.favorite <- readings controller findall <- favs table joined with readings table
// empty bookmark -> action markFavorite -> readings routes -> readings model markFavorite

// favorites should be in state!