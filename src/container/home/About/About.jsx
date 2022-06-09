import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap,MotionWrap } from '../../../components/HOC';

function About() {
  return (
    <div>
      About
    </div>
  )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'services',
    'app__whitebg',
  );
