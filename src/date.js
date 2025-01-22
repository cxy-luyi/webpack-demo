export const whatYear = () => {
    const now = new Date();

    return "现在是" + now.getFullYear() + "年"
}

export const whatMonth = () => {
    const now = new Date();

    return "现在是" + (now.getMonth() + 1) + "月"
}

export const whatDay = () => {
    const now = new Date();

    return "现在是" + now.getDate() + "号"
}