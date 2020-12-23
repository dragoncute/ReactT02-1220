import logo from './logo.svg';
import { useState } from 'react';
import { Header } from './components/Header';

function App() {
  /*
    1. useState là một hàm
    2. Input: Là giá trị mặc định ban đầu của state
    3. Output: 
      Trả về cho mình một array
      Trong array có 2 phần tử
      3.1. Phần tử đầu tiên chính là state của mình vừa mới tạo
      3.2. Phần tử thứ 2 là một hàm 
        -> Dùng để cập nhật lại state mới khi có sự thay đổi 
  
  */
  // const [state, setState] = useState({
  //   items       : [],
  //   isShowForm  : false,
  //   strSearch   : '',
  //   orderBy     : 'name',
  //   orderDir    : 'asc',
  //   itemSelected: null
  // });
  const [items, setItems] = useState([{
    title: 'Tieu de 1'
  }, {
    title: 'Tieu de 2'
  }]);
  const [counter, setCounter] = useState(1);
  const [isShowForm, setIsShowForm] = useState(false);

  function handleClick() {
    setCounter(counter + 1);
  }
  // map
  return (
    <div className="App">
      <Header items={items} />
      
      <button onClick={handleClick} >Click me</button>
    </div>
  );
}

// Một file chỉ được 1 câu lệnh export default mà thôi
// Khi thằng khác sử dụng có thể sửa lại tên
export default App;
