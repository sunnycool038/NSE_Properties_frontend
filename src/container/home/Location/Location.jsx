import React from 'react'
import { AppWrap,MotionWrap } from '../../../components/HOC';

function Location() {
  return (
    <div>
      Location
    </div>
  )
}

export default AppWrap(
    MotionWrap(Location, 'app__about'),
    'location',
    'app__whitebg',
  );
