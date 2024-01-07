import React from 'react';
import Image from 'next/image';
import KakaoLogo from '../../../assets/kakao_login.png';

interface KaKaoLoginButtonProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const KaKaoLoginButton: React.FC<KaKaoLoginButtonProps> = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <Image src={KakaoLogo} alt="카카오로그인" width={200} height={40} />
    </div>
  );
};

export default KaKaoLoginButton;
