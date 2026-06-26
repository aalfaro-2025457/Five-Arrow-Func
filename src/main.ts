import { rl, askUser, askPassword, encryptPassword } from './Functions.js';
import { User } from './types/User.js';

const users: User[] = [];

const flowCreateUser = (): void => {
  console.log('\n--- Creando Usuario ---');
  askUser((username) => {
    
    askPassword((password) => {
      
      const hashedPassword = encryptPassword(password);

      const newUser: User = {
        id: users.length + 1,
        username: username,
        password: hashedPassword
      };

      users.push(newUser);
      console.log(`\n¡Usuario "${username}" creado con éxito!\n`);
      
      menu();
    });
  });
};

const menu = (): void => {
  rl.question(`
  Bienvenido al sistema
  Elige una opcion a realizar:
  1. Crear Usuario
  2. Ver usuarios creados
  3. Salir
  `, (opt) => {
    const op = parseInt(opt.trim());

    switch (op) {
      case 1:
        flowCreateUser();
        break;
      case 2:
        console.log('\n--- Lista de Usuarios ---', users, '\n');
        menu();
        break;
      case 3:
        console.log('¡Hasta luego!');
        rl.close();
        break;
      default:
        console.log("Esta no es una opcion válida");
        menu();
        break;
    }
  });
};

menu();