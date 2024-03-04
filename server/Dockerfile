# Obraz bazowy z Node.js
FROM node:16

# Katalog roboczy w kontenerze
WORKDIR /app

# Kopiowanie plikÓW `package.json` i `package-lock.json` (lub `yarn.lock`)
COPY package*.json ./

# Instalacja zależności projektu
RUN npm install

# Kopiownie reszty plików źródłowych aplikacji
COPY . .

# Budowanie aplikację
RUN npm run build

# Obraz bazowy dla serwera HTTP do serwowania aplikacji
FROM nginx:stable-alpine

# Kopiowanie zbudowanej aplikację do katalogu serwera
COPY --from=0 /app/build /usr/share/nginx/html

# Ustawienie port, na którym będzie nasłuchiwał kontener
EXPOSE 80

# Uruchomienie serwera Nginx
CMD ["nginx", "-g", "daemon off;"]
