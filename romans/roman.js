// converts decimal integers to roman numeral
function itor(n) {
    return 'I'.repeat(n)
        .replace(/IIIII/g, 'V')
        .replace(/IIII/g, 'IV')
        .replace(/VV/g, 'X')
        .replace(/VIV/g, 'IX')
        .replace(/XXXXX/g, 'L')
        .replace(/XXXX/g, 'XL')
        .replace(/LL/g, 'C')
        .replace(/LXL/g, 'XC')
        .replace(/CCCCC/g, 'D')
        .replace(/CCCC/g, 'CD')
        .replace(/DD/g, 'M')
        .replace(/DCD/g, 'CM')
}

module.exports = {
    itor,
}