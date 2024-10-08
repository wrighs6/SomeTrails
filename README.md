# SomeTrails

SomeTrails is an innovative online platform designed to offer a comprehensive database of hiking trails, tailored to both novice and experienced hikers.
Our goal is to help users easily discover trails that match their skill level and preferences while providing advanced search and filtering tools to enhance your hiking experience.

Hikers often struggle to find detailed, reliable information about trails that suit their experience level and preferences. 
SomeTrails addresses these issues by creating a user-friendly platform with an extensive, curated database of hiking trails.

SomeTrails can be accessed at <https://sometrails.wrighs6.com/>. Below are instructions for deploying SomeTrails yourself. 

## Dependencies

SomeTrails uses Docker and Docker Compose for deployment and dependency management. 
As such, the only dependencies are Git and a working installation of Docker. 
Instructions for installing Docker can be found here: <https://docs.docker.com/get-docker/>. 

## Configuration

To run SomeTrails on a domain other than localhost, it will be necessary to update the .env file to include the correct domain name.

## Usage

After cloning the SomeTrails repository, run `docker compose build && docker compose up` in the directory containing docker-compose.yml. Once both containers are running, SomeTrails will be accessible from the domain specified in the .env file.

IMPORTANT: When running SomeTrails on localhost, it will be necessary to navigate to api.localhost and click through any warnings that are shown before the website will run properly. 
