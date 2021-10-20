export const validateName = (name,setError) => {
    const words = name.split(' ');
    if (words.length !== 4) {
        setError('Name field should have four words');
        return false;
    }

    if(/[aoump]/ig.test(words[0])) {
        setError('First word cannot have "a,o,u,m,p"');
        return false;
    }
    
    if(/[bcinqrvwxyz]/ig.test(words[1])) {
        setError('Second word can have only "asdfghjklopuytem"');
        return false;
    }
    
    if(/[aeou]/ig.test(words[2]) || !/\d/ig.test(words[2])) {
        setError('Third word cannot have only "a,e,o,u" and at least one number' );
        return false;
    }

    for(let i = 0; i < words.length; i++) {
        if(!(words[i].length >=3) || !(words[i].length <=5)) {
            setError('Each word from Name field should be 3 to 5 character long');
            return false;
        }
    }

    if(!/t/.test(words[3])){
        setError('Fourth word should have at least one "t"');
        return false;
    }
    setError('');
    return true;
}

export const validateEmail = (email,setError) => {
    let firstPart = email.split('@')[0];
    let secondPart = email.split('@')[1].split('.')[0];
    let thirdPart = email.split('@')[1].split('.')[1]

    if(!(firstPart.match(/[a-zA-Z0-9.-_+]{4,}/g)) || (firstPart.length > 20)){
        setError("Before @ only 4 to 20 characters allowed and can include '.','-','_','+' ");
        return false;
    }

    if((/[._+-]/g.test(secondPart)) || (secondPart.length < 5 || secondPart.length > 10)){
        setError("After @ only 5 to 10 characters allowed and cannot include '.','-','_','+' ");
        return false;
    }

    if((/[._+-]/g.test(thirdPart)) || (thirdPart.length < 2 || thirdPart.length > 3)){
        setError("After . only 2 to 3 characters allowed and cannot include '.','-','_','+' ");
        return false;
    }

    setError('');
    return true;
}

export const formatPhoneNumber = (phoneNumberString) => {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{2})(\d{2})(\d{3})$/);
    if (match) {
      var intlCode = '+1 ';
      return [intlCode, '(', match[2], ') ', match[3], ' ', match[4], ' ', match[5]].join('');
    }
    return null;
}