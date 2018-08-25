CREATE DATABASE chat;
USE chat;
-- CREATE TABLE messages (
--   /* Describe your table here.*/
-- );
/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;
USE chat;
-- CREATE TABLE messages (
--   /* Describe your table here.*/
-- );
/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
  *    mysql -u student -p < server/schema.sql
 *  to create the database and the tables.*/
-- ---
-- Globals
-- ---
-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS Users;
create table Users
(
  id INT NOT NULL
  AUTO_INCREMENT,
  UserID VARCHAR
  (100) NOT NULL,
  PRIMARY KEY
  (id)
);
  DROP TABLE IF EXISTS Messages;
  CREATE TABLE Messages
  (
    id INT NOT NULL
    AUTO_INCREMENT,
  id_User INT,
  Text VARCHAR
    (400) NULL DEFAULT NULL,
  id_Rooms INT,
  PRIMARY KEY
    (id)
);
    DROP TABLE IF EXISTS Rooms;
    CREATE TABLE Rooms
    (
      id INT NOT NULL
      AUTO_INCREMENT,
  RoomName VARCHAR
      (100),
  PRIMARY KEY
      (id)
);
      ALTER TABLE Messages ADD FOREIGN KEY (id_User) REFERENCES Users (id);
      ALTER TABLE Messages ADD FOREIGN KEY (id_Rooms) REFERENCES Rooms (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE Users ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Messages ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Rooms ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO Users (id,UserID) VALUES
-- ('','');
-- INSERT INTO Messages (id,id_User,Text,id_Rooms) VALUES
-- ('','','','');
-- INSERT INTO Rooms (id,RoomName) VALUES
-- ('','');