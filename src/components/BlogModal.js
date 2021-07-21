import React from 'react';
import closeIcon from '../images/ic_close.svg';
import '../styles/BlogModal.css';

const notes = "Lorem ipsum dolor sit amet. Eos nisi odit qui porro voluptatum est sequi dolor et vero ullam aut eius nihil eum Quis mollitia. Aut dignissimos adipisci eum rerum voluptas et veritatis dignissimos aut tenetur suscipit ut dolorem nemo qui itaque cupiditate. Et eligendi aliquam vel iure natus sed dolores accusamus? Ea doloremque pariatur ut eaque optio est sint nulla ea ducimus porro ea velit culpa et assumenda deserunt. Ab eligendi culpa quo nisi asperiores ab velit esse. Et similique dolores a voluptatem natus non alias Quis vel quod veniam cum asperiores error ex fugit nulla aut tenetur perspiciatis?Qui vero eaque et laudantium quod est consequatur tempore. Eos galisum quia ut cupiditate delectus ea cupiditate sapiente et omnis eligendi et voluptatem deleniti et voluptatum amet sed sunt. Id quisquam voluptates cum voluptatem quia et eaque velit et molestias ullam. Quo exercitationem iste eum fugit suscipit et odio vero aut enim similique et quisquam natus non rerum iusto At asperiores earum."

const BlogModal = (props) => {
  const { setBlogModal } = props;
  return (
    <div className="BlogModal">
      <div className="BlogModal-content">
        <span onClick={() => setBlogModal(false)}>
          <img src={closeIcon} alt="close-icon" className="BlogModal-close-icon" />
        </span>
        <div className="BlogModal-container">
          <p>{notes}</p>
          <p>{notes}</p>
          <p>{notes}</p>
          <p>{notes}</p>
          <p>{notes}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
