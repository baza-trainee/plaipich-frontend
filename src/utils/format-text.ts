export const formatText = (string: string) => 
    string.split(/( \n)/).filter((str, ind) => ind % 2 === 0);
