document.addEventListener("DOMContentLoaded",function(e){
    
    let configId=document.querySelector("#id i") // 설정버튼 찾기
    let idText=document.querySelector("#id span") // id 찾기

    configId.addEventListener("click",function(e){
        // console.log(prompt("새로운 아이디를 입력하세요."))
        idText.textContent=prompt("새로운 아이디를 입력하세요")
    }) // 설정버튼을 누르면 prompt창을 띄운다

    // id로 필요한 태그 찾기
    let profileEditButton=document.querySelector("#profile_info button")
    let userInfo=document.querySelector("#userInfo")
    let summary=document.querySelector("#summary")
    let profileDetail=document.querySelector("#profileDetail")
    // 변경여부 확인 flag
    let changing=false; // 기본값.false.

    // 프로파일변경버튼 이벤트처리
    profileEditButton.addEventListener("click",function(e){
        //변경된 경우. changing==true
        if(changing){
            let _userInfo=userInfo.querySelector("input").value;
            let _summary=summary.querySelector("input").value;
            let _profileDetail=profileDetail.querySelector("input").value;
            // text 변경
            userInfo.innerHTML=_userInfo;
            summary.innerHTML=_summary;
            // _profileDetail 값이 "http"로 시작하면 링크로 구현
            if(_profileDetail.startsWith("http")){
                _profileDetail="<a href='"+_profileDetail+"'>"+_profileDetail+"</a>"
            } // +연산자는 문자열을 연결하는 연산자
            profileDetail.innerHTML=_profileDetail;
            //프로파일변경버튼의 글자 수정
            e.target.textContent="프로필 편집";

            changing=false; // 원래대로 false로 변경
        }else{ //변경 안된 경우. changing==false
            // text를 변수에 저장
            let _userInfo=userInfo.textContent;
            let _summary=summary.textContent;
            let _profileDetail=profileDetail.textContent;
            // input태그로 변경
            userInfo.innerHTML="<input value='"+ _userInfo +"'>";
            summary.innerHTML="<input value='"+ _summary +"'>";
            profileDetail.innerHTML="<input value='"+ _profileDetail +"'>";
            // 프로파일변경버튼 글자 수정 
            e.target.textContent = "프로필 편집 완료"
            
            changing=true; // 변경됐다고 표시, true로 변경
        }
    })

    // 프로필사진에 마우스가 올라갔을 때 이벤트 처리
    let profile_pic=document.querySelector("#profile_pic .circle_pic")
    profile_pic.addEventListener("mouseover",function(e){
        e.target.style.filter="grayscale(100%)";
    });
    profile_pic.addEventListener("mouseleave",function(e){
        e.target.style.filter="grayscale(0%)";
    });
    
    // 프로필 사진을 클릭해서 prompt로 사진변경 이벤트 처리
    profile_pic.addEventListener("click",function(e){
        profile_pic.setAttribute("src",prompt("이미지 url을 입력해 주세요."))
    })
})