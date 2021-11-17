export const formateDate = (inputValue) => {
    const mounthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let date = new Date(inputValue)

    return `${mounthArray[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}