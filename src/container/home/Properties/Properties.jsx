import React from 'react'

import { AppWrap,MotionWrap } from '../../../components/HOC';

function Properties() {
  return (
    <div>
      Properties
    </div>
  )
}

export default AppWrap(
    MotionWrap(Properties, 'app__about'),
    'properties',
    'app__whitebg',
  );
