// src/utils/translations.ts

/**
 * Diccionario de traducciones para tipos de fertilizante
    */
const fertilizerTranslations: Record<string, string> = {
  // Tipos de fertilizante
  'phosphorus': 'fósforo',
  'nitrogen': 'nitrógeno',
};

/**
 * Traduce el tipo de fertilizante de inglés a español
 * Si no encuentra la traducción, devuelve el valor original con la primera letra en mayúscula
 */
export function translateFertilizer(fertilizerType: string): string {
  const key = fertilizerType.toLowerCase().trim();
  return fertilizerTranslations[key] || capitalizeFirst(fertilizerType);
}

/**
 * Capitaliza la primera letra de un string
 */
function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
