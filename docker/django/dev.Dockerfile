ARG PYTHON_VERSION

FROM python:${PYTHON_VERSION}-alpine as base

WORKDIR /django

COPY --link ./django/dev.requirements.txt .

RUN pip install --no-cache-dir -r dev.requirements.txt

FROM base as entry

ENTRYPOINT ["python", "manage.py", "runserver", "0.0.0.0:8000"]
