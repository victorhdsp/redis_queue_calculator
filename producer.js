const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

async function main() {
    const args = process.argv.slice(2);
    
    await client.connect();
    args.forEach(async (arg) => {
        await client.rPush("fila_calculos", arg)
    })
    await client.quit();
}

main();