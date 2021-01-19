export default function recursiveSearch(arr) {
    let result = []

    arr.$children.forEach(item => {
        result.push(item)

        if (item.$children.length) {
            const children = recursiveSearch(item)

            children.forEach(item => {
                if (typeof item === "object") {
                    result.push(item)
                }
            })
        }
    })

    return result
}

