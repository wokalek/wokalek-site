from pathlib import Path
from collections import OrderedDict
import environ

BASE_DIR = Path(__file__).resolve().parent.parent.parent

env = environ.Env()
env.read_env(BASE_DIR / '.env')

DEBUG = env.bool('DEBUG', False)
SECRET_KEY = env.str('SECRET_KEY')
ALLOWED_HOSTS = [x.strip() for x in env.list('ALLOWED_HOSTS', None, '')]
ROOT_URLCONF = 'app.urls'
WSGI_APPLICATION = 'app.wsgi.application'

# Database

DATABASES = {'default': env.db_url('DATABASE_URL')}

# Password validation

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'
    },
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

# Production settings

SECURE_HSTS_SECONDS = env.int('SECURE_HSTS_SECONDS', 0)
SECURE_HSTS_INCLUDE_SUBDOMAINS = env.bool('SECURE_HSTS_INCLUDE_SUBDOMAINS', False)
SECURE_SSL_REDIRECT = env.bool('SECURE_SSL_REDIRECT', False)
SECURE_HSTS_PRELOAD = env.bool('SECURE_HSTS_PRELOAD', False)
SECURE_PROXY_SSL_HEADER = tuple(
    x.strip() for x in env.list('SECURE_PROXY_SSL_HEADER', None, '')
)
CSRF_COOKIE_SECURE = env.bool('CSRF_COOKIE_SECURE', False)
CSRF_USE_SESSIONS = env.bool('SECURE_HSTS_PRELOAD', False)
CSRF_TRUSTED_ORIGINS = [x.strip() for x in env.list('CSRF_TRUSTED_ORIGINS', None, '')]
SESSION_COOKIE_SECURE = env.bool('SESSION_COOKIE_SECURE', False)

# Application definition

INSTALLED_APPS = [
    # Django
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Third-party
    'django_cleanup.apps.CleanupConfig',
    'corsheaders',
    'strawberry_django',
    'imagefield',
    'mdeditor',

    # Apps
    'main.apps.MainConfig',
    'api.apps.ApiConfig',
    'blog.apps.BlogConfig',
    'articles.apps.ArticlesConfig',
    'drawings.apps.DrawingsConfig',
    'photos.apps.PhotosConfig',
    'medialibrary.apps.MedialibraryConfig',
    'content.apps.ContentConfig',
    'app.apps.AppConfig',
]

APP_ORDER = OrderedDict(
    [
        ('content', ['Post', 'Article', 'Drawing', 'Photo']),
        ('drawings', []),
        ('photos', []),
    ]
)

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
