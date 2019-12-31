import React, { Component } from 'react';

export default ({ children }) => {
  return React.createElement('div', { className: 'test' }, children);
}
