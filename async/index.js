function test() {
    return new Promise((res) => {
        setTimeout(() => {
            res("test");
        }, 1000);
    });
}

test(1000).then((t) => {
    console.log(t);
    return test(1000);
}).then((t) => {
    console.log(t);
});