

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
    });