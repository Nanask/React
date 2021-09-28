import React from "react";

function TodoList({ todoList }) {
  const viewList = todoList.map((view) => {
    return (
      // key={view.t_id}, key를 설정하지 않으면 한개만 변경되도 전체 리스트가 렌더링되는 현상이 발생함
      // react에서 forEach()류의 함수를 사용하여 컴포넌트 list를 만들때 반드시 가장 바깥쪽 tag에는
      // UNIQUE한 값으로 key를 설정해주어야 한다.
      // map을 사용할 때 두번째 매개변수로 index 키값을 알 수 있는데 이 값으로 절대 key로 설정하지 않는다.
      // 오히려 성능을 떨어뜨리는 결과를 내기도 한다.
      <tr key={view.t_id}>
        <td>{view.t_id}</td>
        <td>{view.t_date}</td>
        <td>{view.t_text}</td>
      </tr>
    );
  });
  return (
    <table className="todo_list">
      <thead>
        <tr>
          <th>ID</th>
          <th>DATE</th>
          <th>TODO</th>
        </tr>
      </thead>
      <tbody>{viewList}</tbody>
    </table>
  );
}

export default TodoList;
