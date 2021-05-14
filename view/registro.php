
            <form class="formulario">
                <h3>Registro</h3>
                <div class="contenedor">
                    <div class="input-contenedor">
                        <i class="fas fa-envelope icon"></i>
                        <input 
                          type="text" 
                          placeholder="Usuario"
                          id="us_mail"
                          name="us_mail"
                        >
                    </div>
                    <div class="input-contenedor">
                        <i class="fas fa-key icon"></i>
                        <input 
                          type="text" 
                          placeholder="Contraseña"
                          id="us_password"
                          name="us_password"
                        >
                    </div>
                    <input type="button" value="Registrar" class="button" id="btn_registro">
                    <input type="button" value="Usuario Aleatorio" class="button mt-2" id="btn_aleatorio">
                    <p>¿Ya tienes una cuenta? <a class="link" href="login">Ingresar</a></p>
                </div>
            </form>
<script src="manager/manager_aleatorio.js"></script>
