import * as readline from 'readline';
import bcrypt from 'bcrypt';

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// El callback ahora recibe directamente el texto que escribió el usuario
export const askUser = (callback: (username: string) => void): void => {
  rl.question('Ingrese su nombre de usuario: ', (input) => {
    callback(input.trim());
  });
};

export const askPassword = (callback: (password: string) => void): void => {
  rl.question('Ingrese su contrasenia: ', (input) => {
    callback(input.trim());
  });
};

// Usamos la versión síncrona de bcrypt para no anidar más callbacks aquí
export const encryptPassword = (password: string): string => {
  return bcrypt.hashSync(password, 10);
};