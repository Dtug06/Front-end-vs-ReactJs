import React, { useEffect } from 'react';

export default function WelcomeMessage() {
  useEffect(() => {
    console.log("Component đã được render lần đầu");
  }, []);

  return (
    <div>
      <p>Chào mừng bạn đến với ứng dụng của chúng tôi</p>
    </div>
  );
}