import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';
import { createPortal } from 'react-dom';

function Loading(props) {
  return createPortal(
    <div className={s.wrapper}>
      <div className={s.inner}>
        <Loader type="ThreeDots" color="#27dad4" height={100} width={100} />
      </div>
    </div>,
    document.querySelector('#toast'),
  );
}

export default Loading;
