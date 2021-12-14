

    // getElementById는 위쪽 태그중에서 id가 btn1인 태그를 찾음.
    const b1 = document.getElementById('btn1');
    console.log(`id가 btn1인것은`);
    console.log(`${b1}`);
    console.log(b1);
    b1.value='로그인변경!!!';

    b1.addEventListener('click', function() {
        const id = document.getElementById('userid');
        const pw = document.getElementById('userpw');
        console.log(id);
        console.log(pw);

        // 44라인에서 찾은 태그의 입력값(value)이 비어있다면
        if (id.value === "") {
            alert('아이디를 입력하세요.');
            id.focus();
            return false; //백엔드로 전송하지 않음
        }

        // 45라인에서 찾은 태그의 입력값(value)이 비어있다면
        if (pw.value === "") {
            alert('암호를 입력하세요.');
            pw.focus();
            return false; //백엔드로 전송하지 않음
        }

        // 백엔드로 아이디와 암호가 전송되는 시점
        console.log('restful + ajax를 이용한 전송');

        // "url"
        // `url=${id.value}' 작은 따옴표는 대체 적용 되는 것이 있을 때

        const url = `http://ihongss.com/json/login.json?userid=${id.value}&userpw=${pw.value}`;
                let xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.send();

                xhr.addEventListener('load', function(){
                const data = JSON.parse(xhr.response);
                console.log(data); //{ret:'y'} or {ret:'n'}
                if(data.ret === 'y'){
                    alert('로그인 되었습니다.');
                    window.location.href = "main.html"; //<a href="main.html">
                }
                else if(data.ret === 'n'){
                    alert('아이디 또는 암호를 확인하세요.');
                }
                console.log(data);
                });
    });