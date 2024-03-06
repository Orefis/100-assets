# Wybór obrazu bazowego z Pythonem
FROM python:3.9-slim

# Ustawienie katalogu roboczego w kontenerze
WORKDIR /app

# Kopiowanie plików z zależnościami
COPY requirements.txt .

# Instalacja zależności
RUN pip install --no-cache-dir -r requirements.txt

# Kopiowanie reszty plików źródłowych aplikacji
COPY . .

# Ustawienie zmiennej środowiskowej wskazującą Flaskowi, jak uruchomić aplikację
ENV FLASK_APP=app.py

# Ustawienie portu, na którym będzie nasłuchiwał kontener
EXPOSE 5000

# Uruchomienie aplikacji Flask
CMD ["flask", "run", "--host=0.0.0.0"]