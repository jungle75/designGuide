// 디자인&예시 탭 관련
$('.tabMenu button').click(function () {
  const index = $(this).index();
  
  // Remove 'act' class from all tabs and add to the clicked tab
  $('.tabMenu button').removeClass('act');
  $(this).addClass('act');

  // Hide all content areas and show the one corresponding to the clicked tab
  $('.tabContainer>div').hide();
  if (index === 0) {
    $('.designGuide').show();
  } else if (index === 1) {
    $('.examples').show();
  }
});
// Initially show the correct content based on the active tab
$('.tabMenu button.act').trigger('click');


// 탭 버튼 클릭 이벤트 처리
$('#codeHTML').show();

$('#codeTab1 a').click(function(event) {
    event.preventDefault();
    
    // 모든 탭 버튼에서 'act' 클래스 제거
    $('.codeTab a').removeClass('act');
    
    // 현재 클릭된 버튼에만 'act' 클래스 추가
    $(this).addClass('act');
    
    // 해당하는 코드 블록 보이기
    const targetId = $(this).attr('id') === 'html1' ? '#codeHTML1' : '#codeJS1';
    $('#codeJS1, #codeHTML1').hide();
    $(targetId).show();
});

$('#codeTab2 a').click(function(event) {
    event.preventDefault();
    
    // 모든 탭 버튼에서 'act' 클래스 제거
    $('.codeTab a').removeClass('act');
    
    // 현재 클릭된 버튼에만 'act' 클래스 추가
    $(this).addClass('act');
    
    // 해당하는 코드 블록 보이기
    const targetId = $(this).attr('id') === 'html2' ? '#codeHTML2' : '#codeJS2';
    $('#codeJS2, #codeHTML2').hide();
    $(targetId).show();
});

// 복사 버튼 클릭 이벤트 처리
$('.ic-copy').click(function() {
          
    // 코드 요소 선택
    var codeElement = $(this).closest('.codeCont').find('code')[0];
    
    // 텍스트 선택
    var range = document.createRange();
    range.selectNodeContents(codeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    
    // 텍스트 복사
    var successful = document.execCommand('copy');
    
    // 선택 영역 지우기
    window.getSelection().removeAllRanges();
    
    // 복사 성공 여부 확인
    if (successful) {
        alert('코드가 복사되었습니다.');
    } else {
        alert('복사에 실패했습니다. 다시 시도해주세요.');
    }
});
        
// 좌측네비게이션 정의
function setupSideNav(navId) {
  var nav = document.getElementById(navId);
  var links = nav.querySelectorAll('a');

  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // 기본 동작(링크 이동) 방지

      // 현재 메뉴 내의 .act 클래스를 가진 요소들에서 act 클래스 제거
      var activeItems = nav.querySelectorAll('.act');
      activeItems.forEach(function(item) {
        item.classList.remove('act');
      });

      // 클릭된 <a> 태그의 부모인 <li> 요소에 act 클래스 추가
      var parentLI = this.closest('li');
      parentLI.classList.add('act');
    });
  });
}

// 각 .SNB 요소에 대해 함수 호출
setupSideNav('snb1');
setupSideNav('snb2');
setupSideNav('snb3');
setupSideNav('snb4');

// 모든 .subMenu a 태그에 클릭 이벤트 리스너 추가
var subMenuLinks = document.querySelectorAll('.subMenu a');
subMenuLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // 기본 동작(링크 이동) 방지

    // 현재 subMenu 안의 모든 <a> 태그에서 on 클래스 제거
    var subMenuItems = this.closest('.subMenu').querySelectorAll('a');
    subMenuItems.forEach(function(item) {
      item.classList.remove('on');
    });

    // 클릭된 <a> 태그에 on 클래스 추가
    this.classList.add('on');
  });
});

// 탭관련 스크립트
const tabs1 = document.querySelectorAll('#tabs1 a');
tabs1.forEach(tab => {
  tab.addEventListener('click', () => {
    // 모든 탭에서 'act' 클래스 제거
    tabs1.forEach(t => t.classList.remove('act'));
    // 클릭된 탭에 'act' 클래스 추가
    tab.classList.add('act');
  });
});

const tabs2 = document.querySelectorAll('#tabs2 a');
tabs2.forEach(tab => {
  tab.addEventListener('click', () => {
    // 모든 탭에서 'act' 클래스 제거
    tabs2.forEach(t => t.classList.remove('act'));
    // 클릭된 탭에 'act' 클래스 추가
    tab.classList.add('act');
  });
});
