# Airport Management System

***A system to manage the infrastructure and flights of an airport***

## Development

### Clone the repository
> Make sure to have the latest version of node and npm installed

```bash
git clone https://github.com/apoorvaagupta/airport-management-system
cd airport-management-system
npm install
```  

### Setting up the database
> Make sure to have postgres installed(postgresql 96 preferable) and the server is started

```bash
psql
create database airportdb;
create user airportuser with encrypted password 'airportpass';
grant all privileges on database airportdb to airportuser;
```
> To login as the airportuser

```bash
psql -d airportdb -U airportuser
``` 

### Run the app

```bash
npm start
```

Server will start running on http://localhost:4000
