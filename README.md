# study

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Vue Study

(구현완료) 레이아웃 완성
(구현완료) store를 이용한 기능 추가 => StudyStore.vue
(구현필요) router와 route 차이

```
Router 는 웹 페이지의 전체적인 라우팅을 처리하는 라이브러리 이고,
Route 들은 각각 페이지의 정보를 담고있는 객체다.
```

(구현필요) vue lifecycle 학습

```
    beforeCreate : data, methods가 초기화되기 전에 실행되는 단계
    created : data, methods가 초기화된 후에 실행되는 단계. data를 변경하거나, methods를 호출할 수 있다.
    beforeMount : 가상 dom이 생성되고 실제 dom으로 바인딩하기 전에 이루어지는 단계 (?), 컴포넌트가 화면에 그려지기 전에 수행되는 단계
    mounted : 컴포넌트가 화면에 그려진 후 수행되는 단계, 화면에 나타내는 작업을 주로 수행
    beforeUpdate : data가 변경되어 가상 dom이 랜더링되기 전에 수행되는 단계
    updated : 가상 dom이 랜더링된 후에 수행되는 단계
    beforeDestory : vm.$destroy가 호출된 후 컴포넌트가 소멸되기 직전에 수행되는 단계. 데이터 변경이 가능하다.
    destroyed: 컴포넌트가 소멸된 후 수행되는 단계. 데이터 변경이 불가능하다.

    created vs mounted 무슨 차이 ?

    created 단계에서는 Vue 인스턴스가 생성되었으며, 컴포넌트가 초기화되어 기본 데이터나 메서드, 계산된 속성 등이 설정되었지만, 실제 DOM 요소에는 접근할 수 없는 상태입니다. 이 단계에서는 API 호출이나 초기화 작업 등을 수행할 수 있습니다.

    mounted 단계에서는 컴포넌트가 화면에 렌더링되고 실제 DOM 요소에 접근할 수 있는 상태입니다. 따라서 이 단계에서는 jQuery나 D3.js와 같은 라이브러리를 사용하여 DOM 요소를 조작하거나, 외부 API에서 데이터를 가져와서 컴포넌트에 반영할 수 있습니다.

    그럼 created 단계에서는 외부 API에 데이터 가져오는건 반영이 안되는지 ??
```
