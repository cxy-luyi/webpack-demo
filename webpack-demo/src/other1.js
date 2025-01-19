const whatMonth = () => {
    const now = new Date();

    return "现在是" + (now.getMonth() + 1) + "月"
}

console.log(whatMonth())