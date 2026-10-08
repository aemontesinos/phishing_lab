const formulario =
    document.getElementById("loginForm");


formulario.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const usuario =
            document.getElementById(
                "usuario"
            ).value;


        const clave =
            document.getElementById(
                "clave"
            ).value;


        document.getElementById(
            "resultado"
        ).innerHTML = `

            <h2>
                Simulación de seguridad
            </h2>

            <p>
                El formulario recibió los
                datos introducidos.
            </p>

            <p>
                Usuario de prueba:
                <strong>${usuario}</strong>
            </p>

            <p>
                Se detectó una contraseña
                introducida en el formulario.
            </p>

            <p>
                Esta práctica NO almacena ni
                transmite la contraseña.
            </p>

            <hr>

            <p>
                En un ataque real, un formulario
                diseñado para capturar credenciales
                podría enviar esos datos a un
                servidor controlado por un atacante.
            </p>

        `;

    }
);
