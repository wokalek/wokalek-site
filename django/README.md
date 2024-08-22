# Зависимости

- pyenv — для управления версями python
- pipx — для изолированной установки пакетов pip
- poetry — для установки зависимостей, venv, .lock
- poe — для запуска задач по типу `poe dev`

# Установка

1. Установить [pyenv](https://github.com/pyenv/pyenv), поставить версию Питона, указанную в .python-version
2. Установить [pipx](https://pipx.pypa.io/stable/installation/#on-linux) `apt install pipx`
3. Установить poetry через pipx `pipx install poetry`
4. Установить плагин poetry для обновления зависимостей `pipx inject poetry poetry-plugin-up`
5. Установить плагин poetry для экспорта зависимостей в requirements.txt `pipx inject poetry poetry-plugin-export`
6. Установить poe через pipx `pipx install poe`
7. Установить зависимости `poe install`
8. vscode, выполнить команду `> Python: Select Interpreter`, указать путь до venv из команды `poetry env info`
9. Скачать `./volumes/database` для БД

# Разработка

1. Запускать через файл docker compose в корне сайта

# Поддержка

- Показать устаревшие зависимости `poe outdated`
- Обновить зависимости `poetry up`
- Экспортировать зависимости для Docker `poe export`
