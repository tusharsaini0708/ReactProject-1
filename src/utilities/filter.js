export function filterGenre(items, currentGenre) {
  if (currentGenre === "All Genres") return items;

  return items.filter((c) => c.genre.name === currentGenre);
}
