import React, {type FC, useEffect, useRef, useState} from 'react';
import MindMap from "simple-mind-map";
import Toolbar from "react-mind-map/Mind/components/Toolbar";
import "./MindEditor.less";

export type MindProps = {
  onSave: (value: any) => void;
  initialValue: any;
};

const MindEditor: FC<MindProps> = ({initialValue}) => {
  const ref = useRef();
  const [editor, setEditor] = useState();

  useEffect(() => {
    if (ref.current) {
      const mindMap = new MindMap({
        // @ts-ignore
        el: ref.current,
        data: initialValue,
      });

      setEditor(mindMap);
    }
  }, []);

  return <div className="mind-container" ref={ref}>
    <Toolbar editor={editor} />
  </div>;
};

export default MindEditor;
