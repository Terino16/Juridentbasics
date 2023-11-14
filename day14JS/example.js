
async function fetchData() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('Data received!');
      resolve();
    }, 2000);
  });
}

function processData() {
  console.log('Processing data...');
}

async function main() {
  await fetchData();
  processData();
}

main();
