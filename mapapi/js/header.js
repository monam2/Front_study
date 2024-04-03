let headerElement = `<nav class="nav_wrapper navbar navbar-light bg-light static-top">
<div class="nav_container container">
  <a class="nav_logo navbar" href="#" style="font-family: BMJUA">메인 타이틀</a>
  <ul class="nav_list_container">
    <li class="nav_list">
      <a class="nav_btn" href="/spots.html" style="font-family: BMJUA">지역별여행지</a>
    </li>
    <li class="nav_list">
      <a class="nav_btn" href="#" style="font-family: BMJUA">나의여행기록</a>
    </li>
    <li class="nav_list">
      <a class="nav_btn" href="#" style="font-family: BMJUA">핫플자랑하기</a>
    </li>
    <li class="nav_list">
      <a class="nav_btn" href="#" style="font-family: BMJUA">여행정보공유</a>
    </li>
    <li class="nav_list">
      <a
        class="nav_btn open_signin_btn is_not_login"
        style="font-family: BMJUA"
        href="#"
        style="font-family: BMJUA"
        >회원가입</a
      >
    </li>
    <li class="nav_list">
      <a
        class="nav_btn open_login_btn is_not_login"
        style="font-family: BMJUA"
        href="#"
        style="font-family: BMJUA"
        >로그인</a
      >
    </li>
    <li class="nav_list">
      <a
        class="nav_btn open_signin_btn is_login"
        id="mypage_btn"
        style="display: none"
        href="#"
        >마이페이지</a
      >
    </li>
    <li class="nav_list">
      <a
        class="nav_btn open_login_btn is_login"
        id="logout_btn"
        style="display: none"
        href="#"
        >로그아웃</a
      >
    </li>
  </ul>
</div>
</nav>`;

document.querySelector("body").innerHTML = headerElement;
