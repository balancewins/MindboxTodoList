/* Удаление лишних пробелов в начале строки */
export const validateSpaces = (value: string): string => {
  return value.replace(/\s{2,}/g, ' ').replace(/^\s/, '');
};

export const validateTodoText = (value: string): string => {
  const validValue: string = validateSpaces(value).replace(
    /[^А-Яа-яA-Za-z0-9\s-]/g,
    '',
  );
  return validValue?.charAt(0).toUpperCase() + validValue?.slice(1) || '';
};
