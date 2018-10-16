import React, { Component } from 'react';
import IsScrolling from 'react-is-scrolling';

function YourComponent({isScrolling, isScrollingDown, isScrollingUp}) {
  return (
    <div id="scrolldetector">
      { isScrolling &&
        <p>You are scrolling</p>
      }

      { isScrollingDown &&
        <p>You are scrolling down</p>
      }

      { isScrollingUp &&
        <p>You are scrolling up</p>
      }
    </div>
  );
}

export default IsScrolling(YourComponent);