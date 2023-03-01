import { useRef, useState } from 'react';
import QuillEditor from '../../Components/QuillEditor';

const NewBoard = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const quillRef = useRef();

  const handleSubmit = async () => {
    const description = quillRef.current.getEditor().getText(); //태그를 제외한 순수 text만을 받아온다. 검색기능을 구현하지 않을 거라면 굳이 text만 따로 저장할 필요는 없다.
    if (description.trim() === '') {
      alert('내용을 입력해주세요.');
      return;
    }
    console.log(description);
  };

  return (
    <div>
      <QuillEditor
        quillRef={quillRef}
        htmlContent={htmlContent}
        setHtmlContent={setHtmlContent}
        api={''}
      />
      <button onClick={handleSubmit}>작성하기</button>
    </div>
  );
};

export default NewBoard;
