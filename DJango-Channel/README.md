# Chats with Celery, WebSockets, Redis, and Channel

- `Django`

- `Redis` Cache Storage

- `Celery` Message Brocker

- `Channel` layer for the `WebSocket` Communication



## Redis Configuration

redis > Dockerfile, redis.conf 생성

redis.conf : <http://download.redis.io/redis-stable/redis.conf>

```dockerfile
FROM redis:5.0.7-alpine

COPY redis.conf /usr/local/etc/redis/redis.conf

CMD [ "redis-server", "/usr/local/etc/redis/redis.conf" ]
```



docker compose 작성

```dockerfile
version: "3"

services:
  redis:
    image: redis:5.0.7-alpine
    build:
      context: ./redis
    ports:
      - "6379:6379"
      
  server:
    build: ./server
    ports:
      - "8000:8000"
    stdin_open: true
    tty: true
    command: python3 manage.py runserver 0.0.0.0:8000
    depends_on:
      - redis
```



docker 컨테이너 빌드

```bash
$ docker-compose --build up
```



redis 컨테이너 작동 테스트

```bash
$ docker exec -it '컨테이너 NAME' sh
```

```
/data # redis-cli
127.0.0.1:6379> ping
PONG
```

* redis-cli 실행 후 ping입력하여 pong 확인



