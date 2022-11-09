import React, { useEffect } from 'react';

const UseTitle = (title) => {
   useEffect(() => {
    document.title = `${title }   KajolCreative`;
   }, [title])
};

export default UseTitle;