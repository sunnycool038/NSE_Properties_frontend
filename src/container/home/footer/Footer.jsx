import React from 'react'

import { AppWrap,MotionWrap } from '../../../components/HOC';

function Footer() {
  return (
    <div>
      Footer
    </div>
  )
}

export default AppWrap(
    MotionWrap(Footer, 'app__about'),
    'contact',
    'app__whitebg',
  );
