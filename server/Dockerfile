FROM python:3-alpine3.8

WORKDIR /usr/app

COPY requirements.txt ./
RUN apk --update add  openssl ca-certificates py-openssl wget bash linux-headers
RUN pip install --no-cache-dir -r requirements.txt \
  && pip install --upgrade pip \
  && pip install --upgrade pipenv

COPY . .
EXPOSE 5000
ENV FLASK_APP=server.py
CMD ["python3","server.py"]
