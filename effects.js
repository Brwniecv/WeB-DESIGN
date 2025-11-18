let viewLoginPwd = false;

function changePwdView() 

{
    let getPwdView = document.getElementById("viewPwdLogin");

    if (viewLoginPwd === false) 
    {
        getPwdView.setAttribute("type", "text");
        viewLoginPwd = true;
    }
    else if (viewLoginPwd === true)
    {
        getPwdView.setAttribute("type", "password");
        viewLoginPwd = false;
    }

}