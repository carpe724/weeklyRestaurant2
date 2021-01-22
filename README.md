# Weekly Restaurant
      
      
      
## 소개
  
본 프로젝트는 2인 규모의 미니프로젝트이며,   
Carpe724 님과 함께 진행하였습니다.   
   
본 프로젝트의 기획 및 설계에 사용한 문서 링크입니다   
https://www.notion.so/4133ba99cbfa4a38805e51c603f95649    
    
백엔드는 제가 맡았고,  
프론트엔드는 Carpe724 님이 맡았습니다.   
Carpe724님의 Github주소: https://github.com/carpe724        
   
아직 완성되진 않은 상태입니다. 주간계획 보기, 관리자 로그인, 요리 목록 보기, 재고 현황 보기, 요리 등록, 수정, 삭제 정도까지는 구현을 한 상태입니다. 아래 주소에서 확인하실 수 있습니다.   
배포된 사이트 주소: https://weekly-restaurant.herokuapp.com   
(백엔드api주소: https://weekly-restaurant-back.herokuapp.com)   

본 Readme에는 백엔드 코드와 관련된 내용만 담겨있습니다.   
   
     
        
## 개요
   
마치 학생식당, 구내식당 등에서 스크린 또는 게시판에서 식단계획표를 확인하듯이,   
일반 사용자는 웹상에 접속만 하여도 시간표를 볼 수 있고, 관리자는 로그인 후에 레시피CRUD, 재고관리, 식단표 관리 등을 할 수 있도록 하였습니다.   
동일한 육류/어류/부재료/소스 셋(set)을 사용했을 경우, 그 셋을 공용할 수 있도록 하였습니다. (셋에 대한 이름 부여)
Restful한 api를 만들고자 하여 경로명만으로 무엇에 관련한 요청인지 그리고 method를 통해 어떤 기능인지 파악할 수 있도록 하였습니다.   
   
* 특징   
      - 1. 레시피 등록, 수정 시에 기존에 사용한 데이터 테이블을 찾아 공용하도록 합니다.   
      - 2. 실시간 이벤트 발생을 통해, 식사시간에 맞추어 재고에서 사용한 재료만큼 자동 차감됩니다.   
    
passport를 통한 인증, 데이터베이스 연결, 모듈화, 라우팅, utils(컨트롤러 역할) 구현, Promise체인 및 async-await 활용, CRUD구현, 클라우드(헤로쿠)에 배포까지를 목표했습니다.    
   
      
    
      
## 사용 기술 및 주요 모듈
   
Node Express Passport Mysql node-schedule morgan    
   
   
      
## 폴더 구조
  
링크된 노션 페이지 참조 부탁드립니다.   
   
   
   
## 주요 내용
  
- 백엔드와 프론트엔드가 서로 다른 도메인을 통해 배포. 서버 이원화 (CORS이슈 관리함)  
- 데이터베이스 접속시 connection을 계속 만들지 않고, pool을 활용하여 connection사용 후 반납하는 방식   
- 하나의 파일에서 pool을 만들고 다른 곳에서는 그 pool을 참조하는 방식  (싱글톤 디자인 패턴, dbPoolCreator.js)    
- Dao클래스를 분할하여 쿼리 관련 메서드를 모아둠.    
- sqlDispenser파일내에 쿼리문을 모아둠.   
- node-schedule모듈을 활용하여, 정해진 시간(servingTime.js)에 이벤트를 일으켜 디비 접속하여 계획된 식단에 맞추어 사용한 재료만큼 차감하도록 함.   
- responseCode라는 것을 따로 두어, 약속된 서버 상태코드를 전달하도록 함. (서버 status코드와 유사한 기능)   
- Routes를 주제에 따라 분할하여 관리   
- responseHandler, errorHandler를 두어 공통된 응답형식을 유지 관리함.   
- Promise체인을 적극 활용하여, 로직을 단계별로 나누고 유지보수가 편리하도록 함. 직관성도 좋아짐   
- async,await를 통해 다수의 비동기 쿼리를 동기화함.   
     
        
        
## 문제점 그리고 개선점   
    
- 가장 결정적인 문제점은 현재 데이터베이스 설계가 잘못되었음.   
- 레시피를 구성하기 위해 육류, 어류, 부재료, 소스의 4가지 서브 테이블이 필요한데, 이들이 모두 공용 가능함.   
  따라서 정해진 틀이 필요하다고 생각하였는데, 재고에 없던 재료가 사용자에 의해 추가되는 경우도 있었음.   
- 현재 단 한 명의 식당관리자가 있다는 가정하에는 정상작동하지만,   
  여러 개의 식당, 즉, 여러 명의 식당 관리자가 있을 때는 하나의 식당에서 다른 식당의 재료가 보이는 문제점들이 발생가능함.   
- 추후 데이터베이스 설계를 전체적으로 수정할 필요가 있음!   

- 전체적으로 초심자의 구현이라 만족스럽지 않은 부분도 있고, 경험자분들의 노하우가 궁금한 경우가 있었음.   
- 하나의 요청처리에 불필요하게 많은 쿼리가 사용됨. -> 이는 추후 join과 SQL 프로시져, 함수 등을 사용해 간소화 예정임.   
- CORS 이슈 관리가 힘들었음. POST, PUT등의 메서드로 요청이 있을 때 OPTIONS라는 method로 '사전요청'이 있다는 사실을 알게 됨.
- CORS 세팅을 통해 허가할 요청 경로를 명시하여 넣어둘 수 있다는 사실을 알게 됨 (배열도 가능). 현재는 간단하게 true로 되어있음.
- 크롬 브라우저 정책으로 도메인이 다른 곳에서 보내주는 쿠키는 거부한다는 사실을 알게 됨. <- 이를 해결하기 위해 관련 설정 필요하였음.
  (cookie-sameSite, cors-credentials 등등)
- heroku에서 proxy를 앞에 세우기에 관련 설정이 필요하였음.
- 하나의 파일에 모든 것을 넣지 않고, 여러 개의 파일로 분할하는 과정에서 비동기처리의 동기화가 어려웠고,   
  공용자원을 한 곳에서만 정의하고 같이 쓰도록 하는 부분도 어려웠음.   
  예시: createPool이 비동기 처리인데 그것이 완료된 후에 다른 파일에서 참조하도록 만드는 부분   
- promise체인 활용시 resolve를 통해 단 하나의 변수(또는 객체)만 전달할 수 있다는 점이 아쉬웠음.   
   
