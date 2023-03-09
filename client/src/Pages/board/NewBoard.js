import axios from 'axios';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import QuillEditor from '../../Components/QuillEditor';

const NewBoard = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const quillRef = useRef();
  const { handleSubmit, register } = useForm({
    mode: 'onChange',
  });

  const onClickButton = async (data) => {
    const board = {
      title: data.title,
      contents: htmlContent,
    };

    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/newboard`,
        board,
      );
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickButton)}>
      <br />
      제목: <input type='text' {...register('title')} />
      <br />
      <QuillEditor
        quillRef={quillRef}
        htmlContent={htmlContent}
        setHtmlContent={setHtmlContent}
      />
      <br />
      <button type='submit'>작성하기</button>
      <br />
    </form>
    // <div>
    //   <div>
    //     <h5>제목</h5>
    //     <input type='text' placeholder='제목을 입력해 주세요' />
    //   </div>

    //   <QuillEditor

    //     api={''}
    //   />
    //   <button onClick={handleSubmit}>작성하기</button>
    // </div>
  );
};

export default NewBoard;
