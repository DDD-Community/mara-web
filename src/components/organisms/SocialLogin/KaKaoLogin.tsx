import React, { useEffect } from 'react';
import KaKaoLoginButton from '../../atoms/SocialLoginButton/KaKaoLoginButton';

const kakaoOauthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REACT_APP_KAKAO_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;

const SocialLogin: React.FC = () => {
  const requestKakao = (): void => {
    window.location.href = kakaoOauthURL;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code !== null && code !== undefined) {
      console.log('받아온 코드:', code);
    }
  }, []);

  return <KaKaoLoginButton onClick={requestKakao} />;
};

export default SocialLogin;
