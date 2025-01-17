export const truncate = (s: string, length: number) => {
  return (
    s.normalize().slice(0, 1).toUpperCase() +
    s.normalize().slice(1, length ?? 5)
  );
};

export const capitalize = (s: string) => {
  return s.toUpperCase();
};

export const strCapitalize = (s: string) => {
  return s.slice(0, 1).toUpperCase() + s.slice(1);
};
