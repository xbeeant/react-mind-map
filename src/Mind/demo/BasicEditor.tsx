import React from 'react';
import { MindEditor } from "react-mind-map";

const BasicEditor = () => {
  return (
    <MindEditor
      initialValue={{
        data: {
          text: "根节点",
        },
        children: [],
      }}
      onSave={(value: any) => {
      console.log(value);
    }}>

    </MindEditor>
  );
};

export default BasicEditor;
