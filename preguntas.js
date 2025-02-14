let allQuestions = [
    { question: "¿Qué hace el atajo 'Tabulador'?",
      options: ["mover la ventana activa para supervisarla", "avanzar por las opciones.", "abrir la búsqueda del símbolo del sistema."],
      answer: "avanzar por las opciones." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + Tabulador'?",
      options: ["copiar los elementos seleccionados en el Portapapeles.", "abre la Vista de tareas.", "subir un nivel en la ruta de acceso de la carpeta."],
      answer: "abre la Vista de tareas." },

    { question: "¿Qué hace el atajo 'Ctrl + F'?",
      options: ["abrir la búsqueda del símbolo del sistema.", "abre el Área de trabajo de Windows Ink.", "mostrar los elementos de la lista activa."],
      answer: "abrir la búsqueda del símbolo del sistema." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + Esc'?",
      options: ["ejecuta el comando de la letra subrayada en las aplicaciones.", "cambiar el modo de pantalla completa de la ventana activa.", "salir de la lupa."],
      answer: "salir de la lupa." },

    { question: "¿Qué hace el atajo 'Ctrl + Mayús + N'?",
      options: ["crea una nueva carpeta en el escritorio o el Explorador de archivos.", "mostrar los elementos de la lista activa.", "abre el Explorador de archivos."],
      answer: "crea una nueva carpeta en el escritorio o el Explorador de archivos." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + Ctrl + Flecha derecha'?",
      options: ["cambiar al escritorio virtual a la derecha.", "cambiar el tamaño del menú Inicio.", "avanzar."],
      answer: "cambiar al escritorio virtual a la derecha." },

    { question: "¿Qué hace el atajo 'Ctrl + Mayús'?",
      options: ["avanzar a través de las pestañas.", "abre la Vista de tareas.", "cambiar distribución del teclado."],
      answer: "cambiar distribución del teclado." },

    { question: "¿Qué hace el atajo 'Tecla Windows  + signo menos (-)'?",
      options: ["alejar con la lupa.", "realizar una captura de pantalla completa en la carpeta Capturas de", "comando Abrir ejecución."],
      answer: "alejar con la lupa." },

    { question: "¿Qué hace el atajo 'Ctrl + Tecla de dirección arriba'?",
      options: ["ver aplicaciones abiertas.", "mover el cursor al principio del párrafo anterior", "retroceder por las opciones."],
      answer: "mover el cursor al principio del párrafo anterior" },

    { question: "¿Qué hace el atajo 'Tecla  Windows + Ctrl + Flecha izquierda'?",
      options: ["establecer el foco en una sugerencia de Windows 10 cuando sea aplicable.", "cambiar al escritorio virtual de la izquierda.", "desplazarse por las ventanas abiertas."],
      answer: "cambiar al escritorio virtual de la izquierda." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + J'?",
      options: ["desplazarse por las ventanas abiertas.", "establecer el foco en una sugerencia de Windows 10 cuando sea aplicable.", "establecer el foco en una sugerencia de Windows 10 cuando sea aplicable."],
      answer: "establecer el foco en una sugerencia de Windows 10 cuando sea aplicable." },

    { question: "¿Qué hace el atajo 'Alt + Flecha derecha'?",
      options: ["mostrar los elementos de la lista activa.", "ver carpeta siguiente.", "comando Abrir ejecución."],
      answer: "ver carpeta siguiente." },

    { question: "¿Qué hace el atajo 'Teclas de dirección izquierda o derecha'?",
      options: ["cambiar el tamaño del menú Inicio.", "mover el cursor a la izquierda o a la derecha en la línea", "cambiar a la última ventana activa de la aplicación en la"],
      answer: "mover el cursor a la izquierda o a la derecha en la línea" },

    { question: "¿Qué hace el atajo 'Alt + Letra subrayada'?",
      options: ["comprueba o desactiva la opción que tiene el foco.", "abrir la búsqueda del símbolo del sistema.", "ejecuta el comando de la letra subrayada en las aplicaciones."],
      answer: "ejecuta el comando de la letra subrayada en las aplicaciones." },

    { question: "¿Qué hace el atajo 'Ctrl + A'?",
      options: ["ejecuta el comando de la letra subrayada en las aplicaciones.", "cambiar el modo de pantalla completa de la ventana activa.", "seleccionar todo el contenido de la línea actual."],
      answer: "seleccionar todo el contenido de la línea actual." },

    { question: "¿Qué hace el atajo 'Alt + Tabulador'?",
      options: ["avanzar a través de las pestañas.", "abre la configuración de Accesibilidad.", "cambia entre las aplicaciones abiertas mientras presionas tabulador varias veces."],
      answer: "cambia entre las aplicaciones abiertas mientras presionas tabulador varias veces." },

    { question: "¿Qué hace el atajo 'Tecla Windows  + E'?",
      options: ["abre el Explorador de archivos.", "cuadro de diálogo Mostrar propiedades del sistema.", "cambia entre los escritorios virtuales que creaste a la"],
      answer: "abre el Explorador de archivos." },

    { question: "¿Qué hace el atajo 'Ctrl + teclas de dirección'?",
      options: ["copiar los elementos seleccionados en el Portapapeles.", "cambiar el tamaño del menú Inicio.", "subir un nivel en la ruta de acceso de la carpeta."],
      answer: "cambiar el tamaño del menú Inicio." },

    { question: "¿Qué hace el atajo 'Barra espaciadora'?",
      options: ["cerrar el escritorio virtual activo.", "active o desactive la casilla si la opción activa es una casilla.", "muestra la contraseña escrita en la pantalla de inicio de sesión."],
      answer: "active o desactive la casilla si la opción activa es una casilla." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + M'?",
      options: ["desplazarse por los elementos de la pantalla.", "minimizar todas las ventanas.", "subir un nivel en la ruta de acceso de la carpeta."],
      answer: "minimizar todas las ventanas." },

    { question: "¿Qué hace el atajo 'Tecla de  Windows + Tecla de flecha izquierda'?",
      options: ["desplazarse por los elementos de la pantalla.", "aplicación Acoplar o ventana a la izquierda.", "cambia entre los escritorios virtuales que creaste a la"],
      answer: "aplicación Acoplar o ventana a la izquierda." },

    { question: "¿Qué hace el atajo 'Ctrl + Mayús + Número (1-8)'?",
      options: ["vista de carpeta Cambios.", "cambiar la opción de entrada seleccionada anterior.", "abre otra instancia como administrador de la"],
      answer: "vista de carpeta Cambios." },

    { question: "¿Qué hace el atajo 'Tecla windows  + signo más (+)'?",
      options: ["acerca con la lupa.", "crear un escritorio virtual.", "abre otra instancia como administrador de la"],
      answer: "acerca con la lupa." },

    { question: "¿Qué hace el atajo 'Teclas de dirección'?",
      options: ["seleccione un botón si la opción activa es un grupo de botones de opción.", "cambie el foco a la barra de direcciones.", "Windows 10 Maximiza o minimiza las ventanas"],
      answer: "seleccione un botón si la opción activa es un grupo de botones de opción." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + X'?",
      options: ["abrir el menú contextual de la ventana activa.", "abrir el menú Vínculo rápido.", "ver carpeta siguiente."],
      answer: "abrir el menú Vínculo rápido." },

    { question: "¿Qué hace el atajo 'Tecla Windows  + G'?",
      options: ["mover la ventana activa para supervisarla", "inicia la aplicación Barra de juegos.", "abrir la búsqueda del símbolo del sistema."],
      answer: "inicia la aplicación Barra de juegos." },

    { question: "¿Qué hace el atajo 'Alt + Tecla de dirección derecha'?",
      options: ["avanzar.", "desplazarse por los elementos de la pantalla.", "cambia entre los escritorios virtuales que creaste a la"],
      answer: "avanzar." },

    { question: "¿Qué hace el atajo 'Ctrl + Tabulador'?",
      options: ["abre otra instancia de una aplicación desde la barra de", "ejecuta el comando de la letra subrayada en las aplicaciones.", "permite avanzar por las pestañas."],
      answer: "permite avanzar por las pestañas." },

    { question: "¿Qué hace el atajo 'Mayús + teclas de dirección'?",
      options: ["cerrar el escritorio virtual activo.", "muestra la contraseña escrita en la pantalla de inicio de sesión.", "seleccionar varios elementos."],
      answer: "seleccionar varios elementos." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + Ctrl + Q'?",
      options: ["desplazarse por las ventanas del grupo desde la", "abrir Asistencia rápida.", "bloquea el equipo."],
      answer: "abrir Asistencia rápida." },

    { question: "¿Qué hace el atajo 'Ctrl + C (o Ctrl + Insertar)'?",
      options: ["abrir Configuración.", "abrir Asistencia rápida.", "copiar los elementos seleccionados en el Portapapeles."],
      answer: "copiar los elementos seleccionados en el Portapapeles." },

    { question: "¿Qué hace el atajo 'Tecla de  Windows + Mayús + Tecla de flecha derecha'?",
      options: ["mover la ventana activa para supervisarla", "ver carpeta siguiente.", "abrir el menú contextual de la ventana activa."],
      answer: "mover la ventana activa para supervisarla" },

    { question: "¿Qué hace el atajo 'Retroceso'?",
      options: ["ojear temporalmente el escritorio.", "expande todas las carpetas del árbol en el panel de navegación.", "abrir una carpeta de un nivel superior si se selecciona una carpeta en el cuadro de"],
      answer: "abrir una carpeta de un nivel superior si se selecciona una carpeta en el cuadro de" },

    { question: "¿Qué hace el atajo 'Tecla  Windows + K'?",
      options: ["abre la configuración de Conectar.", "seleccionar todo el contenido de la línea actual.", "subir una pantalla."],
      answer: "abre la configuración de Conectar." },

    { question: "¿Qué hace el atajo 'Tecla Windows  + coma (,)'?",
      options: ["mostrar y ocultar el escritorio.", "ojear temporalmente el escritorio.", "Windows 10 Maximiza o minimiza las ventanas"],
      answer: "ojear temporalmente el escritorio." },

    { question: "¿Qué hace el atajo 'Teclas de dirección'?",
      options: ["seleccione un botón de la configuración activa.", "comprueba o desactiva la opción que tiene el foco.", "abrir la búsqueda del símbolo del sistema."],
      answer: "seleccione un botón de la configuración activa." },

    { question: "¿Qué hace el atajo 'Tabulador'?",
      options: ["avanza por la configuración.", "cierra el escritorio virtual que estás usando.", "foco en la barra de direcciones."],
      answer: "avanza por la configuración." },

    { question: "¿Qué hace el atajo 'Re Pág'?",
      options: ["cambiar al escritorio virtual de la izquierda.", "mover el cursor una página hacia arriba.", "retrocede por la configuración."],
      answer: "mover el cursor una página hacia arriba." },

    { question: "¿Qué hace el atajo 'Tecla de  Windows + Mayús + Tecla de dirección izquierda'?",
      options: ["mostrar los elementos de la lista activa.", "abre la vista de tareas.", "mover la ventana activa para"],
      answer: "mover la ventana activa para" },

    { question: "¿Qué hace el atajo 'Tecla  Windows + D'?",
      options: ["mostrar y ocultar el escritorio.", "cuadro de diálogo Mostrar propiedades del sistema.", "agregar un escritorio virtual."],
      answer: "mostrar y ocultar el escritorio." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + Ctrl + Número (0-9)'?",
      options: ["cambiar a la última ventana activa de la aplicación en la", "abre la Vista de tareas.", "avanzar por las opciones."],
      answer: "cambiar a la última ventana activa de la aplicación en la" },

    { question: "¿Qué hace el atajo 'Ctrl + clic en un botón de la barra de tareas agrupadas'?",
      options: ["desplazarse por las ventanas del grupo", "cambiar entre escritorios virtuales que creaste a la", "agregar un escritorio virtual."],
      answer: "desplazarse por las ventanas del grupo" },

    { question: "¿Qué hace el atajo 'Mayús + botón derecho de la aplicación'?",
      options: ["desplazarse por las ventanas del grupo desde la", "mostrar el menú de la ventana de la aplicación desde la", "bloquea el equipo."],
      answer: "mostrar el menú de la ventana de la aplicación desde la" },

    { question: "¿Qué hace el atajo 'Ctrl + Inicio'?",
      options: ["desplácese hasta la parte superior de la consola.", "desplazarse por los elementos de la pantalla.", "panel de vista previa de pantalla."],
      answer: "desplácese hasta la parte superior de la consola." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + Y'?",
      options: ["mostrar los elementos de la lista activa.", "salta a la posición de tabulación.", "cambiar la entrada entre el escritorio y Mixed Reality."],
      answer: "cambiar la entrada entre el escritorio y Mixed Reality." },

    { question: "¿Qué hace el atajo 'Alt + Entrar'?",
      options: ["abrir el menú contextual del elemento seleccionado.", "abrir la configuración de Propiedades del elemento seleccionado.", "desplazarse por el historial de comandos de la sesión actual."],
      answer: "abrir la configuración de Propiedades del elemento seleccionado." },

    { question: "¿Qué hace el atajo 'Ctrl + M'?",
      options: ["abre la lista de accesos directos de la aplicación en", "seleccione un botón de la configuración activa.", "inicia el modo de marca."],
      answer: "inicia el modo de marca." },

    { question: "¿Qué hace el atajo 'F11'?",
      options: ["abre la Vista de tareas.", "avanzar a través de las pestañas.", "cambiar el modo de pantalla completa de la ventana activa."],
      answer: "cambiar el modo de pantalla completa de la ventana activa." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + A'?",
      options: ["cambiar distribución del teclado.", "abre el centro de actividades.", "abre el centro de actividades."],
      answer: "abre el centro de actividades." },

    { question: "¿Qué hace el atajo 'Ctrl + F5 (o) Ctrl + R'?",
      options: ["mover el cursor una página hacia abajo.", "actualizar la ventana actual.", "active o desactive la casilla si la opción activa es una casilla."],
      answer: "actualizar la ventana actual." },

    { question: "¿Qué hace el atajo 'Alt + Barra espaciadora'?",
      options: ["acerca con la lupa.", "abrir el menú contextual de la ventana activa.", "mostrar el"],
      answer: "abrir el menú contextual de la ventana activa." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + L'?",
      options: ["mover la ventana activa para supervisarla", "abrir la búsqueda del símbolo del sistema.", "bloquea el equipo."],
      answer: "bloquea el equipo." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + S (o Q)'?",
      options: ["abrir búsqueda.", "abre la Vista de tareas.", "seleccionar barra de direcciones."],
      answer: "abrir búsqueda." },

    { question: "¿Qué hace el atajo 'Alt + F8'?",
      options: ["desplazarse por los elementos de la pantalla.", "muestra la contraseña escrita en la pantalla de inicio de sesión.", "cambia entre los escritorios virtuales que creaste a la"],
      answer: "muestra la contraseña escrita en la pantalla de inicio de sesión." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + Inicio'?",
      options: ["expande todas las carpetas del árbol en el panel de navegación.", "minimizar o maximizar todo excepto la ventana del escritorio activa.", "mover el cursor una página hacia arriba."],
      answer: "minimizar o maximizar todo excepto la ventana del escritorio activa." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + I'?",
      options: ["abrir Configuración.", "abre el centro de actividades.", "cambiar a la última ventana activa de la aplicación en la"],
      answer: "abrir Configuración." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + H'?",
      options: ["función de dictado abierto.", "cierra el escritorio virtual que estás usando.", "Minimizar ventanas de la aplicación."],
      answer: "función de dictado abierto." },

    { question: "¿Qué hace el atajo 'Alt + letra subrayada'?",
      options: ["establecer el foco en una sugerencia de Windows 10 cuando sea aplicable.", "desplazarse por las ventanas abiertas.", "ejecute el comando (o seleccione la opción) que se usa con esa letra."],
      answer: "ejecute el comando (o seleccione la opción) que se usa con esa letra." },

    { question: "¿Qué hace el atajo 'Mayús + F10'?",
      options: ["avanzar.", "abrir el menú contextual del elemento seleccionado.", "cambiar el tamaño del menú Inicio."],
      answer: "abrir el menú contextual del elemento seleccionado." },

    { question: "¿Qué hace el atajo 'Ctrl + V (o Mayús + Insertar)'?",
      options: ["seleccione un botón de la configuración activa.", "abre la lista de accesos directos de la aplicación en", "pegar contenido del Portapapeles."],
      answer: "pegar contenido del Portapapeles." },

    { question: "¿Qué hace el atajo 'Tecla Windows  + Mayús + Número (0-9)'?",
      options: ["comprueba o desactiva la opción que tiene el foco.", "permite retroceder por las pestañas.", "abre otra instancia de la aplicación en la posición de"],
      answer: "abre otra instancia de la aplicación en la posición de" },

    { question: "¿Qué hace el atajo 'Tecla  Windows + Ctrl + Barra espaciadora'?",
      options: ["abre la Vista de tareas.", "seleccionar barra de direcciones.", "cambiar la opción de entrada seleccionada anterior."],
      answer: "cambiar la opción de entrada seleccionada anterior." },

    { question: "¿Qué hace el atajo 'Ctrl + rueda del mouse'?",
      options: ["agregar un escritorio virtual.", "cambiar el archivo de vista y la carpeta.", "cambiar entre escritorios virtuales que creaste a la"],
      answer: "cambiar el archivo de vista y la carpeta." },

    { question: "¿Qué hace el atajo 'Tecla de  Windows + Tecla de flecha derecha'?",
      options: ["cambiar el tamaño del menú Inicio.", "aplicación Acoplar o ventana a la derecha.", "avanzar."],
      answer: "aplicación Acoplar o ventana a la derecha." },

    { question: "¿Qué hace el atajo 'Ctrl + Alt + Tabulador'?",
      options: ["ver aplicaciones abiertas.", "salta a la posición de tabulación.", "mover el cursor a la izquierda o a la derecha en la línea"],
      answer: "ver aplicaciones abiertas." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + E'?",
      options: ["ejecute el comando (o seleccione la opción) que se usa con esa letra.", "abre el Explorador de archivos.", "active o desactive la casilla si la opción activa es una casilla."],
      answer: "abre el Explorador de archivos." },

    { question: "¿Qué hace el atajo 'Tecla de  Windows + Mayús + Tecla de flecha arriba'?",
      options: ["agregar un escritorio virtual.", "estirar la ventana del escritorio a la parte", "cuadro de diálogo Mostrar propiedades del sistema."],
      answer: "estirar la ventana del escritorio a la parte" },

    { question: "¿Qué hace el atajo 'Alt + Flecha izquierda (o Retroceso)'?",
      options: ["ver la carpeta anterior.", "seleccionar todo el contenido de la línea actual.", "subir una pantalla."],
      answer: "ver la carpeta anterior." },

    { question: "¿Qué hace el atajo 'F4'?",
      options: ["cambie el foco a la barra de direcciones.", "abre la vista de tareas.", "mostrar los elementos de la lista activa."],
      answer: "cambie el foco a la barra de direcciones." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + O'?",
      options: ["desplazarse por los elementos de la pantalla.", "bloquear la orientación del dispositivo.", "panel de vista previa de pantalla."],
      answer: "bloquear la orientación del dispositivo." },

    { question: "¿Qué hace el atajo 'Mayús + botón derecho de la aplicación agrupada'?",
      options: ["mostrar el menú de la ventana del grupo", "mostrar los elementos de la lista activa.", "abre el Explorador de archivos."],
      answer: "mostrar el menú de la ventana del grupo" },

    { question: "¿Qué hace el atajo 'Ctrl + E (o F)'?",
      options: ["desplácese hasta la parte superior de la ventana.", "seleccione el cuadro de búsqueda.", "ejecute el comando (o seleccione la opción) que se usa con esa letra."],
      answer: "seleccione el cuadro de búsqueda." },

    { question: "¿Qué hace el atajo 'Alt + Av Pág'?",
      options: ["desplazarse por el historial de comandos de la sesión actual.", "bajar una pantalla.", "abrir el menú contextual del elemento seleccionado."],
      answer: "bajar una pantalla." },

    { question: "¿Qué hace el atajo 'Alt + letra de subrayado'?",
      options: ["abre el Explorador de archivos.", "acciones de la configuración identificada por la letra.", "desplazarse por las ventanas abiertas."],
      answer: "acciones de la configuración identificada por la letra." },

    { question: "¿Qué hace el atajo 'Ctrl + Mayús + clic en el botón de la aplicación'?",
      options: ["cambiar el modo de pantalla completa de la ventana activa.", "ejecutar aplicación como administrador desde la", "seleccionar todo el contenido de la línea actual."],
      answer: "ejecutar aplicación como administrador desde la" },

    { question: "¿Qué hace el atajo 'Tecla  Windows + V'?",
      options: ["abrir la bandeja del Portapapeles.", "abre otra instancia de una aplicación desde la barra de", "ejecuta el comando de la letra subrayada en las aplicaciones."],
      answer: "abrir la bandeja del Portapapeles." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + Ctrl + D'?",
      options: ["muestra la contraseña escrita en la pantalla de inicio de sesión.", "crear un escritorio virtual.", "cerrar el escritorio virtual activo."],
      answer: "crear un escritorio virtual." },

    { question: "¿Qué hace el atajo 'Ctrl + Mayús + Tabulador'?",
      options: ["ejecute el comando (o seleccione la opción) que se usa con esa letra.", "cambiar el tamaño del menú Inicio.", "retroceder a través de las pestañas."],
      answer: "retroceder a través de las pestañas." },

    { question: "¿Qué hace el atajo 'Alt + Flecha arriba'?",
      options: ["mostrar los elementos de la lista activa.", "comando Abrir ejecución.", "subir un nivel en la ruta de acceso de la carpeta."],
      answer: "subir un nivel en la ruta de acceso de la carpeta." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + Barra espaciadora'?",
      options: ["avanzar.", "cambiar el tamaño del menú Inicio.", "cambiar la distribución del teclado y el idioma de entrada."],
      answer: "cambiar la distribución del teclado y el idioma de entrada." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + Pausa'?",
      options: ["cuadro de diálogo Mostrar propiedades del sistema.", "desplácese hasta la parte superior de la ventana.", "abre la aplicación en posición numérica en la barra de tareas."],
      answer: "cuadro de diálogo Mostrar propiedades del sistema." },

    { question: "¿Qué hace el atajo 'Ctrl + Barra espaciadora'?",
      options: ["abre la configuración de Conectar.", "habilita o deshabilita el IME chino.", "habilita o deshabilita el IME chino."],
      answer: "habilita o deshabilita el IME chino." },

    { question: "¿Qué hace el atajo 'Ctrl + Mayús + Tecla de dirección'?",
      options: ["abrir el menú contextual de la ventana activa.", "seleccionar bloque de texto.", "ver carpeta siguiente."],
      answer: "seleccionar bloque de texto." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + P'?",
      options: ["abre configuración de Project.", "abre la vista de tareas.", "abrir una carpeta de un nivel superior si se selecciona una carpeta en el cuadro de"],
      answer: "abre configuración de Project." },

    { question: "¿Qué hace el atajo 'F5'?",
      options: ["agregar un escritorio virtual.", "cuadro de diálogo Mostrar propiedades del sistema.", "actualizar la vista actual del Explorador de archivos."],
      answer: "actualizar la vista actual del Explorador de archivos." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + Ctrl + F'?",
      options: ["copiar los elementos seleccionados en el Portapapeles.", "subir un nivel en la ruta de acceso de la carpeta.", "abre la búsqueda del dispositivo en una red de dominio."],
      answer: "abre la búsqueda del dispositivo en una red de dominio." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + Mayús + M'?",
      options: ["restaurar ventanas minimizadas en el escritorio.", "abre el Área de trabajo de Windows Ink.", "mostrar los elementos de la lista activa."],
      answer: "restaurar ventanas minimizadas en el escritorio." },

    { question: "¿Qué hace el atajo 'Ctrl + Teclas de dirección (para seleccionar) + Barra espaciadora'?",
      options: ["selecciona varios elementos en", "abre la vista de tareas.", "inicia la aplicación Centro de opiniones."],
      answer: "selecciona varios elementos en" },

    { question: "¿Qué hace el atajo 'Alt + P'?",
      options: ["panel de vista previa de pantalla.", "abre otra instancia como administrador de la", "crear un escritorio virtual."],
      answer: "panel de vista previa de pantalla." },

    { question: "¿Qué hace el atajo 'Mayús + clic en el botón de la aplicación'?",
      options: ["avanza por la configuración.", "abre la configuración de Conectar.", "abre otra instancia de una aplicación desde la barra de"],
      answer: "abre otra instancia de una aplicación desde la barra de" },

    { question: "¿Qué hace el atajo 'Mayús + Tabulador'?",
      options: ["abrir el menú contextual del elemento seleccionado.", "retrocede por la configuración.", "desplazarse por el historial de comandos de la sesión actual."],
      answer: "retrocede por la configuración." },

    { question: "¿Qué hace el atajo 'Barra espaciadora'?",
      options: ["comprueba o desactiva la opción que tiene el foco.", "cambiar distribución del teclado.", "abre el centro de actividades."],
      answer: "comprueba o desactiva la opción que tiene el foco." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + Ctrl + Flecha derecha'?",
      options: ["cuadro de diálogo Mostrar propiedades del sistema.", "cambia entre los escritorios virtuales que creaste a la", "cambia entre los escritorios virtuales que creaste a la"],
      answer: "cambia entre los escritorios virtuales que creaste a la" },

    { question: "¿Qué hace el atajo 'Tecla  Windows + Ctrl + F4'?",
      options: ["cerrar el escritorio virtual activo.", "ejecute el comando (o seleccione la opción) que se usa con esa letra.", "cambiar el tamaño del menú Inicio."],
      answer: "cerrar el escritorio virtual activo." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + Ctrl + Mayús + B'?",
      options: ["reactivar el dispositivo cuando esté negro o una pantalla en", "estirar la ventana del escritorio a la parte", "copiar los elementos seleccionados en el Portapapeles."],
      answer: "reactivar el dispositivo cuando esté negro o una pantalla en" },

    { question: "¿Qué hace el atajo 'Ctrl + Tecla de dirección abajo'?",
      options: ["ejecute el comando (o seleccione la opción) que se usa con esa letra.", "active o desactive la casilla si la opción activa es una casilla.", "mover la pantalla una línea hacia abajo."],
      answer: "mover la pantalla una línea hacia abajo." },

    { question: "¿Qué hace el atajo 'F4'?",
      options: ["mostrar los elementos de la lista activa.", "ojear temporalmente el escritorio.", "desplazarse por las ventanas abiertas."],
      answer: "mostrar los elementos de la lista activa." },

    { question: "¿Qué hace el atajo 'Tecla  Windows + B'?",
      options: ["establecer el área de notificación de foco en la barra de tareas.", "abre el Área de trabajo de Windows Ink.", "mostrar los elementos de la lista activa."],
      answer: "establecer el área de notificación de foco en la barra de tareas." },

    { question: "¿Qué hace el atajo 'Tecla de  Windows + Tecla de flecha abajo'?",
      options: ["abre la Vista de tareas.", "seleccionar barra de direcciones.", "Minimizar ventanas de la aplicación."],
      answer: "Minimizar ventanas de la aplicación." },

    { question: "¿Qué hace el atajo 'Tecla Windows  + R'?",
      options: ["ejecuta el comando de la letra subrayada en las aplicaciones.", "comando Abrir ejecución.", "cambiar el modo de pantalla completa de la ventana activa."],
      answer: "comando Abrir ejecución." },

];