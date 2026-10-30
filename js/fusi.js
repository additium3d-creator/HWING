/* Fusi · animación explicativa MJF (SVG + JS, sin audio). Generado desde el archivo original de Additium3D. */
(function(){
const TR={"Beniparrell, Valencia. Las 6:00 de la mañana.": "Beniparrell, Valencia. 6:00 in the morning.", "En la nave de Additium3D, alguien se está despertando…": "At the Additium3D plant, someone is waking up…", "¡Hola! Soy Fusi,": "Hi! I'm Fusi,", "la MJF 5620 de Additium3D.": "Additium3D's MJF 5620.", "Fabrico piezas finales en serie.": "I make end-use parts in series.", "¿Te enseño cómo?": "Want me to show you how?", "Paso 1: extiendo una capa finísima de polvo PA12 S. Unas 90 micras.": "Step 1: I spread a very thin layer of PA12 S powder. About 90 microns.", "Paso 2: mis cabezales dibujan la pieza con agente de fusión, gota a gota.": "Step 2: my printheads draw the part with fusing agent, drop by drop.", "Paso 3: una pasada de calor funde lo dibujado. El resto sigue siendo polvo.": "Step 3: a pass of heat fuses what was drawn. The rest stays powder.", "Y repito. Capa a capa, miles de veces, hasta tener la pieza entera.": "And I repeat. Layer by layer, thousands of times, until the part is complete.", "¡Decenas de piezas en cada tanda!": "Dozens of parts in every batch!", "Al acabar, el trabajo sale lleno de piezas anidadas. Sin soportes, aprovechando todo el volumen.": "When done, the job comes out full of nested parts. No supports, using the whole volume.", "Piezas finales y de montaje, en serie. Idénticas, lote tras lote.": "End-use and assembly parts, in series. Identical, batch after batch.", "Drones, defensa, aeroespacial e industria: nuestras piezas ya están trabajando ahí fuera.": "Drones, defence, aerospace and industry: our parts are already out there at work.", "¿Fabricamos tu próxima serie?": "Shall we make your next series?", "Así fabrico: Multi Jet Fusion": "How I make parts: Multi Jet Fusion", "piezas idénticas": "identical parts", "Control de calidad": "Quality control", "Producción en serie con fabricación aditiva": "Series production with additive manufacturing", "Polvo": "Powder", "Agente": "Agent", "Calor": "Heat", "Drones": "Drones", "Defensa": "Defence", "Aeroespacial": "Aerospace", "Industria": "Industry", "Capa": "Layer", "Pausa": "Pause", "Reproducir": "Play", "Volver a ver": "Watch again", "Ver a Fusi": "Meet Fusi"};

const VO=[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.08, 0.41, 0.83, 1.0, 1.0, 0.91, 0.79, 0.85, 0.97, 1.0, 0.89, 0.59, 0.24, 0.05, 0.0, 0.0, 0.0, 0.0, 0.24, 0.73, 0.99, 0.85, 0.54, 0.39, 0.34, 0.19, 0.18, 0.44, 0.65, 0.74, 0.74, 0.55, 0.32, 0.16, 0.04, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.18, 0.61, 0.74, 0.46, 0.3, 0.27, 0.15, 0.04, 0.0, 0.0, 0.0, 0.0, 0.03, 0.09, 0.12, 0.09, 0.03, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.02, 0.08, 0.15, 0.22, 0.41, 0.71, 0.84, 0.58, 0.17, 0.0, 0.24, 0.73, 0.98, 0.78, 0.39, 0.23, 0.34, 0.38, 0.22, 0.05, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.04, 0.19, 0.3, 0.25, 0.3, 0.53, 0.56, 0.37, 0.21, 0.12, 0.32, 0.77, 1.0, 1.0, 0.98, 0.88, 0.58, 0.35, 0.61, 0.93, 0.87, 0.48, 0.12, 0.0, 0.0, 0.06, 0.17, 0.19, 0.29, 0.54, 0.63, 0.56, 0.43, 0.31, 0.46, 0.82, 0.96, 0.85, 0.71, 0.57, 0.38, 0.2, 0.35, 0.56, 0.51, 0.49, 0.61, 0.6, 0.43, 0.34, 0.26, 0.11, 0.26, 0.65, 0.78, 0.62, 0.45, 0.47, 0.66, 0.75, 0.73, 0.51, 0.16, 0.07, 0.25, 0.52, 0.67, 0.41, 0.09, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.06, 0.36, 0.81, 0.98, 0.8, 0.53, 0.51, 0.73, 0.74, 0.39, 0.13, 0.18, 0.19, 0.07, 0.03, 0.18, 0.42, 0.57, 0.48, 0.19, 0.13, 0.26, 0.2, 0.05, 0.11, 0.37, 0.49, 0.47, 0.62, 0.78, 0.68, 0.54, 0.51, 0.4, 0.18, 0.07, 0.14, 0.22, 0.18, 0.13, 0.12, 0.13, 0.26, 0.47, 0.49, 0.39, 0.38, 0.37, 0.26, 0.13, 0.03, 0.0, 0.0, 0.0, 0.0, 0.0, 0.12, 0.39, 0.55, 0.53, 0.4, 0.26, 0.21, 0.34, 0.65, 0.78, 0.63, 0.53, 0.58, 0.46, 0.18, 0.02, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.02, 0.16, 0.51, 0.87, 0.9, 0.61, 0.35, 0.28, 0.21, 0.07, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.07, 0.38, 0.64, 0.48, 0.37, 0.64, 0.92, 0.89, 0.63, 0.44, 0.38, 0.25, 0.07, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.05, 0.23, 0.34, 0.22, 0.05, 0.06, 0.34, 0.73, 0.96, 0.97, 0.9, 0.9, 0.9, 0.76, 0.73, 0.7, 0.48, 0.55, 0.71, 0.58, 0.63, 0.81, 0.6, 0.28, 0.29, 0.4, 0.38, 0.46, 0.56, 0.43, 0.28, 0.3, 0.35, 0.49, 0.75, 0.73, 0.51, 0.51, 0.49, 0.25, 0.14, 0.37, 0.57, 0.45, 0.24, 0.11, 0.05, 0.04, 0.02, 0.0, 0.0, 0.0, 0.03, 0.15, 0.41, 0.61, 0.71, 0.89, 1.0, 0.81, 0.41, 0.29, 0.49, 0.56, 0.46, 0.33, 0.36, 0.67, 0.79, 0.64, 0.7, 0.8, 0.53, 0.18, 0.18, 0.29, 0.24, 0.14, 0.04, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.06, 0.35, 0.78, 0.8, 0.45, 0.33, 0.39, 0.24, 0.2, 0.49, 0.62, 0.42, 0.15, 0.02, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.38, 0.71, 0.77, 0.44, 0.18, 0.38, 0.74, 0.7, 0.49, 0.54, 0.52, 0.37, 0.55, 0.86, 0.83, 0.61, 0.5, 0.38, 0.17, 0.12, 0.33, 0.53, 0.5, 0.52, 0.6, 0.37, 0.1, 0.24, 0.52, 0.56, 0.44, 0.47, 0.59, 0.46, 0.24, 0.4, 0.68, 0.6, 0.35, 0.28, 0.21, 0.09, 0.13, 0.25, 0.28, 0.3, 0.32, 0.24, 0.29, 0.49, 0.49, 0.36, 0.28, 0.31, 0.42, 0.4, 0.52, 0.78, 0.61, 0.22, 0.15, 0.23, 0.17, 0.14, 0.16, 0.11, 0.03, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.25, 0.75, 0.83, 0.45, 0.33, 0.43, 0.3, 0.15, 0.27, 0.42, 0.42, 0.26, 0.1, 0.03, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.12, 0.47, 0.84, 0.96, 0.96, 0.94, 0.74, 0.55, 0.55, 0.43, 0.25, 0.39, 0.79, 0.96, 0.92, 0.95, 0.82, 0.65, 0.68, 0.49, 0.25, 0.41, 0.63, 0.68, 0.77, 0.87, 0.65, 0.24, 0.02, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.17, 0.53, 0.66, 0.67, 0.83, 0.78, 0.66, 0.79, 0.77, 0.58, 0.43, 0.22, 0.17, 0.47, 0.76, 0.75, 0.66, 0.51, 0.3, 0.27, 0.25, 0.09, 0.07, 0.36, 0.63, 0.55, 0.32, 0.19, 0.13, 0.08, 0.02, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.22, 0.7, 0.93, 0.89, 0.89, 0.79, 0.45, 0.29, 0.54, 0.68, 0.43, 0.11, 0.0, 0.02, 0.12, 0.27, 0.27, 0.09, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.13, 0.4, 0.42, 0.3, 0.56, 0.91, 0.91, 0.56, 0.31, 0.56, 0.75, 0.45, 0.13, 0.2, 0.43, 0.42, 0.19, 0.04, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.38, 0.72, 0.85, 0.68, 0.41, 0.37, 0.5, 0.45, 0.27, 0.35, 0.5, 0.49, 0.46, 0.34, 0.1, 0.03, 0.11, 0.12, 0.04, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.06, 0.33, 0.72, 0.95, 0.96, 0.9, 0.68, 0.28, 0.09, 0.35, 0.66, 0.62, 0.44, 0.34, 0.2, 0.05, 0.1, 0.3, 0.31, 0.14, 0.02, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.03, 0.11, 0.19, 0.31, 0.54, 0.62, 0.45, 0.48, 0.67, 0.78, 0.91, 0.89, 0.59, 0.47, 0.54, 0.36, 0.08, 0.19, 0.62, 0.94, 0.97, 0.72, 0.4, 0.41, 0.43, 0.26, 0.27, 0.39, 0.37, 0.24, 0.15, 0.28, 0.53, 0.53, 0.57, 0.71, 0.49, 0.19, 0.33, 0.6, 0.59, 0.43, 0.33, 0.47, 0.74, 0.63, 0.26, 0.04, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.04, 0.13, 0.25, 0.44, 0.56, 0.47, 0.32, 0.33, 0.56, 0.62, 0.34, 0.23, 0.34, 0.3, 0.17, 0.05, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.03, 0.17, 0.5, 0.86, 0.86, 0.51, 0.32, 0.5, 0.59, 0.37, 0.13, 0.2, 0.49, 0.56, 0.5, 0.67, 0.88, 0.84, 0.73, 0.67, 0.45, 0.17, 0.1, 0.23, 0.4, 0.53, 0.55, 0.44, 0.35, 0.35, 0.3, 0.22, 0.13, 0.12, 0.42, 0.77, 0.64, 0.26, 0.1, 0.19, 0.36, 0.38, 0.2, 0.04, 0.0, 0.02, 0.1, 0.19, 0.19, 0.16, 0.17, 0.19, 0.39, 0.63, 0.47, 0.22, 0.21, 0.25, 0.23, 0.15, 0.05, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.06, 0.37, 0.81, 0.86, 0.71, 0.71, 0.55, 0.34, 0.44, 0.52, 0.42, 0.53, 0.74, 0.62, 0.36, 0.23, 0.27, 0.35, 0.25, 0.11, 0.12, 0.12, 0.04, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.05, 0.16, 0.24, 0.38, 0.64, 0.87, 0.97, 0.87, 0.62, 0.49, 0.48, 0.48, 0.36, 0.15, 0.02, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.05, 0.16, 0.31, 0.36, 0.44, 0.78, 0.92, 0.73, 0.47, 0.23, 0.18, 0.24, 0.17, 0.04, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.14, 0.53, 0.89, 1.0, 0.98, 0.88, 0.83, 0.88, 0.81, 0.52, 0.18, 0.04, 0.1, 0.18, 0.13, 0.08, 0.33, 0.79, 0.99, 0.93, 0.78, 0.52, 0.28, 0.19, 0.3, 0.37, 0.3, 0.24, 0.26, 0.38, 0.47, 0.33, 0.1, 0.04, 0.11, 0.13, 0.09, 0.03, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.05, 0.27, 0.64, 0.92, 0.82, 0.4, 0.07, 0.08, 0.31, 0.62, 0.88, 0.94, 0.7, 0.55, 0.8, 1.0, 0.86, 0.5, 0.16, 0.22, 0.64, 0.94, 0.92, 0.61, 0.24, 0.28, 0.62, 0.69, 0.54, 0.56, 0.73, 0.75, 0.55, 0.28, 0.11, 0.21, 0.48, 0.59, 0.5, 0.43, 0.4, 0.25, 0.07, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.06, 0.15, 0.26, 0.5, 0.58, 0.42, 0.36, 0.34, 0.25, 0.22, 0.51, 0.88, 0.88, 0.58, 0.38, 0.28, 0.13, 0.08, 0.23, 0.3, 0.19, 0.19, 0.34, 0.57, 0.68, 0.41, 0.14, 0.2, 0.35, 0.38, 0.41, 0.47, 0.37, 0.21, 0.19, 0.24, 0.19, 0.19, 0.31, 0.37, 0.33, 0.21, 0.07, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];let CUR_T=0;
const $=id=>document.getElementById('fu-'+id);
const isEN=()=>document.documentElement.lang==='en';
const tr=s=>(isEN()&&TR[s])||s;
const NS='http://www.w3.org/2000/svg';
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const lerp=(a,b,t)=>a+(b-a)*t;
const ease=t=>{t=clamp(t);return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2};
const seg=(t,a,b)=>clamp((t-a)/(b-a));
const back=t=>{t=clamp(t);const c1=1.9,c3=c1+1;return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2)};
function el(tag,attrs,parent){const e=document.createElementNS(NS,tag);for(const k in attrs)e.setAttribute(k,attrs[k]);if(parent)parent.appendChild(e);return e;}
const setA=(e,o)=>{for(const k in o)e.setAttribute(k,o[k]);};
function kf(t,keys){if(t<=keys[0][0])return keys[0][1];for(let i=1;i<keys.length;i++){if(t<=keys[i][0]){const[t0,v0]=keys[i-1],[t1,v1]=keys[i];return lerp(v0,v1,ease((t-t0)/(t1-t0)));}}return keys[keys.length-1][1];}
function blink(t,times){let v=0;for(const b of times){const d=Math.abs(t-b);if(d<.11)v=Math.max(v,1-d/.11);}return v;}
const arc=(t,t0,d,h)=>{const p=(t-t0)/d;return p>0&&p<1?h*Math.sin(Math.PI*p):0;};
const talkAmp=t=>clamp(.2+.8*Math.abs(Math.sin(t*11))*(.65+.35*Math.sin(t*3.3)));
const fmt=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,isEN()?',':'.');
function hex(c){return[parseInt(c.slice(1,3),16),parseInt(c.slice(3,5),16),parseInt(c.slice(5,7),16)];}
function mix(a,b,t){const A=hex(a),B=hex(b);return'rgb('+A.map((v,i)=>Math.round(lerp(v,B[i],clamp(t)))).join(',')+')';}
let seed=11;const rnd=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646;};

/* ---------- Escenario estático generado ---------- */
for(let i=0;i<6;i++) el('rect',{x:60+i*200,y:40,width:150,height:70,rx:8,fill:'#9fd6ff'},$('skylights'));
[30,870].forEach(sx=>{
  const g=$('shelves');
  [400,470].forEach(by=>el('rect',{x:sx,y:by,width:380,height:8,fill:'#33476b'},g));
  el('rect',{x:sx,y:330,width:8,height:148,fill:'#33476b'},g);el('rect',{x:sx+372,y:330,width:8,height:148,fill:'#33476b'},g);
  [400,470].forEach(by=>{for(let c=0;c<6;c++){const x=sx+14+c*61;
    el('rect',{x,y:by-54,width:52,height:52,rx:6,fill:'#22345a',stroke:'#34507e','stroke-width':2},g);
    el('rect',{x:x+8,y:by-46,width:36,height:26,rx:3,fill:'#2e4d7a'},g);
    el('circle',{cx:x+44,cy:by-10,r:3,fill:(c+by)%3?'#3ddc84':'#ffb347'},g);}});
});
/* pasos del proceso */
const stepNames=['Polvo','Agente','Calor'];const stepC=[],stepT=[];
stepNames.forEach((n,i)=>{const g=el('g',{transform:`translate(${560+i*230},150)`},$('steps'));
  stepC.push(el('circle',{r:19,fill:'#22314c'},g));
  const num=el('text',{y:8,'text-anchor':'middle','font-size':22,'font-weight':600,fill:'#fff'},g);num.textContent=i+1;
  const tx=el('text',{x:32,y:9,'font-size':26,fill:'#8fa3c2'},g);tx.textContent=n;stepT.push(tx);});

/* capas */
const binL=560,binW=560,binB=530,LH=18,NL=12;
const layerTop=i=>binB-(i+1)*LH;
function segsFor(i){const s=[];
  if(i<=1||i>=10)s.push([50,250]);else s.push([50,88],[212,250]);
  if(i<=3)s.push([330,450]);else if(i<=7)s.push([300,480]);else s.push([360,420]);
  if(i>=2&&i<=8)s.push([505,535]);return s;}
const layers=[];
for(let i=0;i<NL;i++){
  const y=layerTop(i);
  const pw=el('rect',{x:binL,y,width:0,height:LH,fill:i%2?'#e4ded1':'#ece7dc'},$('layers'));
  const segs=segsFor(i).map(([a,b])=>({a,b,r:el('rect',{x:binL+a,y,width:0,height:LH,fill:'#2b303a'},$('layers'))}));
  let s,d; if(i===0){s=1.2;d=4.6;}else{s=15.6+(i-1)*.62;d=.2;}
  layers.push({pw,segs,s,d});
}
const drops=[];for(let k=0;k<5;k++)drops.push(el('circle',{r:4,fill:'#35d6b6'},$('drops')));

/* piezas del trabajo */
function pip(x,y,poly){let c=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const[xi,yi]=poly[i],[xj,yj]=poly[j];if(((yi>y)!=(yj>y))&&(x<(xj-xi)*(y-yi)/(yj-yi)+xi))c=!c;}return c;}
const hexPoly=[[820,90],[1020,200],[1020,420],[820,530],[620,420],[620,200]].map(([x,y])=>[820+(x-820)*.78,310+(y-310)*.78]);
const bparts=[];
for(let k=0;k<24;k++){let x,y;do{x=640+rnd()*360;y=110+rnd()*400;}while(!pip(x,y,hexPoly));
  const g=el('g',{},$('buildParts'));const type=k%3,rot=rnd()*360;
  if(type===0)el('rect',{x:-24,y:-14,width:40+rnd()*16,height:24+rnd()*10,rx:7,fill:'#6b7687',stroke:'#394150','stroke-width':3},g);
  else if(type===1)el('circle',{r:14+rnd()*6,fill:'none',stroke:'#6b7687','stroke-width':10},g);
  else el('path',{d:'M-20 -18 H4 V2 H20 V18 H-20 Z',fill:'#747f90',stroke:'#394150','stroke-width':3,'stroke-linejoin':'round'},g);
  bparts.push({g,x,y,rot,ph:rnd()*6});}
const parts=[];
for(let k=0;k<42;k++){let x,y;do{x=640+rnd()*360;y=110+rnd()*400;}while(!pip(x,y,hexPoly));
  const a=Math.atan2(y-310,x-820)+(rnd()-.5)*.6,dist=140+rnd()*180;
  parts.push({c:el('circle',{r:3+rnd()*5,fill:'#efe9dc'},$('particles')),x,y,dx:Math.cos(a)*dist,dy:Math.sin(a)*dist-60,del:rnd()*.8});}

/* piezas en cinta */
const conv=[];
for(let k=0;k<8;k++){const g=el('g',{},$('convParts'));
  el('rect',{x:-45,y:-60,width:90,height:60,rx:14,fill:'#5f6a7b',stroke:'#2c3340','stroke-width':4},g);
  el('circle',{cx:-18,cy:-30,r:9,fill:'#20262f'},g);el('circle',{cx:18,cy:-30,r:9,fill:'#20262f'},g);
  el('rect',{x:-32,y:-52,width:40,height:5,rx:2.5,fill:'#8c96a6'},g);conv.push(g);}

/* etiquetas de sectores */
const labs=[['Drones',180,120,190],['Defensa',460,205,210],['Aeroespacial',760,120,270],['Industria',1060,205,210]].map(([t,x,y,w])=>{
  const g=el('g',{},$('labels'));
  el('rect',{x:-w/2,y:-32,width:w,height:64,rx:32,fill:'#ffffff',opacity:.94},g);
  el('circle',{cx:-w/2+30,cy:0,r:10,fill:'url(#fu-brand)'},g);
  const tx=el('text',{x:14,y:10,'text-anchor':'middle','font-size':30,'font-weight':600,fill:'#0f1a2e'},g);tx.textContent=t;
  return{g,x,y,tx,es:t};});

/* ---------- Fusi ---------- */
const F={root:$('fusi'),body:$('fusiBody'),shadow:$('fShadow'),lidL:$('lidL'),lidR:$('lidR'),cL:$('closeL'),cR:$('closeR'),
  pupL:$('pupL'),pupR:$('pupR'),mouth:$('mouth'),armL:$('armL'),armR:$('armR'),browL:$('browL'),browR:$('browR'),
  pf:[$('pf0'),$('pf1'),$('pf2')]};
function setFusi(o,t){
  if(typeof VO!=='undefined'){o=Object.assign({},o,{talk:VO[Math.min(VO.length-1,Math.max(0,Math.round(CUR_T*30)))]});}
  const s=Object.assign({x:640,y:600,s:1,hop:0,sq:0,lid:0,lidR:null,lx:0,ly:0,talk:0,smile:1,brow:0,waveR:0,waveL:0,show:true},o);
  F.root.style.display=s.show?'':'none';if(!s.show)return;
  setA(F.root,{transform:`translate(${s.x},${s.y}) scale(${s.s})`});
  setA(F.body,{transform:`translate(0,${-s.hop}) scale(${1+s.sq},${1-s.sq})`});
  setA(F.shadow,{rx:200*(1-clamp(s.hop/400)*.5),opacity:.28*(1-clamp(s.hop/300)*.5)});
  const lr=s.lidR==null?s.lid:s.lidR;
  F.lidL.setAttribute('height',80*clamp(s.lid));F.lidR.setAttribute('height',80*clamp(lr));
  F.cL.setAttribute('opacity',s.lid>.92?1:0);F.cR.setAttribute('opacity',lr>.92?1:0);
  const pt=`translate(${s.lx*12},${s.ly*10})`;F.pupL.setAttribute('transform',pt);F.pupR.setAttribute('transform',pt);
  const w=48,o2=clamp(s.talk),sm=s.smile;
  F.mouth.setAttribute('d',`M${-42-w} -114 Q-42 ${-114+6*sm} ${-42+w} -114 Q-42 ${-114+18*sm+o2*46} ${-42-w} -114Z`);
  const bt=`translate(0,${-s.brow*8})`;F.browL.setAttribute('transform',bt);F.browR.setAttribute('transform',bt);
  setA(F.armL,{transform:`translate(-215,-150) rotate(${-20+s.waveL})`});
  setA(F.armR,{transform:`translate(215,-150) rotate(${20-s.waveR})`});
  F.pf.forEach((c,k)=>{const ph=((t*.5)+k/3)%1;setA(c,{cx:-116+Math.sin(ph*6+k)*14,cy:-404-ph*120,r:12+ph*24,opacity:(1-ph)*.55});});
}
/* ---------- Bocadillo ---------- */
let bKey='';
function setBubble(o){
  const{ x,y,w,tipX,tipY,sc}=o;const lines=o.lines.map(tr);const h=30+lines.length*38;
  show('bubble',sc>0.01);if(sc<=0.01)return;
  const key=lines.join('|')+w;
  if(key!==bKey){bKey=key;const tx=$('bText');tx.textContent='';
    lines.forEach((l,k)=>{const sp=el('tspan',{x:w/2,y:48+k*38},tx);sp.textContent=l;});}
  setA($('bRect'),{x:0,y:0,width:w,height:h});
  const bx=clamp(tipX-x,44,w-44);
  $('bTail').setAttribute('d',`M${bx-18} ${h-2} L${tipX-x} ${tipY-y} L${bx+18} ${h-2}`);
  setA($('bPatch'),{x:bx-16,y:h-9,width:32,height:10});
  const ax=tipX-x,ay=tipY-y;
  $('bubble').setAttribute('transform',`translate(${x},${y}) translate(${ax},${ay}) scale(${sc}) translate(${-ax},${-ay})`);
}
function show(id,on){$(id).style.display=on?'':'none';}
let capText=null;
function cap(t){t=t&&tr(t);if(t===capText)return;capText=t;const c=$('caption');if(t){c.textContent=t;c.classList.remove('off');}else c.classList.add('off');}

/* ---------- Escenas ---------- */
const scenes=[
{dur:7,render(t){
  show('bgFactory',true);show('dark',true);
  let L=0;if(t>1.3&&t<2.3)L=Math.sin(t*47)>.15?.65:.12;else if(t>=2.3)L=1;
  $('dark').setAttribute('opacity',.74*(1-L));
  $('skylights').setAttribute('opacity',.15+.85*L);$('spotlight').setAttribute('opacity',L);
  const asleep=t<3.1;
  show('zzz',t<3.2);
  [0,1,2].forEach(k=>{const ph=((t*.55)+k/3)%1,z=$('z'+k);
    setA(z,{x:720+ph*90,y:330-ph*130,'font-size':28+ph*26,opacity:(1-ph)*clamp((3.1-t)/.4)});z.textContent='z';});
  const hop=arc(t,5.6,.7,95);
  let sq=asleep?.015*Math.sin(t*2.2):0;
  if(t>5.3&&t<5.6)sq=.09*Math.sin(Math.PI*seg(t,5.3,5.6));else if(hop>0)sq=-.05;else if(t>6.3&&t<6.6)sq=.07*Math.sin(Math.PI*seg(t,6.3,6.6));
  setFusi({x:640,y:600,s:1,hop,sq,
    lid:asleep?1:Math.max(1-seg(t,3.1,3.45),blink(t,[4.7])),
    lx:kf(t,[[3.6,0],[3.9,-1],[4.3,-1],[4.6,1],[5.0,1],[5.3,0]]),ly:kf(t,[[5.3,0],[5.6,.4]]),
    brow:kf(t,[[3.1,0],[3.4,1],[4.0,.2],[5.5,.2],[5.8,1],[6.6,.3]]),
    talk:kf(t,[[3.0,0],[3.3,.85],[3.8,0]]),smile:asleep?.2:kf(t,[[3.1,.2],[3.8,1]]),
    waveR:kf(t,[[6.3,0],[6.6,50],[7,40]]),waveL:kf(t,[[6.3,0],[6.6,40],[7,30]])},t);
  cap(t<3.4?'Beniparrell, Valencia. Las 6:00 de la mañana.':'En la nave de Additium3D, alguien se está despertando…');
}},
{dur:7,render(t){
  show('bgFactory',true);$('skylights').setAttribute('opacity',1);$('spotlight').setAttribute('opacity',1);
  const talking=(t>.3&&t<3.2)||(t>3.8&&t<6.6);
  const wv=seg(t,0,.3)*(1-seg(t,2,2.3));
  setFusi({x:640,y:600,s:1,hop:talking?10*Math.abs(Math.sin(t*4)):0,
    lid:blink(t,[2.6,5.4]),lx:.2,ly:.3,talk:talking?talkAmp(t):0,brow:kf(t,[[0,.3],[3.8,.3],[4.1,1],[4.8,.4]]),
    waveR:wv*(62+22*Math.sin(t*11)),waveL:kf(t,[[0,30],[1,0]])},t);
  const second=t>=4.7;
  setBubble({x:770,y:64,w:480,lines:second?['Fabrico piezas finales en serie.','¿Te enseño cómo?']:['¡Hola! Soy Fusi,','la MJF 5620 de Additium3D.'],
    tipX:700,tipY:248,sc:second?back(seg(t,4.7,5.05)):back(seg(t,.1,.45))*(t<4.55?1:1-seg(t,4.55,4.7))});
  cap('');
}},
{dur:24,render(t){
  show('bgFactory',true);show('process',true);
  $('skylights').setAttribute('opacity',1);$('spotlight').setAttribute('opacity',.4);
  const pa=back(seg(t,0,.8));
  $('process').setAttribute('transform',`translate(850,290) scale(${Math.max(.01,pa)}) translate(-850,-290)`);
  $('process').setAttribute('opacity',seg(t,0,.35));
  const p=ease(seg(t,0,1));
  const starts=[1.2,5.8,10.4,15.6];let talking=false;for(const s0 of starts)if(t-s0>.2&&t-s0<3.4)talking=true;
  setFusi({x:lerp(640,250,p),y:lerp(600,560,p),s:lerp(1,.6,p),hop:t>15.6&&t<22.6?12*Math.abs(Math.sin(t*6)):0,
    lx:p,ly:.35,talk:talking?talkAmp(t):0,lid:blink(t,[4.2,9.6,14.4,19.8]),
    brow:t>15.6?.8:.2+.6*Math.max(...starts.map(s0=>arc(t,s0,.8,1))),waveR:t>22.8?kf(t,[[22.8,0],[23.2,55]]):0},t);
  // capas
  let active=null;
  layers.forEach((L,i)=>{
    const rec=seg(t,L.s,L.s+L.d),ink=seg(t,L.s+L.d,L.s+2*L.d),heat=seg(t,L.s+2*L.d,L.s+3*L.d),hEnd=L.s+3*L.d;
    if(t>L.s&&t<hEnd)active={i,rec,ink,heat,L};
    if(rec<=0){L.pw.style.display='none';L.segs.forEach(s=>s.r.style.display='none');return;}
    L.pw.style.display='';L.pw.setAttribute('width',binW*rec);
    const ix=ink*binW,hx=heat*binW,extra=clamp((t-hEnd)/.6);
    L.segs.forEach(s=>{
      if(ix<=s.a){s.r.style.display='none';return;}
      s.r.style.display='';s.r.setAttribute('width',Math.min(s.b,ix)-s.a);
      if(hx>s.a){const g=clamp((hx-s.a)/(binW*.35))+extra;s.r.setAttribute('fill',g<.5?mix('#ffd07a','#ff7a2e',g*2):mix('#ff7a2e','#6e7888',(g-.5)*2));}
      else s.r.setAttribute('fill','#2b303a');
    });
  });
  ['rec','head','lamp'].forEach(id=>show(id,false));drops.forEach(d=>d.style.display='none');
  let phase=-1;
  if(active){const{i,rec,ink,heat}=active,yT=layerTop(i);
    if(rec>0&&rec<1){show('rec',true);$('rec').setAttribute('transform',`translate(${binL+rec*binW},${yT})`);phase=0;}
    else if(ink>0&&ink<1){show('head',true);const hx=binL+ink*binW;$('head').setAttribute('transform',`translate(${hx},${yT})`);phase=1;
      if(i===0){const lx=ink*binW;const over=active.L.segs.some(s=>lx>s.a-20&&lx<s.b+20);
        if(over)drops.forEach((d,k)=>{const ph=((t*3.2)+k/5)%1;d.style.display='';setA(d,{cx:hx-32+k*16,cy:yT-28+ph*28,opacity:1-ph*.5});});}}
    else if(heat>0&&heat<1){show('lamp',true);$('lamp').setAttribute('transform',`translate(${binL+heat*binW},${yT})`);phase=2;}
  }
  const slow=t<15.3;
  stepC.forEach((c,k)=>{const on=slow?phase===k||(phase===-1&&k===(t<5.8?0:t<10.4?1:2)):true;c.setAttribute('fill',on?'#1f46e0':'#22314c');stepT[k].setAttribute('fill',on?'#ffffff':'#8fa3c2');});
  $('layerCount').textContent=tr('Capa')+' '+(t<15.6?1:fmt(1+Math.floor(ease(seg(t,15.6,22.4))*2499)));
  cap(t<5.8?'Paso 1: extiendo una capa finísima de polvo PA12 S. Unas 90 micras.':
      t<10.4?'Paso 2: mis cabezales dibujan la pieza con agente de fusión, gota a gota.':
      t<15.4?'Paso 3: una pasada de calor funde lo dibujado. El resto sigue siendo polvo.':
             'Y repito. Capa a capa, miles de veces, hasta tener la pieza entera.');
}},
{dur:8,render(t){
  show('bgFactory',true);show('build',true);$('skylights').setAttribute('opacity',1);$('spotlight').setAttribute('opacity',.5);
  const pa=back(seg(t,0,.7));$('build').setAttribute('transform',`translate(820,310) scale(${Math.max(.01,pa)}) translate(-820,-310)`);
  $('powderCover').setAttribute('opacity',1-ease(seg(t,2.2,4.2)));
  parts.forEach(q=>{const pr=seg(t,2.2+q.del,4.4+q.del);q.c.style.display=pr>0&&pr<1?'':'none';
    setA(q.c,{cx:q.x+q.dx*ease(pr),cy:q.y+q.dy*pr+120*pr*pr,opacity:1-pr});});
  const rev=seg(t,3.6,5);
  bparts.forEach(b=>b.g.setAttribute('transform',`translate(${b.x},${b.y-rev*6*Math.sin(t*2+b.ph)}) rotate(${b.rot+rev*8*Math.sin(t+b.ph)})`));
  const hop=arc(t,4.4,.6,70)+arc(t,5.1,.5,40);
  setFusi({x:260,y:560,s:.6,hop,sq:hop>0?-.04:0,lx:1,ly:kf(t,[[0,.3],[4,.3],[4.4,-.3]]),
    lid:t>4.3?Math.max(.32,blink(t,[6.8])):blink(t,[1.6]),brow:kf(t,[[2,0],[2.4,1],[3.5,.5]]),
    talk:t>5.4&&t<7.4?talkAmp(t):0,waveR:kf(t,[[4.2,0],[4.5,70],[5.4,40],[6,10]]),waveL:kf(t,[[4.2,0],[4.5,60],[5.4,30],[6,0]])},t);
  setBubble({x:40,y:150,w:520,lines:['¡Decenas de piezas en cada tanda!'],tipX:295,tipY:338,sc:back(seg(t,5.3,5.65))});
  cap('Al acabar, el trabajo sale lleno de piezas anidadas. Sin soportes, aprovechando todo el volumen.');
}},
{dur:8,render(t){
  show('bgFactory',true);show('series',true);$('skylights').setAttribute('opacity',.3);$('spotlight').setAttribute('opacity',.3);
  $('belt').setAttribute('stroke-dashoffset',-t*140);
  let qc=false;
  conv.forEach((g,k)=>{const base=(t*140+k*180)%1440,x=200+base;g.style.display=x<1340?'':'none';
    g.setAttribute('transform',`translate(${x},470)`);if(x>915&&x<965)qc=true;});
  $('qcLight').setAttribute('fill',qc?'#3ddc84':'#1d4d33');
  $('serCount').textContent=fmt(Math.round(ease(seg(t,.4,7))*1000));
  setFusi({x:150,y:560,s:.55,hop:t<6?6*Math.abs(Math.sin(t*7)):0,lx:1,ly:.2,lid:blink(t,[2.4]),lidR:Math.max(blink(t,[2.4]),arc(t,6.4,.6,1)*1.1),
    brow:kf(t,[[6.2,0],[6.5,.9],[7,.3]]),smile:1.2,waveR:kf(t,[[6.2,0],[6.5,45],[7.2,20]])},t);
  cap('Piezas finales y de montaje, en serie. Idénticas, lote tras lote.');
}},
{dur:8,render(t){
  show('sectors',true);
  const pos=tt=>{const x=lerp(-160,1460,seg(tt,.3,7.6));return[x,300+Math.sin(tt*2)*22-(x-640)*.05];};
  const[dx,dy]=pos(t);$('drone').setAttribute('transform',`translate(${dx},${dy}) rotate(${Math.cos(t*2)*4-3})`);
  $('prop').setAttribute('ry',6+18*Math.abs(Math.sin(t*40)));
  const pts=[];for(let k=0;k<22;k++){const[x,y]=pos(t-.12-k*.07);pts.push(`${x-100},${y}`);}
  $('trail').setAttribute('points',pts.join(' '));$('trail').setAttribute('opacity',seg(t,.5,1));
  labs.forEach((l,k)=>{const s=back(seg(t,1+k*.8,1.35+k*.8));l.g.style.display=s>0.01?'':'none';
    l.g.setAttribute('transform',`translate(${l.x},${l.y+Math.sin(t*2+k)*5}) scale(${Math.max(.01,s)})`);});
  setFusi({x:230,y:580,s:.5,hop:arc(t,1.1,.5,40)+arc(t,4.6,.5,40),lx:lerp(.3,1,seg(t,.3,6)),ly:-1,
    lid:blink(t,[3.3,6.6]),brow:.8,waveR:40+30*Math.sin(t*8),talk:t>5.3&&t<6.4?talkAmp(t):0},t);
  cap('Drones, defensa, aeroespacial e industria: nuestras piezas ya están trabajando ahí fuera.');
}},
{dur:9,render(t){
  show('final',true);
  const lo=ease(seg(t,.4,1.6));$('logoWrap').setAttribute('opacity',lo);
  $('logoWrap').setAttribute('transform',`translate(640,210) scale(${lerp(.9,1,lo)}) translate(-640,-210)`);
  ['f1','f2','f3','f4'].forEach((id,k)=>{const a=ease(seg(t,1.6+k*.45,2.2+k*.45));$(id).setAttribute('opacity',a);$(id).setAttribute('transform',`translate(0,${(1-a)*14})`);});
  const inP=ease(seg(t,3.6,4.6));
  setFusi({x:lerp(1420,1150,inP),y:600,s:.33,hop:t<4.6?14*Math.abs(Math.sin(t*9)):arc(t,7.2,.5,50),lx:-1,ly:.1,
    lid:blink(t,[5.6]),talk:t>5.2&&t<6.8?talkAmp(t):0,brow:.5,waveR:t>4.6?50+28*Math.sin(t*9):0},t);
  cap(t>5?'¿Fabricamos tu próxima serie?':'');
}}
];
const starts=[];let total=0;scenes.forEach(s=>{starts.push(total);total+=s.dur;});
const hideIds=['bgFactory','sectors','process','build','series','final','dark','zzz','bubble','rec','head','lamp'];
function renderAt(T){
  let i=scenes.length-1;for(let k=0;k<scenes.length;k++){if(T<starts[k]+scenes[k].dur){i=k;break;}}
  CUR_T=T;hideIds.forEach(id=>show(id,false));
  scenes[i].render(T-starts[i]);
}
/* ---------- Reproductor ---------- */
let T=0,playing=false,last=null;
const scrub=$('scrub');scrub.max=total;
const mmss=s=>Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0');
function ui(){scrub.value=T;$('time').textContent=mmss(T)+' / '+mmss(total);
  $('playBtn').textContent=tr(playing?'Pausa':'Reproducir');$('playBtn').setAttribute('aria-pressed',playing?'true':'false');}
function frame(now){if(!playing)return;if(last==null)last=now;const dt=Math.min(.05,(now-last)/1000);last=now;T+=dt;
  if(T>=total){T=total-.001;playing=false;renderAt(T);ui();$('bigPlay').dataset.end='1';$('bigPlay').textContent=tr('Volver a ver');$('overlay').hidden=false;return;}
  renderAt(T);ui();requestAnimationFrame(frame);}
function play(){if(T>=total-.01)T=0;playing=true;last=null;$('overlay').hidden=true;ui();requestAnimationFrame(frame);}
function pause(){playing=false;ui();}
$('bigPlay').onclick=()=>{T=0;play();};
$('playBtn').onclick=()=>playing?pause():play();
scrub.oninput=()=>{T=+scrub.value;$('overlay').hidden=true;renderAt(T);ui();};

/* ---------- Integración H-WING ---------- */
const playerEl=$('player');
$('fsBtn').onclick=()=>{if(document.fullscreenElement||document.webkitFullscreenElement){(document.exitFullscreen||document.webkitExitFullscreen).call(document);}
  else if(playerEl.requestFullscreen)playerEl.requestFullscreen().catch(()=>{});else if(playerEl.webkitRequestFullscreen)playerEl.webkitRequestFullscreen();};
if(!(document.fullscreenEnabled||document.webkitFullscreenEnabled))$('fsBtn').hidden=true;
function applyLang(){
  document.querySelectorAll('#fu-stage text[data-es]').forEach(n=>{n.textContent=tr(n.dataset.es);});
  stepT.forEach((n,i)=>{n.textContent=tr(stepNames[i]);});
  labs.forEach(l=>{l.tx.textContent=tr(l.es);});
  const bp=$('bigPlay');bp.textContent=tr(bp.dataset.end?'Volver a ver':'Ver a Fusi');
  renderAt(T);ui();
}
document.querySelectorAll('#fu-stage text').forEach(n=>{if(n.children.length===0&&n.textContent.trim()&&TR[n.textContent.trim()])n.dataset.es=n.textContent.trim();});
document.addEventListener('langchange',applyLang);
/* pausa al salir de pantalla o de la pestaña */
if('IntersectionObserver' in window){new IntersectionObserver(es=>{es.forEach(e=>{if(!e.isIntersecting&&playing)pause();});},{threshold:.15}).observe(playerEl);}
document.addEventListener('visibilitychange',()=>{if(document.hidden&&playing)pause();});
T=10.2;applyLang();
})();
