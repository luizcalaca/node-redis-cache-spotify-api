# Redis to cache Rock music from Spotify API

handling Rock music data with cache and make faster to access.

## Spotify API

- [DOC](https://developer.spotify.com/console/get-recommendations/)

## Technologies

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [Docker](https://www.docker.com/docker-community)
- [Docker-Compose](https://docs.docker.com/compose/install/)
- [Redis](https://redis.io/)
- [Axios](https://github.com/axios/axios)

## Requirement

- [Docker](https://www.docker.com/docker-community)
- [Docker-Compose](https://docs.docker.com/compose/install/)

## Installation and Run

1. Create a `.env` file like `.env.example` with the credentials and informations;
2. Go to [Spotify API](https://developer.spotify.com/console/get-recommendations/) and get the token to SPOTIFY_TOKEN into .env
3. Run `docker run --name redis -p 6973:6973 redis` or just `docker-compose up`
4. `npm start`

## Routes

http://localhost:3000/spotify?maket=BR&seed_genres=rock

## Performance

1. Go to developer tools in browser, look at Network and see the Time in first request and how it decrease in second because the data are cached in memory with Redis.
