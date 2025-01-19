const whatDay = () => {
    const now = new Date();

    return "现在是" + now.getDate() + "号"
}

console.log(whatDay())