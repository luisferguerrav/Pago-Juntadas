## Casos de Prueba - Pago juntadas

## Informacion del Proyecto 
    -**Proyecto:** Calculadora de gastos compartidos 
    -**Version:** 1.0.0
    -**Responsable:** Luis Fernando Guerra
    -**Tecnologias:** React + JavaScript


----    


## Casos de Prueba 

### TC-001: Agregar persona con datos validos 

    -**Tipo:** Positivo
    -**Objetivo:** Evaluar que se permita agregar persona con los datos correspondientes 

    -**Precondiciones:** 
        -La aplicacion esta cargada
        -La tabla esta vacia o con datos previos 

    -**Pasos:**
        1. Escribir un nombre en el campo de nombre
        2. Escribir un monto en el campo de gasto
        3. Hacer click en el boton de "Agregar"

    -**Resultado esperado:** El sistema agrega el nombre  y monto establecido en una tabla 

    -**Prioridad:** ALTA

    -**Estado de CP:** CORRECTO 



### TC-002: Agregar persona sin rellenar el Campo de Nombre


    -**Tipo:** Negativo 
    -**Objetivo:** Validar que el sistema impida guardar contenido si el campo Nombre no esta completo


    -**Precondiciones:**
        -La aplicacion esta cargada
        -La tabla esta vacia o con datos previos 

    -**Pasos:**
        1. No poner ningun dato en el campo Nombre
        2. Escribir un monto en el campo Gasto
        3. Hacer click en el boton "Agregar"

    -**Resultado esperado:** El sistema no agrega ningun nuevo dato a la tabla y avisa que hay que rellenar los campos correspondientes 

    -**Prioridad:** ALTA 
    -**Estado de CP:** CORRECTO 

    //NOTA: al darle click al boton "Agregar" es cierto que no agregar contenido a la tabla pero no da ningun aviso de que hay que rellenar el campo. 


### TC-003: Agregar persona sin rellenar el campo de Gasto

    -**Tipo:** Negativo
    -**Objetivo:**  Validar que el sistema impida guardar contenido si el campo Gasto no esta completo 
    -**Precondiciones:** 
        -La aplicacion esta cargada
        -La tabla esta vacia o con datos previos

    -**Pasos:**
        1. Escribir un nombre en el campo correspondiente
        2. No poner ningun dato en el campo Gasto
        3. Hacer click en el boton "Agregar"

    -**Resultado esperado:** El sistema no agrega ningun nuevo dato a la tabla y avisa que hay que rellenar los campos correspondientes

    -**Prioridad:**  ALTA
    -**Estado de CP:** FALLO 

    //NOTA: al no poner ningun dato en el campo de gasto el sistema automaticamente agrega a la persona pero le pone 0 en el campo de gasto 


### TC-004: Agregar persona sin llenar ninguno de los dos campos 

    -**Tipo:** Negativo 
    -**Objetivo:**  Validar que el sistema impida guardar contenido si ningun campo esta puesto 

    -**Precondiciones:**
        -La aplicacion esta cargada
        -La tabla esta vacia o con datos previos

    -**Pasos:**
        1. No escribir nada en el campo Nombre
        2. No escribir nada en el campo Gasto 
        3. Hacer click en el boton "Agregar"

    -**Resultado esperado:** El sitema no agrega nada a la tabla y da el aviso de que primero hay que rellenar los campos correspondientes

    -**Prioridad:** ALTA  
    -**Estado de CP:** CORRECTO 

    //NOTA: Si el sistema no agrega ningun nuevo contenido a la tabla pero en ningun momento avisa que hay que rellenar los campos primero 


### TC-005: Agregar persona con monto negativo 

    -**Tipo:** Negativo 
    -**Objetivo:**  Validar que el sistema no permita agregar a la persona si su monto es negativo 
    -**Precondiciones:**
        -La aplicacion esta cargada
        -La tabla esta vacia o con datos previos

    -**Pasos:**
        1. Escribir un nombre en el campo de nombre
        2. Escribir un monto negativo en el campo de gasto
        3. Hacer click en el boton de "Agregar"

    -**Resultado esperado:** El sistema no permite agregar montos negativos asi siendo que el monto minimo que se pueda agregar es 0 

    -**Prioridad:** ALTA
    -**Estado de CP:** CORRECTO  


### TC-006: Eliminar Persona de la tabla 

    -**Tipo:** Positivo 
    -**Objetivo:**  Evaluar que el sistema permita eliminar una persona de la tabla correctamente 

    -**Precondiciones:**
        -La aplicacion esta cargada
        -La tabla tiene datos previos

    -**Pasos:**
        1. Escribir un nombre en el campo de nombre
        2. Escribir un monto en el campo de gasto
        3. Hacer click en el boton de "Agregar"
        4. Seleccionar cualquier persona
        5. Hacer click en el boton eliminar 

    -**Resultado esperado:** El sistema permite eliminar correctamente al la persona 

    -**Prioridad:** ALTA
    -**Estado de CP:** CORRECTO 


### TC-007: Eliminar persona sin antes seleccionarlo 

    -**Tipo:** Negativo 
    -**Objetivo:**  Evaluar si el sistema elimina un campo de la tabla sin antes seleccionar uno 

    -**Precondiciones:**
        -La aplicacion esta cargada
        -La tabla tiene datos previos

    -**Pasos:**
        1. Escribir un nombre en el campo de nombre
        2. Escribir un monto en el campo de gasto
        3. Hacer click en el boton de "Agregar"
        4. Hacer click en el boton eliminar 

    -**Resultado esperado:** EL sistema no borra nada de la tabla y avisa que para eliminar algo primero debe seleccionar una persona 

    -**Prioridad:** MEDIA 
    -**Estado de CP:** CORRECTO 

    //**NOTA:**el sistema no elimina ninguna persona pero no avisa que para eliminar primero debe seleccionar una persona 

### TC-008: Eliminar dos personas a la vez 

    -**Tipo:** Positivo 
    -**Objetivo:**  Evaluar si el sistema permite eliminar dos personas a la vez 

    -**Precondiciones:**
        -La aplicacion esta cargada
        -La tabla tiene datos previos
        -Minimo dos personas en la tabla 

    -**Pasos:**
        1. Escribir un nombre en el campo de nombre
        2. Escribir un monto en el campo de gasto
        3. Hacer click en el boton de "Agregar"
        4. Seleccionar dos personas 
        5. Hacer click en el boton eliminar 

    -**Resultado esperado:** El sistema permite correctamente eliminar a las dos personas de la tabla 
    -**Prioridad:**  BAJA
    -**Estado de CP:** FALLO 

    //NOTA: El sistema solo permite seleccionar una persona para elimiar y eso no permite eliminar dos o mas personas a la vez NO es fatal pero esta ahi 


### TC-009: Hacer divison de Gastos correctamente

    -**Tipo:** Positivo 
    -**Objetivo:**  Validar que el sistema hace la divison de los gastos correctamente 

    -**Precondiciones:**
        -La aplicacion esta cargada
        -La tabla tiene datos previos

    -**Pasos:**
        1. Escribir un nombre en el campo de nombre
        2. Escribir un monto en el campo de gasto
        3. Hacer click en el boton de "Agregar"
        4. Hacer click en el boton de "Calcular"

    -**Resultado esperado:** El sistema hace la divison de los gastos correctamente desglozando los pagos uno por uno 

    -**Prioridad:** ALTA
    -**Estado de CP:** CORRECTO  

    

### TC-10: Calcular division luego de haber eliminado una persona 

    -**Tipo:**  Positivo 
    -**Objetivo:** Evaluar que el sistema realice la divison correctamente incluso despues de haber eliminado una persona 

    -**Precondiciones:**
        -La aplicacion esta cargada
        -La tabla tiene datos previos
        -Eliminar una persona previo a calcular

    -**Pasos:**
        1. Escribir un nombre en el campo de nombre
        2. Escribir un monto en el campo de gasto
        3. Hacer click en el boton de "Agregar"
        4. Seleccionar cualquier persona
        5. Hacer click en el boton "eliminar"
        6. Calcular divison 

    -**Resultado esperado:** El sistema calcula la divison de igual forma correctamente o tomando en cuenta a la persona eliminada 

    -**Prioridad:** MEDIA
    -**Estado de CP:** CORRECTO 


### TC-11: Calcular division con una sola persona con un monto diferente a 0 

    -**Tipo:** Positivo
    -**Objetivo:** Evaluar que el sistema desglose los pagos correctamente cuando una sola persona puso dinero 

    -**Precondiciones:**
        -La aplicacion esta cargada
        -La tabla tiene datos previos
        -Solo una persona tiene que tener un monto diferente a 0
       

    -**Pasos:**
        1. Escribir un nombre en el campo de nombre
        2. Escribir 0 en el campo de gasto 
        3. Escribir una persona con un monto diferente a 0 
        4. Hacer click en el boton de "Agregar"
        5. Calcular divison 
       
    -**Resultado esperado:**  El sistema hace la divison correctamente pagandole todos de forma correcta a esa unica persona que puso dinero

    -**Prioridad:** MEDIA
    -**Estado de CP:** CORRECTO 


### TC-12: Hacer division de gastos con algunas personas si llenar el campo de gasto 

    //NOTA: este caso de prueba se da dado al TC-003

    -**Tipo:**   Negativo
    -**Objetivo:** Evaluar que sucede al realizar la divison sin haber especificado el monto en algunas personas 

    -**Precondiciones:**
       -Recrear TC-003

    -**Pasos:**
        1. Escribir un nombre en el campo correspondiente
        2. No poner ningun dato en el campo Gasto
        3. Hacer click en el boton "Agregar"
        4. Calcular division 
       
    -**Resultado esperado:**  Ya que el sistema agrega automaticamente el monto 0 si no se le espeficifa ver si realiza la division correctamente

    -**Prioridad:** MEDIA
    -**Estado de CP:** CORRECTO 


### TC-13: Realizar division con un moto negativo 

    -**Tipo:**   Negativo 
    -**Objetivo:** Evaluar como se comporta el sistema al realizar la division con un monto negativo 

    -**Precondiciones:**
        -La aplicacion esta cargada
        -La tabla tiene datos previos
        -Solo una persona tiene que tener un monto negativo

    -**Pasos:**
        1. Escribir un nombre en el campo de nombre
        2. Escribir un monto en el campo de gasto
        3. Escribir un monto negativo en el campo de gasto 
        4. Hacer click en el boton de "Agregar"
        5. Calcular divison 
       
    -**Resultado esperado:**  El sistema no realiza la division correctamente al tener un monto negativo 

    -**Prioridad:** MEDIA
    -**Estado de CP:** FALLO

    //NOTA: el sistema realiza la division con montos negativos 

### TC-14: Hacer division con todos los montos siendo 0 

    -**Tipo:**   Negativo 
    -**Objetivo:** Evaluar que division realiza el sistema 

    -**Precondiciones:**
        -La aplicacion esta cargada
        -La tabla tiene datos previos
        -El monto de todas las personas es 0 

    -**Pasos:**
        1. Escribir un nombre en el campo de nombre
        2. Escribir 0 en el campo de gasto
        3. Hacer click en el boton de "Agregar"
        4. Calcular divison 
       
    -**Resultado esperado:**  El sistema no debe realizar ninguna divison ya que nadie gasto nada

    -**Prioridad:** MEDIA
    -**Estado de CP:** FALLO  


### TC-15: Hacer la division con todos los montos negativos 

    -**Tipo:**   Negativo 
    -**Objetivo:** Evaluar que sucede al calcular la division con todos los montos negativos 

    -**Precondiciones:**
        -La aplicacion esta cargada
        -La tabla tiene datos previos
        -Todos los montos deben ser negativos 

    -**Pasos:**
        1. Escribir un nombre en el campo de nombre
        2. Escribir montos negatvios en el campo de gasto
        3. Hacer click en el boton de "Agregar"
        4. Calcular divison 


    -**Resultado esperado:**  El sistema no debe permitir calcular la divison con montos negativos 

    -**Prioridad:** MEDIA
    -**Estado de CP:** FALLO 

    //NOTA: el sistema realiza la division con los montos negativos pero no desgloza los pagos 


### TC-16: Agregar persona con nombre que contiene solo espacios 

    -**Tipo:** Negativo
    -**Objetivo:** Validar que el sistema no permita nombres con solo espacios en blanco 

    -**Precondiciones:**
        -La aplicación está cargada
        -La tabla está vacía o con datos previos

    -**Pasos:**
        1.Escribir " " (solo espacios) en el campo Nombre
        2.Escribir un monto en el campo Gasto
        3.Hacer click en el boton "Agregar"
       
    -**Resultado esperado:** El sistema no agrega a la persona y muestra mensaje de validacion  

    -**Prioridad:** MEDIA
    -**Estado de CP:** FALLO 

    //NOTA: el sistema si agregar la persona si se rellena con espacios el campo 


### TC-17: Agregar persona con monto decimal 

    -**Tipo:**   Positivo 

    -**Objetivo:** Evaluar si el sistema maneja correctamente montos con decimales 

    -**Precondiciones:**
        -La aplicación está cargada
        -La tabla está vacía o con datos previos

    -**Pasos:**
       1.Escribir un nombre en el campo nombre
       2.Escribir un monto decimal en el campo gasto 
       3.Hacer click en el boton "agregar" 
       4.Calcular


    -**Resultado esperado:**  el sistema agrega la persona con el monto decimal y calcula correctamente la divison 

    -**Prioridad:** MEDIA
    -**Estado de CP:** CORRECTO 


### TC-18: Calcular division y luego agregar nueva persona  

    -**Tipo:**   Positivo
    -**Objetivo:** Validar que los resultados se limpiar al agregar una nueva persona desdes de calcular 

    -**Precondiciones:**
        -La aplicacion esta cargada 
        -Ya se realizo un calculo previo
       

    -**Pasos:**
        1.Escribir un nombre en el campo nombre
        2.Escribir un monto decimal en el campo gasto 
        3.Hacer click en el boton "agregar" 
        4.Calcular
        5.Agregar persona nueva 
        6.Observar si los resultados siguen visibles 

    -**Resultado esperado:**  los resultados del calculo anterior se limpian automaticamente 

    -**Prioridad:** ALTA
    -**Estado de CP:** FALLO 


### TC-19: Agregar persona con caracteres especiales en el nombre 

    -**Tipo:**   Negativo
    -**Objetivo:** Validar como maneja el sistema caracteres especiales en nombre

    -**Precondiciones:**
        -La aplicación está cargada
        -La tabla está vacía o con datos previos

    -**Pasos:**
        1.Escribir nombre con caracteres especiales 
        2.Escribir un monto en el campo gasto 
        3.Hacer click en el boton "agregar"
        4.Calcular
       
    -**Resultado esperado:**  el sistema permite calcular correctamente idiferentemente si el nombre tiene caracteres especiales 

    -**Prioridad:** BAJA
    -**Estado de CP:** CORRECTO 
    
### TC-20: 

    -**Tipo:**   
    -**Objetivo:** 

    -**Precondiciones:**
       

    -**Pasos:**
       
    -**Resultado esperado:**  

    -**Prioridad:** MEDIA
    -**Estado de CP:** CORRECTO 
### TC-21: 

    -**Tipo:**   
    -**Objetivo:** 

    -**Precondiciones:**
       

    -**Pasos:**
       
    -**Resultado esperado:**  

    -**Prioridad:** MEDIA
    -**Estado de CP:** CORRECTO 

-----------    