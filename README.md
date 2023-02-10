# 구글 폼 클론 프로젝트

## 실행 방법

1. npm 설치
```
npm install
```

2. 프로젝트 빌드 후 실행
```
npm run build
npx serve -s build
```

## 구현 목록
- [x] 설문지 제목 추가, 편집
- [x] 설문지 설명 추가, 편집
- [x] 질문을 추가하면 질문이 추가됩니다.
    - [x] 단답형
    - [x] 장문형
    - [x] 객관식 질문
    - [x] 체크박스
    - [x] 드롭다운
- [ ] 질문 복사 기능
- [x] 질문 삭제 기능
- [x] 필수 옵션 설정 기능
- [x] **미리 보기** 기능에서 해당 설문지를 미리볼 수 있어야 합니다!
    - [x] 필수선택 기능

- [x] 사이드바
    - [x] 반응형 추가
    
    <img width="450" alt="스크린샷 2023-01-29 오전 8 09 54" src="https://user-images.githubusercontent.com/92029332/215295342-7f14f47f-e75c-41c3-bba2-f4b31b915111.png">

## 시연 영상

https://youtu.be/EMUZo13ha0U

## 컴포넌트 종류

```
├── components/
│   ├── Preview/  
│   │   ├── ObjectiveOption/   
│   │   │   └── index.tsx
│   │   ├── OptionView/
│   │   │   └── index.tsx
│   │   └── SubjectiveOption/
│   │       └── index.tsx
│   ├── Question/ : 설문지에서 하나의 질문 로직을 다룹니다.
│   │   ├── Conatiner/  
│   │   │   ├── BottomContainer/
│   │   │   ├── MiddleContainer/
│   │   │   └── TopContainer/
│   │   ├── Options/  : 객관식과 주관식 컴포넌트로 나누어 구현하였습니다.
│   │   │   ├── ObjectiveOptions/
│   │   │   ├── SubjectiveOption/
│   │   │   └── index.tsx
│   │   └── index.tsx
│   ├── SideBar/ 
│   │   └── index.tsx
│   ├── Title/  : 설문지의 제목 관련 View&Logic 컴포넌트
│   │   └── index.tsx
│   └── common/   : 재사용 가능한 컴포넌트는 common폴더로 분리해주었습니다.
│       ├── BoxContainer/
│       │   └── index.tsx
│       ├── Dropdown/
│       │   └── index.tsx
│       └── FormContainer/
│           └── index.tsx

```


- 질문 컴포넌트(Question/)는 총 세가지로 나뉩니다.
  - 제목이 포함된 TopContainer
  - 선택지작성이 포함된 MiddleContainer 
  - 질문삭제 및 필수체크가 포함된 BottomContainer

## 트러블 슈팅

### 선택지(옵션) 추가삭제 어떻게 구현해야할까?

#### **문제 상황**
- 선택지 추가를 어떻게 처리해야할 지 고민이었습니다.
- 추가를 할 때마다 컴포넌트를 배열에 넣어 map으로 렌더링을 해야될까?
- 그렇다면, 배열에 어떻게 컴포넌트를 넣을 지 고민이 되었습니다.

**1차 구현**

보통 여러 component를 구현할 때 map메소드를 많이 사용합니다.

이번 경우에도 map을 사용해보기 위해서는 각각의 component(하나의 option)에 대해 key값을 부여해줄 id가 필요합니다.

그래서 id를 저장하기 위한 list를 customHook으로 만들어주었습니다.

```javascript
const useOptionList: UseOptionListProps = () => {
  const [list, setList] = useState<number[]>([]);

  const addOption = () => {
    setList((prev) => [...prev, list.length + 1]);
  };

  const removeOption = (id: number) => {
    // setList((prev) => )
  };

  return [list, addOption, removeOption];
};
export default useOptionList;
```

이 hook에서는 useState를 통해 생성한 list와 list에 요소를 추가하고 삭제하는 함수를 추가해준 후 반환해주었습니다.

요소를 추가해주는 로직은 어렵지 않았지만 문제는 요소를 삭제하는 로직이었습니다.

먼저 생각나는 로직은 다음과 같았습니다.

요소의 삭제버튼은 각각의 Option component 내부에 존재하므로 내부에서 스스로 component를 삭제하는 방식.

- 이 경우 본인 컴포넌트를 삭제하는 함수를 props로 주입해주어야함.
- 그래야 option component의 부모에서 변경을 인식하여 리렌더링하기 때문.

이정도의 고민을 통해 다음의 구현결과를 얻었습니다.

**구현 결과**


```javascript
const useOptionList: UseOptionListProps = () => {
  const [list, setList] = useState<OptionType[]>([]);

  const addOption = () => {
    const newOption: OptionType = { id: list.length + 1 };
    setList((prev) => [...prev, newOption]);
  };

  const removeOption = (id: number) => {
    setList((prev) => prev.filter((option, idx) => option.id !== id));
  };

  return [list, addOption, removeOption];
};
export default useOptionList;
```

구현 결과, removeOption을 선택지 component에 넣어 선택지를 없애는 기능까지 추가할 수 있었습니다.

**아쉬운 점**

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0813fffc-a86b-4127-b6ae-ebc4baf0f1fd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230128T231637Z&X-Amz-Expires=86400&X-Amz-Signature=c48e90c824d88993367e0d92b132d1ef15bc84389612ed3fd3f7ba2c1160b101&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)

드롭다운에서 가운데에 있는 요소를 제거 시 index가 업데이트되지 않았습니다.

=> map 메소드에서 제공하는 index를 활용하여 구현해볼 수 있을 것 같습니다.

이 방식대로 개선해본 결과 정상적으로 고칠 수 있었습니다.


### Redux 도입 이유

1. 미리보기 기능
    - 미리보기기능은 단순하게 설문지 생성 화면에서 input 부분의 수정을 막아줌으로써 구현이 가능하긴 합니다.
    - 하지만, 단순히 input부분의 수정을 막기에는 과도한 조건문의 사용이 동반될 것 같아 고려하지 않았습니다.
    - 대신, redux를 통해 frontend의 상태값을 관리해주면 그 값을 이용하여 미리보기 페이지에서 활용해 볼 수 있다고 생각했습니다.
    
2. 복사 기능
    - 질문을 복사할 때 질문에 있는 값(문제의 type, 선택지)을 그대로 옮겨서 새 질문box를 만들어야 합니다.
    - 이 때에는 input값을 그대로 옮겨와야 하므로 복사할 값을 전역상태를 통해 관리해주는 것이 적절하다고 생각했습니다.
    - 만약 전역상태를 활용해주지 않는다면 자식 component에서 부모 component로 값을 올려준 후 부모 component에서 질문box 생성 시 props로 넣는 방법도 있을 것입니다. 하지만, 자식 component에서 부모 component로 상태를 옮기는 것은 직관적이지 않고, 이미 redux로 질문값을 넣기로 결정 했다면 꺼내오기는 상대적으로 쉬우므로 redux를 사용하는 것이 적절하다고 생각했습니다.
