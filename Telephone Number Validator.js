function telephoneCheck(str) {

    return /^(1 ?)?(\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{4}$/.test(str)
       
}
    
telephoneCheck("555-555-5555");
    
/* This function validates or not a US number.
The only cases can be :
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
1(555)555-5555 */