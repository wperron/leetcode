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

function rtoi(r) {
    return r.replace(/CM/g, "DCD")
        .replace(/M/g, "DD")
        .replace(/CD/g, "CCCC")
        .replace(/D/g, "CCCCC")
        .replace(/XC/g, "LXL")
        .replace(/C/g, "LL")
        .replace(/XL/g, "XXXX")
        .replace(/L/g, "XXXXX")
        .replace(/IX/g, "VIV")
        .replace(/X/g, "VV")
        .replace(/IV/g, "IIII")
        .replace(/V/g, "IIIII")
        .length
}

module.exports = {
    itor,
    rtoi,
}