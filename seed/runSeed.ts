import { seed } from './seedData';

async function main() {
  try {
    await seed();
    console.log('Seed finished successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seed failed:', error);
    process.exit(1);
  }
}

main();
