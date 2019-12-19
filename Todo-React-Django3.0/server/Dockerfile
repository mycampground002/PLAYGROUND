FROM python:3.8

WORKDIR /app/server

COPY requirements.txt /app/server
RUN pip3 install --upgrade pip -r requirements.txt

COPY . /app/server

EXPOSE 8000

CMD python3 manage.py runserver 0.0.0.0:8000