FROM python:3.11-alpine

RUN mkdir -p /var/app
WORKDIR /var/app

COPY . /var/app
RUN pip3 install -r requirement.txt

WORKDIR /var/app/

CMD ["python", "manage.py", "migrate"]
CMD ["python", "manage.py", "runserver"]