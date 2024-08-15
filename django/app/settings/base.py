import environ
from pathlib import Path
from collections import OrderedDict

BASE_DIR = Path(__file__).resolve().parent.parent.parent

env = environ.Env()

environ.Env.read_env((
    BASE_DIR / '.env'
    if env.bool('RUNNING_IN_DOCKER', False)
    else BASE_DIR.parent / 'env/django/.env'
))

SECRET_KEY = env.str('SECRET_KEY')
DEBUG = env.bool('DEBUG', False)
ALLOWED_HOSTS = [x.strip() for x in env.list('ALLOWED_HOSTS', None, '')]

# Application definition

ROOT_URLCONF = 'app.urls'

INSTALLED_APPS = [
    'main.apps.MainConfig',
    'api.apps.ApiConfig',
    'blog.apps.BlogConfig',
    'articles.apps.ArticlesConfig',
    'drawings.apps.DrawingsConfig',
    'photos.apps.PhotosConfig',
    'medialibrary.apps.MedialibraryConfig',
    'content.apps.ContentConfig',
    'app.apps.AppConfig',  # Заместо django.contrib.admin должно стоять на этом месте
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django_cleanup.apps.CleanupConfig',
    'corsheaders',
    'strawberry_django',
    'imagefield',
    'mdeditor',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'app.wsgi.application'

# Database

DATABASES = {
    'default': env.db_url('DATABASE_URL')
}

# Password validation

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# Internationalization

LANGUAGE_CODE = 'ru-ru'
TIME_ZONE = 'Europe/Moscow'
USE_I18N = True
USE_TZ = True

# Static files (CSS, JavaScript, Images)

STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / 'static'
STATICFILES_DIRS = [BASE_DIR / 'staticfiles']
MEDIA_URL = 'media/'
MEDIA_ROOT = BASE_DIR / 'media'

# Default primary key field type

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
X_FRAME_OPTIONS = 'SAMEORIGIN'  # Для работы django-mdeditor

APP_ORDER = OrderedDict([
    ('content', ['Post', 'Article', 'Drawing', 'Photo']),
    ('drawings', []),
    ('photos', []),
])

# Production settings

SECURE_HSTS_SECONDS = env.int('SECURE_HSTS_SECONDS', 0)
SECURE_HSTS_INCLUDE_SUBDOMAINS = env.bool(
    'SECURE_HSTS_INCLUDE_SUBDOMAINS',
    False
)
SECURE_SSL_REDIRECT = env.bool('SECURE_SSL_REDIRECT', False)
SECURE_HSTS_PRELOAD = env.bool('SECURE_HSTS_PRELOAD', False)
SECURE_PROXY_SSL_HEADER = tuple(
    x.strip()
    for x in env.list('SECURE_PROXY_SSL_HEADER', None, '')
)
CSRF_COOKIE_SECURE = env.bool('CSRF_COOKIE_SECURE', False)
CSRF_USE_SESSIONS = env.bool('SECURE_HSTS_PRELOAD', False)
CSRF_TRUSTED_ORIGINS = [
    x.strip()
    for x in env.list('CSRF_TRUSTED_ORIGINS', None, '')
]
SESSION_COOKIE_SECURE = env.bool('SESSION_COOKIE_SECURE', False)
