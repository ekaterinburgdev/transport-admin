all:
	docker-compose down
	docker volume rm transport-cms_src
	docker-compose up -d --build
