ARG PYTHON_VERSION

FROM python:${PYTHON_VERSION}-alpine as base

ENV DJANGO_INSIDE_DOCKER=True

WORKDIR /django

COPY --link ./django/prod.requirements.txt .

RUN pip install --no-cache-dir -r prod.requirements.txt

FROM base as static

COPY --link ./env/django/.env ./django ./

RUN python manage.py collectstatic

FROM base as entry

COPY --from=static /django/static static

ENTRYPOINT ["hypercorn", "app.asgi:application", "--bind", "0.0.0.0:8000"]
