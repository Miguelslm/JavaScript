let emails = ['email1@gamil.com', 'email2@gamil.com', 'email3@gamil.com', 'email4@gamil.com', 'email5@gamil.com']


//for (let elemento = 0; elemento < emails.length; elemento ++ ){
//    console.log(`E-mail endiado para: ${emails[elemento]}`);
//}


emails.forEach((email,cadastro, completo)=>{
    console.log(`--- --- --- --- --- --- ---`);
    console.log(`E-mail endiado para: ${email}`);
    console.log(`seu numero de cadastro é: ${cadastro}`);
    console.log(`Lista da sala: ${completo}`);
    console.log(`--- --- --- --- --- --- ---`);
    
}) 