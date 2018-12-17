FROM python:3-alpine3.8

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN apk --update add  openssl ca-certificates py-openssl wget bash linux-headers
RUN pip install --no-cache-dir -r requirements.txt \
  && pip install --upgrade pip \
  && pip install --upgrade pipenv

COPY . .
ENV FLASK_APP=server/server.py
CMD ["python", "manage.py", "start", "0.0.0.0:3000"]
