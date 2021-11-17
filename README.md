# fullcycle-docker
Exercícios de Docker do curso FullCycle

## Useful commands

Comandos uteis:
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