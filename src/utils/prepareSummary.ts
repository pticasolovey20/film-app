export const prepareSummary = (value:string):string => {
    const regex =  new RegExp('<[b-p]>|<.[b-p]>')
    const result = value.split(regex)
    return result.join('')
}