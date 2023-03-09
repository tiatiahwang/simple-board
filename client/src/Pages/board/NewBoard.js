import axios from 'axios';
import { useRef, useState } from 'react';
import QuillEditor from '../../Components/QuillEditor';

const NewBoard = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const quillRef = useRef();

  const handleSubmit = async () => {
    console.log(htmlContent);
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/newboard`,
        htmlContent,
      );
    } catch (e) {
      console.log(e);
    }
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
