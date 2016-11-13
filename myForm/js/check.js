  //
  //点击验证，触发事件
  document.getElementsByTagName('button')[0].onclick = checkbox;
  //用tagname获取时即使只有一个buttonn也要加下标[0]
  //
  //输入提示框显示
  var tipmessage = document.getElementById("tipname");
  var textName = document.getElementById("textName");
  textName.onfocus = showtip;

  function showtip() {
    if (textName.value == '') {
      tipmessage.innerHTML = "请输入4-16个字符"; 
      tipmessage.style.color = 'grey';
    }
  }
  var tipeemail = document.getElementById("tipeemail");
  var textEmail = document.getElementById("textEmail");
  textEmail.onfocus = showtipemail;

  function showtipemail() {
    if (textEmail.value == '') {
      tipeemail.innerHTML = "请输入邮箱";
      tipeemail.style.color = 'grey';
    }
  }
  var tipphone = document.getElementById("tipphone");
  var textPhone = document.getElementById("textPhone");
  textPhone.onfocus = showtipphone;

  function showtipphone() {
    if (textPhone.value == '') {
      tipphone.innerHTML = "请输入手机";
      tipphone.style.color = 'grey';
    }
  }
  var tippassword = document.getElementById("tippassword");
  var textPassword = document.getElementById("textPassword");
  textPassword.onfocus = showtippassword;

  function showtippassword() {
    if (textPassword.value == '') {
      tippassword.innerHTML = "密码应包含大小写字母和数字";
      tippassword.style.color = 'grey';
    }
  }
  var tippassword2 = document.getElementById("tippassword2");
  var textPassword2 = document.getElementById("textPassword2");
  textPassword2.onfocus = showtippassword2;

  function showtippassword2() {
    if (textPassword2.value == '') {
      tippassword2.innerHTML = "请再次确定密码";
      tippassword2.style.color = 'grey';
    }
  }
  //
  //验证名称、邮箱、手机、密码和确认密码
  function checkbox() {
    //1
    //验证名称
    var countname = 0;
    var checkname = textName.value;
    if (checkname.length == 0) {
      tipmessage.innerHTML = "名称不能为空";
      tipmessage.style.color = 'red';
      textName.style.border = '1px solid red';
    } else {
      //中文字符+2，普通ASCII码加1
      for (var i = 0; i < checkname.length; i++) {
        var namecode = checkname.charCodeAt(i);
        if (namecode >= 0 && namecode <= 128) {
          countname++;
        } else {
          countname += 2;
        }
      };
      //判断是否满足4-16个字符
      if (countname >= 4 && countname <= 16) {
        tipmessage.innerHTML = "格式正确"; //满足名称长度
        tipmessage.style.color = 'green';
        textName.style.border = '1px solid green';

      } else {
        tipmessage.innerHTML = "名称字符长度应为4-16个"; //不满足名称长度
        tipmessage.style.color = 'red';
        textName.style.border = '1px solid red';
      }
    }

    //2
    //验证邮箱
    var countemail = 0;
    var checkemail = textEmail.value;
    if (checkemail.length == 0) {
      tipeemail.innerHTML = "邮箱不能为空";
      tipeemail.style.color = 'red';
      textEmail.style.border = '1px solid red';
    } else {
      //验证是否符合邮箱格式,正确countemail为1，否则为2
      var rexemail = /^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9\-\.]+$/;
      if (rexemail.test(checkemail)) {
        countemail++;
      } else {
        countemail += 2;
      }
      if (countemail == 2) {
        tipeemail.innerHTML = "请输入正确的邮箱格式";
        tipeemail.style.color = 'red';
        textEmail.style.border = '1px solid red';
      } else {
        tipeemail.innerHTML = "格式正确";
        tipeemail.style.color = 'green';
        textEmail.style.border = '1px solid green';

      }
    }

    //3
    //验证手机号码
    var checkphone = textPhone.value;
    var countphone = checkphone.length;
    if (countphone == 0) {
      tipphone.innerHTML = "手机不能为空";
      tipphone.style.color = 'red';
      textPhone.style.border = '1px solid red';
    } else {
      var rexphone = /^[0-9]+$/;
      if (!rexphone.test(checkphone)) {
        tipphone.innerHTML = "请输入正确的手机格式"; //输入的不是全数字
        tipphone.style.color = 'red';
        textPhone.style.border = '1px solid red';

      } else {
        if (countphone != 11) {
          tipphone.innerHTML = "手机长度不正确"; //输入的手机长度不正确
          tipphone.style.color = 'red';
          textPhone.style.border = '1px solid red';
        } else {
          tipphone.innerHTML = "格式正确";
          tipphone.style.color = 'green';
          textPhone.style.border = '1px solid green';

        }
      }
    }

    //4
    //验证密码
    var checkpassword = textPassword.value;
    var countpassword = checkpassword.length;
    if (countpassword == 0) {
      tippassword.innerHTML = "密码不能为空";
      tippassword.style.color = 'red';
      textPassword.style.border = '1px solid red';
    } else {
      if (countpassword < 6) {
        tippassword.innerHTML = "密码长度不应小于6";
        tippassword.style.color = 'red';
        textPassword.style.border = '1px solid red';

      } else {
        var rexpasswordUpper = /[A-Z]+/;
        var rexpasswordLower = /[a-z]+/;

        if (!(rexpasswordUpper.test(checkpassword) && rexpasswordLower.test(checkpassword))) {
          tippassword.innerHTML = "密码应包含大小写字母";
          tippassword.style.color = 'red';
          textPassword.style.border = '1px solid red';

        } else {
          var rexpasswordnum = /[0-9]+/;
          if (!rexpasswordnum.test(checkpassword)) {
            tippassword.innerHTML = "密码应包含数字";
            tippassword.style.color = 'red';
            textPasswordss.style.border = '1px solid red';
          } else {
            tippassword.innerHTML = "格式正确";
            tippassword.style.color = 'green';
            textPassword.style.border = '1px solid green';

          }
        }
      }

    }
    
    //5
    //再次确定密码
    var checkpassword2 = textPassword2.value;

    if (checkpassword2 != checkpassword || checkpassword2.length == 0) {
      tippassword2.innerHTML = "确认密码输入错误";
      tippassword2.style.color = 'red';
      textPassword2.style.border = '1px solid red';

    } else {
      tippassword2.innerHTML = "格式正确";
      tippassword2.style.color = 'green';
      textPassword2.style.border = '1px solid green';

    }
    //6
    //格式验证全部通过时出现警告框
    var checkall = document.getElementsByClassName('tip');
    var checkallcount = 0; //用来统计格式正确的输入框
    for (var i = 0; i < checkall.length; i++) {
      if (checkall[i].innerHTML == "格式正确") {
        checkallcount++;
      }

    };
    if (checkallcount == 5) {
      alert(":)格式验证全部通过")
    }; //共需要验证5个框



  }