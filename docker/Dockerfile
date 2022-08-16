FROM python:3.8-slim-buster
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN apt-get update \
    # dependencies for building Python packages
    && apt-get install -y build-essential \
    # dependencies for fetching Python packages
    && apt-get install -y git openssh-client \
    # psycopg2 dependencies
    && apt-get install -y libpq-dev \
    # Translations dependencies
    && apt-get install -y gettext \
    # For Python LDAP
    && apt-get install -y libsasl2-dev python3-dev libldap2-dev libssl-dev \
    # cleaning up unused files
    && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt /app/requirements.txt
RUN --mount=type=ssh --mount=type=cache,target=/root/.cache/pip pip install -r requirements.txt \
    --trusted-host pypi.org \ 
    --trusted-host pypi.python.org \
    --trusted-host=files.pythonhosted.org

COPY ./docker/start /start
RUN sed -i 's/\r$//g' /start
RUN chmod +x /start

COPY . /app/

WORKDIR /app/DjangoGames
