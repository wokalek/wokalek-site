ARG PYTHON_VERSION

FROM python:${PYTHON_VERSION}-slim as base

WORKDIR /django

RUN apt update && \
    apt install pipx -y && \
    pipx ensurepath && \
    pipx install poetry && \
    pipx install poethepoet

ENV PATH="$PATH:/root/.local/bin"

FROM base AS deps

COPY --link ./django/pyproject.toml ./django/poetry.lock ./

RUN poetry env use ${PYTHON_VERSION} && \
    poetry install

FROM deps as entry

ENTRYPOINT ["poe", "runserver"]
