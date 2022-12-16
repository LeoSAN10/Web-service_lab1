CREATE TABLE DRIVER(
    id SERIAL PRIMARY KEY,
    model VARCHAR(255),
    yearOfCar INTEGER
);

CREATE TABLE PARKING(
    id SERIAL PRIMARY KEY,
    parkingNum INTEGER,
    isFree BOOLEAN, 
    cost INTEGER,
    driver_id INTEGER,
    FOREIGN KEY (driver_id) REFERENCES driver(id)
);
