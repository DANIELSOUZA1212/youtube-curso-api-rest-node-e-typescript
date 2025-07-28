import { db } from './connection';

async function test() {
  try {
    await db.raw('SELECT 1');
    console.log('Conexão com PostgreSQL OK');
  } catch (error) {
    console.error('Erro na conexão:', error);
  }
}

test();
