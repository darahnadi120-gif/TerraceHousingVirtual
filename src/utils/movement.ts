export function getMovementSpeed({ sprint }: { sprint: boolean }) {
  return sprint ? 4.2 : 2.6;
}
