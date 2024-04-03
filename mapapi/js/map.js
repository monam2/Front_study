let mapBoard = `
<div id="map">
  <div class="map-sidebar">
    <div class="map-sidebar-wrapper">
      <div class="sidebar-header">
        <div class="sidebar-searchbar-container">
          <div class="search-input-box">
            <input type="text" id="sidebar-search-input" placeholder="Enter Your Location">
          </div>
          <button id="sidebar-search-btn"></button>
        </div>
        <div class="sidebar-shift-container">
          <button class="sidebar-shift-btn"></button>
        </div>
      </div>
      
      <div class="sidebar-content">
        <div class="sidebar-content-img">
        </div>
        <div class="sidebar-content-info">
          <h2 class="info-location-title">제목이 들어갈 곳</h2>
          <ul class="info-location-board">
            <li>
              <p>주소를 입력하세요.</p>
            </li>
            <li>
              <p>상세 정보를 입력하세요.</p>
            </li>
            <li>
              <p>상세 정보를 입력하세요.</p>
            </li>
            <li>
              <p>상세 정보를 입력하세요.</p>
            </li>
            <li>
              <p>상세 정보를 입력하세요.</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="sidebar-footer">
      </div>

      <div class="sidebar-menu">
        <div class="sidebar-menu-tab">
          <ul class="sidebar-main-menu">
            <li class="menu-like-box">
              <div id="menu-like-btn" class="menu-tab-btn"></div>
            </li>
            <li class="menu-call-box">
              <div id="menu-call-btn" class="menu-tab-btn"></div>
            </li>
            <li class="menu-share-box">
              <div id="menu-share-btn" class="menu-tab-btn"></div>
            </li>
          </ul>
        </div>
      </div>

      
    </div>
  </div>
</div>`;

document.querySelector("body").innerHTML += mapBoard;
