import React from 'react';
import PropTypes from 'prop-types';

function Login() {
  return (
    <div>
      <h2>로그인</h2>
      <input type="email" placeholder="이메일 ID" />
      <input type="password" placeholder="비밀번호" />
      <button type="submit">로그인</button>
    </div>
  );
}

Login.propTypes = {};

export default Login;
