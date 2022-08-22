# DjangoGames
A testing ground to make playble games with Python on the web

## How to start

You have to create 2 files in a folder named .envs.

.django: 
```
    SECRET_KEY="YOUR SECRET KEY ;)"
```

.postgres:
```
    POSTGRES_PORT=5432
    POSTGRES_DB=googlediff
    POSTGRES_USER=armand
    POSTGRES_PASSWORD=1234
```

then:

```
make build
make django
```