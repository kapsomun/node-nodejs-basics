const parseArgs = () => {
    const args = process.argv.slice(2)
    const values = args.map((element, index, arr) => {
        if (element.startsWith("--")) {
            console.log(`${element.slice(2)} is ${arr[index + 1]};`);
        }

    })

};

parseArgs();