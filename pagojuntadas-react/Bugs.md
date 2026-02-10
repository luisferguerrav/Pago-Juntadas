# 🐛 BUGS DOCUMENTADOS - Pago Juntadas

---

## BUG-01: Sin aviso de validación al agregar persona sin nombre

**STATUS:**  RESUELTO (v2.0.0)

**TYPE:** Validation

**SEVERITY:** ALTA

**URGENCY:** ALTA

**RELATED TEST CASE:** TC-002

**STEPS:**
1. Iniciar la aplicación
2. Dejar vacío el campo "Nombre"
3. Escribir un monto válido en el campo "Gasto"
4. Hacer click en el botón "Agregar"

**EXPECTED RESULT:** 
El sistema no agrega ningún dato a la tabla y muestra un aviso indicando que el campo Nombre es obligatorio.

**ACTUAL RESULT:** 
El sistema no agrega el dato (correcto), pero NO muestra ningún mensaje de validación al usuario.

**SETUP / ENVIRONMENT:**
- Versión: < 2.0.0

**RESOLUTION:**
Se agregó validación con mensaje temporal (amarillo) que aparece durante 3 segundos: "Por favor ingresa un nombre"

---

## BUG-02: Agrega persona con gasto 0 automáticamente sin validación

**STATUS:**  RESUELTO (v2.0.0)

**TYPE:** Validation

**SEVERITY:** ALTA

**URGENCY:** ALTA

**RELATED TEST CASE:** TC-003

**STEPS:**
1. Iniciar la aplicación
2. Escribir un nombre válido en el campo "Nombre"
3. Dejar vacío el campo "Gasto" (sin escribir nada)
4. Hacer click en el botón "Agregar"

**EXPECTED RESULT:** 
El sistema no agrega ningún dato y muestra mensaje indicando que el campo Gasto es obligatorio.

**ACTUAL RESULT:** 
El sistema agrega la persona automáticamente con gasto = 0, sin solicitar confirmación ni validar el campo vacío.

**SETUP / ENVIRONMENT:**
- Versión: < 2.0.0

**RESOLUTION:**
Se agregó validación que detecta campo vacío/null/undefined y muestra mensaje: "Por favor ingresa un monto (mínimo 0)"

---------

## BUG-03: Sistema permite división con montos negativos

**STATUS:** RESUELTO (v2.0.0)

**TYPE:** Validation / Logic

**SEVERITY:** Media

**URGENCY:** Media

**RELATED TEST CASE:** TC-013

**STEPS:**
1. Iniciar la aplicación
2. Agregar personas con datos válidos
3. Agregar una persona con monto negativo
4. Hacer click en "Calcular"

**EXPECTED RESULT:** 
El sistema no debe permitir agregar montos negativos, o en su defecto, no debe realizar el cálculo si detecta montos negativos.

**ACTUAL RESULT:** 
El sistema realiza la división incluyendo el monto negativo en los cálculos, generando resultados incorrectos.

**SETUP / ENVIRONMENT:**
- Versión: < 2.0.0

**RESOLUTION:**
Se agregó validación en dos niveles:
1. HTML: `min="0"` en el input
2. JavaScript: Validación que rechaza montos < 0 con mensaje "No se permiten montos negativos"

---------

## BUG-04: División sin validar que todos los gastos sean 0

**STATUS:**  RESUELTO (v2.0.0)

**TYPE:** Logic / UX

**SEVERITY:** Media

**URGENCY:** Media

**RELATED TEST CASE:** TC-014

**STEPS:**
1. Iniciar la aplicación
2. Agregar varias personas con gasto = 0
3. Hacer click en "Calcular"

**EXPECTED RESULT:** 
El sistema debe mostrar un mensaje indicando que no hay gastos para dividir, ya que todos los montos son 0.

**ACTUAL RESULT:** 
El sistema realiza el cálculo mostrando todos los resultados en 0, sin dar feedback útil al usuario sobre la situación.

**SETUP / ENVIRONMENT:**
- Versión: < 2.0.0


**RESOLUTION:**
Se agregó validación usando `.some()` que verifica si al menos una persona tiene gasto > 0. Si todos son 0, muestra mensaje: "Por favor ingresa al menos un monto mayor a 0"

---------

## BUG-05: Acepta nombres con solo espacios en blanco

**STATUS:** RESUELTO (v2.0.0)

**TYPE:** Validation

**SEVERITY:** Media

**URGENCY:** Media

**RELATED TEST CASE:** TC-016

**STEPS:**
1. Iniciar la aplicación
2. Escribir solo espacios "     " en el campo "Nombre"
3. Escribir un monto válido en el campo "Gasto"
4. Hacer click en "Agregar"

**EXPECTED RESULT:** 
El sistema debe rechazar el nombre y mostrar mensaje de validación indicando que el nombre no puede estar vacío.

**ACTUAL RESULT:** 
El sistema acepta los espacios como nombre válido, y al aplicar `.trim()` durante el guardado, termina agregando una persona sin nombre visible.

**SETUP / ENVIRONMENT:**
- Versión: < 2.0.0

**RESOLUTION:**
Se modificó la validación para aplicar `.trim()` ANTES de verificar si está vacío:
```javascript
if (!nombre.trim()) {
    mostrarAviso("Por favor ingresa un nombre");
    return;
}
```
-----------

## BUG-06: Resultados de cálculo no se limpian al agregar nueva persona

**STATUS:** RESUELTO (v2.1.0)

**TYPE:** UX / Logic

**SEVERITY:** ALTA

**URGENCY:** ALTA

**RELATED TEST CASE:** TC-018

**STEPS:**
1. Iniciar la aplicación
2. Agregar personas con datos válidos
3. Hacer click en "Calcular" (se muestran resultados)
4. Agregar una nueva persona
5. Observar que los resultados anteriores siguen visibles

**EXPECTED RESULT:** 
Los resultados del cálculo anterior deben limpiarse automáticamente al agregar una nueva persona, ya que los datos cambiaron.

**ACTUAL RESULT:** 
Los resultados antiguos permanecen en pantalla aunque los datos de la tabla hayan cambiado, mostrando información desactualizada.

**SETUP / ENVIRONMENT:**
- Versión: < 2.1.0


**RESOLUTION:**
Se implementó función `limpiarResultado()` en App.jsx que se llama desde `agregarPersona()` en GestorPersonas.jsx:
1. Creada función `limpiarResultado` que hace `setResultado(null)`
2. Pasada como prop a través de GastosApp → GestorPersonas
3. Llamada en `agregarPersona` después de actualizar el estado

-----------

## BUG-07: Resultados no se refrescan al eliminar persona después de calcular

**STATUS:** PENDIENTE

**TYPE:** UX / Logic

**SEVERITY:** ALTA

**URGENCY:** ALTA

**RELATED TEST CASE:** TC-037

**STEPS:**
1. Iniciar la aplicación
2. Agregar varias personas con datos válidos
3. Hacer click en "Calcular" (se muestran resultados)
4. Seleccionar una persona
5. Hacer click en "Eliminar"
6. Observar que los resultados NO se actualizan

**EXPECTED RESULT:** 
Los resultados del cálculo deben limpiarse automáticamente al eliminar una persona, ya que los datos cambiaron y los resultados mostrados son inválidos.

**ACTUAL RESULT:** 
Los resultados antiguos permanecen visibles mostrando información incorrecta (incluye la persona eliminada en los cálculos).

**SETUP / ENVIRONMENT:**
- Versión: 2.1.0

**RESOLUTION:** N/A

-------

## BUG-08: 
**STATUS:** Pendiente 

**TYPE:** Logica 

**SEVERITY:** ALTA

**URGENCY:** ALTA

**STEPS:**
1. Iniciar la aplicación
2. Agregar varias personas con datos validos
3. Hacer division


**EXPECTED RESULT:** 
    El sistema hace la division correctamente y da los pagos por ronda, el saldo por ronda, y su balance final

**ACTUAL RESULT:**
    El sistema si hace correctamente la division y da los pagos por ronda correctos pero el saldo por ronda de al que tienen que pagarle se le pone 0 y luego va adquiero montos negativos y el balance final que muestra es el total que pago en un principio no la resta de todo 

**SETUP / ENVIRONMENT:**
    -Version: 2.1
**RESOLUTION:** 
    N/A 

----------



## BUG-08: 
**STATUS:** Pendiente 

**TYPE:**  

**SEVERITY:** 

**URGENCY:** 

**STEPS:**
    

**EXPECTED RESULT:**

**ACTUAL RESULT:**

**SETUP / ENVIRONMENT:**

**RESOLUTION:** 

----------








**Última actualización:** 09/02/2026