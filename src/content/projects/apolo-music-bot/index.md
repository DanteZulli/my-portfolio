---
title: "Apolo Music Bot"
type: "Proyecto Personal"
description: "Un bot de música autoalojado y rico en funciones para Discord"
date: "03-15-2025"
draft: false
demoURL: ""
repoURL: "https://github.com/DanteZulli/apolo-music-bot"
---

![Logo de Apolo Music Bot](logo.png)

> **Nota:** Esta es la nueva versión de Apolo Music Bot, completamente reescrita en Java. La [versión original en Python](https://github.com/DanteZulli/apolo-music-bot-OLD) fue archivada por diversos motivos (detallados en el README.md del repositorio original).

Apolo Music Bot es un bot de música para Discord, autoalojado y rico en funciones, construido desde cero en Java, aprovechando el ecosistema de Spring y librerías como JDA y LavaPlayer. Permite reproducir canciones desde SoundCloud y otros servicios, manejar una cola de temas y controlar la reproducción mediante comandos slash.

### ✨ Funcionalidades Principales

- Conexión a canales de voz
- Reproducción de música desde varias fuentes
- Comandos slash: play, pause, resume, stop, skip, queue, help, join, leave
- Manejo avanzado de cola de reproducción
- Configuración flexible mediante archivos de propiedades o variables de entorno

### 🚀 Tecnologías utilizadas

- Java 21+
- Spring Boot
- JDA (Java Discord API)
- LavaPlayer
- FFmpeg
- Maven

### 📝 Comandos principales

- `/join`: Conecta el bot a tu canal de voz
- `/leave`: Desconecta el bot del canal de voz
- `/play <url>`: Reproduce una canción o la agrega a la cola
- `/pause`: Pausa la reproducción
- `/resume`: Reanuda la reproducción
- `/stop`: Detiene la reproducción y limpia la cola
- `/skip`: Salta a la siguiente canción
- `/queue`: Muestra la cola actual
- `/help`: Lista los comandos disponibles y su uso

### 📌 ¿Para qué lo hice?

Desarrollado 100% desde cero como una alternativa libre, manipulable y gratuita a los bots de música tradicionales.

### 🙏 Agradecimientos

Si te gusta este bot o te parece interesante el proyecto, no olvides revisar las librerías que lo hicieron posible y dejarles una estrella:

- [JDA](https://github.com/DV8FromTheWorld/JDA) - La librería Java para la API de Discord
- [LavaPlayer](https://github.com/lavalink-devs/lavaplayer) - Librería de reproducción de audio para bots de Discord
- [Spring Boot](https://spring.io/projects/spring-boot) - El framework utilizado para construir la aplicación
- [Discord Developer Portal](https://discord.com/developers/applications) - Para la creación y gestión del bot

Un agradecimiento especial a los creadores de [JMusicBot](https://github.com/jagrosh/MusicBot) y [FredBoat](https://github.com/freyacodes/archived-bot/), cuyos proyectos de código abierto fueron una gran referencia y recurso de aprendizaje.
