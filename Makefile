build:
	DOCKER_BUILDKIT=1 docker build --ssh default -t djangogames -f docker/Dockerfile .

django:
	docker-compose -f local.yml up django

shell:
	docker-compose -f local.yml run --rm django python manage.py shell
