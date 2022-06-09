import React from 'react'
import { AppWrap,MotionWrap } from '../../../components/HOC';

function FAQ() {
  return (
    <div>
      FAQ
    </div>
  )
}

export default AppWrap(
    MotionWrap(FAQ, 'app__about'),
    'faq',
    'app__whitebg',
  );
