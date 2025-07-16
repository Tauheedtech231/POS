// src/server/keepAlive.ts
import { prisma } from '@/lib/prisma';

setInterval(async () => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    console.log('✅ DB Keep-alive ping successful');
  } catch (err) {
    console.error('❌ DB Keep-alive failed:', err);
  }
}, 5 * 60 * 1000);
