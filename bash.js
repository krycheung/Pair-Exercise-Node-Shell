process.stdout.write('prompt > ');

process.stdin.on('data', (data)=>{
    // const cmd = data.toString().trim();

    // process.stdout.write('You typed: ' + cmd);
    // process.stdout.write('\nprompt > ');

    const cwd = process.cwd();
    process.stdout.write(cwd);

});