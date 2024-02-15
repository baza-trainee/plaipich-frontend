export const formatText = (string: string) => {
const array =  string.split(/(\n)/).filter((str, ind) => ind % 2 === 0);
    console.log(array);
    return array

}
   
