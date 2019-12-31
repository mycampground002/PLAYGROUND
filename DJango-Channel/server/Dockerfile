FROM python:3.8

WORKDIR /chatbot/server

COPY requirements.txt /chatbot/server
RUN pip3 install --upgrade pip -r requirements.txt

COPY . /chatbot/server

EXPOSE 8000

CMD python3 manage.py runserver 0.0.0.0:8000
