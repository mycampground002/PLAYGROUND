## 개발환경 구성 (처음 시작)
윈도우 환경에서 실행

### SERVER - Django app 도커파일 작성
  - Dockerfile, requirements 작성
  - 파이썬 3.8버전 사용
  - 최근 릴리즈된 장고 3.0 버전 사용
  - 그에 맞는 DRF 사용

```dockerfile
FROM python:3.8

WORKDIR /app/server

COPY requirements.txt /app/server
RUN pip3 install --upgrade pip -r requirements.txt

COPY . /app/server

EXPOSE 8000

CMD python3 manage.py runserver 0.0.0.0:8000
```

```txt
Django==3.0.1
djangorestframework==3.11.0
```



### CLIENT - React app 도커파일 작성

- node 12버전 사용
- 포트는 3000

```dockerfile
FROM node:12

WORKDIR /app/

COPY package.json yarn.lock /app/

COPY . /app/

EXPOSE 3000

CMD yarn watch
```



### React 환경 세팅
  - create-react-app을 이용하여 설치 또는 처음부터 세팅
  - parcel-bundler를 통한 개발환경 구축

  ```bash
  $ yarn init -y
  $ yarn add -D parcel-bundler
  $ yarn add react react-dom
  ```
  **package.json**
  ```json
  "scripts": {
    "watch": "parcel --port=3000 src/index.html"
  },
  ```

  **index.html**
  ```html
  <div id="app"></div>
  <script src="./index.tsx"></script>
  ```

  **index.tsx**
  ```typescript
  import * as React from "react";
  import { render } from "react-dom";

  render(<h1>Working</h1>, document.getElementById("app"));
  ```

  `yarn watch` > `localhost:3000`에 접속되는지 확인

  VM에서 호스트 PORT와 게스트 PORT를 8000으로 맞추어 줌

  `localhost:8000`에 접속되면 성공



### 서버, 클라이언트 도커 빌드

`docker-compose.yml`

```dockerfile
version: "3"

services:
  server:
    build: ./server
    volumes:
      - ./server:/app/server
    ports:
      - "8000:8000"
    stdin_open: true
    tty: true
    command: python3 manage.py runserver 0.0.0.0:8000
  client:
    build: ./client
    volumes:
      - ./client:/app
      - /app/node_modules
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    depends_on:
      - server
    command: yarn watch
```

- ` docker-compose up`  으로 빌드
- 윈도우 가상머신에서 Host와 Guest의 PORT를 맞추어줌
- localhost 8000, 3000에 접속에 성공 확인






