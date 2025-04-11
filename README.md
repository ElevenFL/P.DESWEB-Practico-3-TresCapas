# P.DESWEB-Practico-3-TresCapas
# Arquitectura por capas

## Identificación de capas

1. **Capa de Presentación (presentation/product.controller.js):**
   - Maneja las solicitudes HTTP
   - Valida formatos de entrada
   - Gestiona respuestas y códigos de estado
   - Utiliza el servicio de negocio

2. **Capa de Lógica de Negocio (business/product.service.js):**
   - Contiene las reglas de negocio
   - Valida datos requeridos
   - Transforma datos (ej: parseo de precios)
   - Coordina con el repositorio

3. **Capa de Acceso a Datos (data/product.repository.js):**
   - Gestiona el almacenamiento en memoria
   - Realiza operaciones CRUD básicas
   - Simula operaciones asíncronas

## Ventajas respecto a la versión monolítica

1. **Separación de responsabilidades:** Cada capa tiene una función específica y bien definida
2. **Menor acoplamiento:** Las capas se comunican a través de interfaces claras
3. **Mejor mantenibilidad:** Cambios en una capa no afectan a las otras
4. **Testing más fácil:** Se pueden probar las capas de forma aislada
5. **Escalabilidad:** Permite agregar nuevas capas o modificar existentes sin afectar todo el sistema
6. **Reutilización:** Los componentes pueden ser usados en diferentes partes de la aplicación
7. **Organización clara:** Facilita el trabajo en equipo y la navegación del código
