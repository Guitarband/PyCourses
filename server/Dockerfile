FROM python:3.8-slim

WORKDIR /app

COPY . .

EXPOSE 8080

ENV NAME World

CMD ["python3", "scripts/pythonExecuter.py", "code/code.py"]