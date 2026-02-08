ARG PYTHON_IMAGE=alpine
ARG UV_IMAGE=alpine

FROM ghcr.io/astral-sh/uv:${UV_IMAGE} AS uv

FROM python:${PYTHON_IMAGE} AS base
ENV PYTHONUNBUFFERED=1 PYDEVD_DISABLE_FILE_VALIDATION=1
ENV UV_PYTHON_DOWNLOADS=0 UV_SYSTEM_PYTHON=1 UV_COMPILE_BYTECODE=1 UV_LINK_MODE=copy
ENV PATH="/app/.venv/bin:$PATH" VIRTUAL_ENV=/app/.venv
WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

FROM base AS deps
ARG BUILD_TARGET

COPY --from=uv /usr/local/bin/uv /bin
RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=django/uv.lock,target=uv.lock \
    --mount=type=bind,source=django/pyproject.toml,target=pyproject.toml \
    uv sync --locked --no-install-project $( [ "$BUILD_TARGET" = "production" ] && echo "--group prod --no-group dev" )
COPY django .
RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=env/django/.env,target=.env \
    uv sync --locked $( [ "$BUILD_TARGET" = "production" ] && echo "--group prod --no-group dev" )

FROM deps AS develop
ENV PYTHONDONTWRITEBYTECODE=1

ENTRYPOINT ["uv", "run", "python", "-m", "debugpy", "--listen", "0.0.0.0:5678", "manage.py", "runserver", "0.0.0.0:8000"]

FROM deps AS build

RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=env/django/.env,target=.env \
    uv run manage.py collectstatic

FROM base AS production

COPY --from=build /app .

USER appuser

ENTRYPOINT ["hypercorn", "app.asgi:application", "--bind", "0.0.0.0:8000"]
