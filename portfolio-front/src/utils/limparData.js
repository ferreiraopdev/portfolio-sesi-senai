export const limparData = (dataBack) => {
    const arrayData = dataBack.split("T")[0]
    const data = arrayData.split("-")
    const dataFormatada = `${data[2]}/${data[1]}/${data[0]}`
    return dataFormatada
}