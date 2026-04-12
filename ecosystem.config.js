/**
 * PM2 Ecosystem Configuration for Envecoplast
 * This file is used by cPanel's Node.js app manager
 */

module.exports = {
  apps: [
    {
      name: 'envecoplast',
      script: './server.js',
      instances: 1,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      max_memory_restart: '512M',
      autorestart: true,
      watch: false,
      ignore_watch: [
        'node_modules',
        'logs',
        '.next/cache',
      ],
      max_restarts: 10,
      min_uptime: '10s',
    },
  ],
};
