import * as readline from 'readline';
import bcrypt from 'bcrypt';

export class ConsoleUI {
  public static rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  public static askUser(callback: (username: string) => void): void {
    ConsoleUI.rl.question('Ingrese su nombre de usuario: ', (input) => {
      callback(input.trim());
    });
  }

  public static askPassword(callback: (password: string) => void): void {
    ConsoleUI.rl.question('Ingrese su contrasenia: ', (input) => {
      callback(input.trim());
    });
  }
}

export class AuthService {
  public static encryptPassword(password: string): string {
    return bcrypt.hashSync(password, 10);
  }

  public static verifyPassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}