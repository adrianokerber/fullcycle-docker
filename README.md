# fullcycle-docker
Exercícios de Docker do curso FullCycle

## Build Go app using multistage docker

A simple multistage dockerfile to build an app in Go lang.

### Useful commands for build with Docker

Useful commands:
```
// Buildar imagem novamente
docker build -t adrianokerber/codeeducation go

// Build vendo logs de cada camada, no caso de usar um RUN ls ou algo do tipo
docker build -t adrianokerber/codeeducation go --progress=plain --no-cache

// Rodar container
docker run adrianokerber/codeeducation

// Publicar container
docker push adrianokerber/codeeducation
```

## Imagem no DockerHub

[Imagem adrianokerber/codeeducation no DockerHub](https://hub.docker.com/repository/docker/adrianokerber/codeeducation)

### Build your development environment using docker-compose

Initialize all containers
```bash
docker-compose up -d
```
Shutdown all containers
```bash
docker-compose down
```
Initialize and build all containers
```bash
docker-compose up -d --build
```

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
```
docker exec -it <container_name> bash
```
Other useful commands:
```
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

```bash
# Enter bash of container
docker exec -it db bash

# On MySQL container run this to access and complete password as "root"
mysql -uroot -p

# Select database
use nodedb;

# Select registers from table people
select * from people;
```

> This project uses [Gitmoji](https://gitmoji.dev/) as commits' pattern along with a clear message