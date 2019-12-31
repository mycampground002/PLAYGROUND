## WSGI



```python
def application(environ, start_response):
    start_response(
    	'200 OK',
    	[()'Content-Type', 'text/plain')]	
    )
    yield b'Hello, World\n'
```

### WSGI Frameworks

Bottle, Falcon, Falsk, Django



### WSGI Servers

gunicorn, uWSGI, Apache



### WSGI 한계

* Websockets
* HTTP/2 (동시성)
* async await를 사용할 수 없음



## ASGI

ASGI는 웹 서버, 프레임워크, 애플리케이션 간의 호환성을 위해 WSGI를 계승한 것

```python
async def application(scope, receive, send):
    event = await receive()
    ...
    await send({"type": "websocket.send", ...})
```

* scope : Request 정보 (메세지 type, method, port, query_string ... 등등 )

* receive example

  ```
  {
      "type": "http.response.start",
      "status": 200,
      "headers": [(b"X-Header", b"Amazing Value")],
  }
  ```

* send example

  ```{
  {
      "type": "websocket.send",
      "text": "Hello world!",
  }
  ```



ASGI는 두가지 다른 컴포넌트로 구성

* Protocol Server : 소켓을 종료하고 이를 연결 및 단위 연결 당 이벤트 메시지로 변환
* Application : 프로토콜 서버 내부의 애플리케이션은 연결당 한 번 인스턴스화되며, 발생 시 이벤트 메시지를 처리



### ASGI Development

Django Channel



### ASGI WebSocket Messages

서버와 애플리케이션간 주고 받음, 애플리케이션이 연결을 종료하면 통신 끊김



### ASGI Lifespan

```
--- SERVER
{"type" : "lifespan.startup"}
{"type" : "lifespan.shutdown"}
--- APPLICATION
{"type" : "lifespan.startup.complete"}
{"type" : "lifespan.shutdown.complete"}
```

