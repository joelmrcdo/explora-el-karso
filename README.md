# Explora el karso

Recorrido interactivo por el karso de Puerto Rico, de **Ciudadanos del Karso, Inc.** Se usa en el iPad de las mesas informativas y funciona sin internet una vez instalado.

## Qué hay en esta carpeta

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | La app completa: textos, fotos, mapa, reto y códigos QR. |
| `manifest.webmanifest` | Nombre, ícono y colores de la app instalada. |
| `sw.js` | Guarda la app en el iPad para que abra sin señal. |
| `icons/` | Logo de CDK para la pantalla de inicio y la pestaña del navegador. |
| `.nojekyll` | Evita que GitHub procese los archivos. No lo borres. |

## Publicar en GitHub Pages (una sola vez)

1. En GitHub, crea un repositorio **público** llamado `explora-el-karso`.
2. Entra al repositorio, toca **Add file → Upload files** y arrastra **todo el contenido** de esta carpeta (incluida la carpeta `icons`). Toca **Commit changes**.
   - Si `.nojekyll` no aparece al arrastrar (es un archivo oculto), créalo con **Add file → Create new file**, nombre `.nojekyll`, vacío.
3. Ve a **Settings → Pages**. En *Source* elige **Deploy from a branch**, rama **main**, carpeta **/ (root)** y toca **Save**.
4. En uno o dos minutos la app queda en `https://<tu-cuenta>.github.io/explora-el-karso/`.

**Dominio propio (opcional):** para usar algo como `karso.cdk-pr.org`, añade en el DNS de cdk-pr.org un registro **CNAME** `karso` → `<tu-cuenta>.github.io`, y escribe `karso.cdk-pr.org` en **Settings → Pages → Custom domain**.

## Instalar en el iPad

1. Abre el enlace en **Safari** con internet.
2. Toca **Compartir → Agregar a pantalla de inicio**.
3. Abre la app desde el ícono nuevo. Desde ahí funciona sin señal.
4. Activa el **modo kiosco** dentro de la app: mantén el dedo 3 segundos sobre el logo de CDK.
5. Para que nadie salga de la app: **Ajustes → Accesibilidad → Acceso Guiado**, y triple clic en el botón lateral al abrirla.

## Actualizar la app

1. Sube el `index.html` nuevo al repositorio (reemplaza el anterior).
2. Abre `sw.js` en GitHub (ícono del lápiz) y cambia la línea `const VERSION = "..."` por la fecha del día, por ejemplo `"2026-11-02"`. Guarda con **Commit changes**.
3. La próxima vez que el iPad abra la app con internet, baja la versión nueva. Se ve al volver a abrirla.

Si no cambias `VERSION`, los iPads pueden seguir mostrando la versión anterior.

## Enlaces y textos que se cambian a menudo

Dentro de `index.html`, busca `const CONFIG` para cambiar los enlaces de voluntariado, donativos, boletín, redes sociales, el texto del premio del reto y los segundos de inactividad del modo kiosco.

Las fuentes y créditos de fotos están en el documento "Explora el karso — Fuentes".
