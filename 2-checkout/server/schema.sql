-- ---
-- Table 'checkout'
-- HR-soloweek-PracticeApp2
-- ---

CREATE DATABASE checkout;

USE checkout;

DROP TABLE IF EXISTS user_info;

CREATE TABLE user_info (
  session_id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  line1 VARCHAR(255),
  line2 VARCHAR(255),
  city VARCHAR(255),
  street VARCHAR(255),
  state VARCHAR(255),
  zip_code INTEGER,
  phone_number INTEGER,
  credit_card_num INTEGER,
  expiry_date VARCHAR(10),
  cvv INTEGER(6),
  billing_zip_code INTEGER(8)
);
