
//Generates a password based on the size which the user selects on the page
function PasswordGenerate()
{
    var pwdLenSelect = document.getElementById("select-size");
    var pwdLenNum = parseInt(pwdLenSelect.value);

    var charArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','!', '@', '#', '$', '%', '^', '*','<', '>', '?'];
    var i;
    var pwdArr = [pwdLenNum];
    var pwdStr = "";
    var pwdStrTitle = "Password Suggested: "

    //creates password from charArray
    for(i=0; i<pwdLenNum; i++)
    {
        var randomNum = Math.floor(Math.random() * 72);
        pwdArr[i] = charArray[randomNum];
    }

    pwdStr = pwdArr.join('');
   
    //returns password to html page
    document.getElementById("password-return").textContent = pwdStrTitle + pwdStr;
}    

