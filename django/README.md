# Инструменты

- [uv](https://docs.astral.sh/uv/) — для управления версией python, venv, зависимостей, .lock
- [poe](https://github.com/nat-n/poethepoet) — для запуска задач, например `poe outdated`

# Установка

- `uv tool install poethepoet` — установить poe
- `uv sync` — установить python и зависимости в .venv

# Обновление

- `poe outdated` — посмотреть устаревшие
- `uv add django==6.0.0` (пример) — установка/обновление на конкретную версию

# Разработка

`/compose.dev.yml`

Чтобы разрешались зависимости в vscode, `> Python: Выбор интерпретатора`, указать /django/.venv/bin/python

# Локальный запуск

Отсутствует.
