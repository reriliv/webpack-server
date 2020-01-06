import React, { Component } from 'react';
import './style.css';

export default ({ children }) => {
  return React.createElement('div', { className: 'test' }, children);
}
