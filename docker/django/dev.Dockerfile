ARG PYTHON_VERSION

FROM python:${PYTHON_VERSION}-alpine AS base

ENV RUNNING_IN_DOCKER=True

WORKDIR /django

COPY --link ./django/dev.requirements.txt .

RUN pip install --no-cache-dir -r dev.requirements.txt

FROM base AS static

COPY --link ./env/django/.env ./django ./

RUN python manage.py collectstatic

FROM base AS entry

COPY --from=static /django/static /static

ENTRYPOINT ["python", "manage.py", "runserver", "0.0.0.0:8000"]
