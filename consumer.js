const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

async function main() {
    let calcule = [];

    await client.connect();
    while (true) {
        const queue = await client.blPop('fila_calculos', 0);
        if (queue) {
            calcule.push(queue.element.replaceAll(" ", ""));
            let result = calcule.join("");
            if (result[result.length - 1] >= '0' && result[result.length - 1] <= '9') {
                result = calcule.join("");
                console.log(`${result} = ${eval(result)}`)
            } else {
                console.log(`${result} = `)
            }
        }
    }
}

main();