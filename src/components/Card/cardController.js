 export const capitalize = (string)=>{
    return string.charAt().toUpperCase() + string.slice(1)
}

export const tipos = (arr)=>{
    let type = []
    for(let i = 0;i<arr.length;i++)
        type.push(arr[i].type.name)
    
    return type
}

const _color = {
    water:'#17a2b8',
    poison:'#9400d3',
    flying:'#00dbff',
    grass:'#228b22',
    bug:'#74ff74',
    fire:'#ff2400',
    ghost:'#8b008b',
    normal:'#808080'
}


export const setColor = (type)=>{
    let color2 = _color[type]
    return {
        background:color2,
        color:'#fff'
    }
}
