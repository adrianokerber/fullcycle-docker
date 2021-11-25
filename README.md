# fullcycle-docker
Tasks from the course Full Cycle 2.0 on Docker module

## 1. Build Go app using multistage docker

A simple multistage dockerfile to build an app in Go lang.

### Useful commands for build with Docker

Useful commands:
```bash
# Build image
docker build -t adrianokerber/codeeducation go

# Build image seeing all logs (ex: using 'RUN ls' or similar commands)
docker build -t adrianokerber/codeeducation go --progress=plain --no-cache

# Run container
docker run adrianokerber/codeeducation

# Publish container
docker push adrianokerber/codeeducation
```

### DockerHub image

[Imagem adrianokerber/codeeducation no DockerHub](https://hub.docker.com/repository/docker/adrianokerber/codeeducation)

## 2. Build your development environment using docker-compose

Initialize all containers
```bash
docker-compose up -d
```
Initialize and build all containers
```bash
docker-compose up -d --build
```
Shutdown all containers
```bash
docker-compose down
```
> Tip: use `docker-compose` or `docker compose` without dash.

Access the aplication with the browser using `localhost:8080` to acess via Nginx (Reverse proxy) or `localhost:3000` for direct connection to node app container.
The application has two routes: `/` and `/name/:yourName` where the `yourName` parameter is the name for a new register on the DB.

### Docker command tips

Build Docker image locally
```bash
docker build -t adrianokerber/laravel .
```

Run Docker image on a container
```bash
docker run -d --name laravel -p 8000:8000 adrianokerber/laravel
```

Remove all Docker containers
```bash
docker rm $(docker ps -aq) -f
```

Interact with container using Bash (Note: <container_name> is the name of your target container)
```bash
docker exec -it <container_name> bash
```

Other useful commands:
```bash
# List running containers
docker ps

# List images
docker images

# Remove container
docker rm <container_id>

# Remove image
docker rmi <image_id>
```

### MySQL commands to manage database for dev

```sql
-- Enter bash of container
docker exec -it db bash

-- On MySQL container run this to access and complete password as "root"
mysql -uroot -p

-- Select database
use nodedb;

-- Create table
create table people

-- Select registers from table people
select * from people;
```

> This project uses [Gitmoji](https://gitmoji.dev/) as commits' pattern along with a clear message