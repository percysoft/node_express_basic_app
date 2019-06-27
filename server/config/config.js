//  =======
// Puerto
// ========

process.env.PORT = process.env.PORT  || 3000;


////////////
// Vencimiento del token
// 60 segundos 60 minutos

process.env.CADUCIDAD_TOKEN = 60 * 60

/////////


////////////
// Seed de autenticacion

process.env.SEED_TOKEN = process.env.SEED_TOKEN || 'este-es-el-seed-desarrollo'
/////////