export default function getFormConfig() {
  const fields = [
    {
      type: 'text',
      format: 'text',
      label: 'Username:',
      name: 'username',
    },
    {
      type: 'password',
      minLength: 6,
      label: 'Password:',
      name: 'password',
    },
  ];
  return fields;
}
