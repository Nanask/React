# React를 이용한 Remember List project
* 화면에서 기억해야 할 일을 입력하고 Enter를 누르면 list에 추가
* 리스트를 더블클릭하면 완료 표식을 붙이는

## localStorege를 사용
* 각 Browser 자체에 있는 매우 소형 DB, 문자열형 데이터를 저장할 수 있는 공간
* 임의로 백업을 하거나 다른곳으로 이전하는 기능이 없으면 다른 곳에서는 접근을 할 수 없다.

## 시간과 관련

- 할일을 입력한 후 Enter를 누르면 날짜와 시간을 자동생성하여 저장
- yarn add moment 사용