'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import DragHandle from '@tiptap-pro/extension-drag-handle-react'
const Tiptap = (props: React.SVGProps<SVGSVGElement>) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'bg-white p-4 rounded min-h-min focus:outline-none',
      },
    },
    extensions: [
      StarterKit,
      // Placeholder.configure({
      //   emptyEditorClass: 'is-editor-empty',
      //   placeholder: 'Write something …',
      // }),
      
    ],

    immediatelyRender: false
  })

  return (
    <>
    {editor && ( // Ensure editor is not null
        <DragHandle editor={editor}>
            <svg
    fill="#000000"
    width="800px"
    height="800px"
    viewBox="0 0 36 36"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title>{"drag-handle-line"}</title>
    <circle
      cx={15}
      cy={12}
      r={1.5}
      className="clr-i-outline clr-i-outline-path-1"
    />
    <circle
      cx={15}
      cy={24}
      r={1.5}
      className="clr-i-outline clr-i-outline-path-2"
    />
    <circle
      cx={21}
      cy={12}
      r={1.5}
      className="clr-i-outline clr-i-outline-path-3"
    />
    <circle
      cx={21}
      cy={24}
      r={1.5}
      className="clr-i-outline clr-i-outline-path-4"
    />
    <circle
      cx={21}
      cy={18}
      r={1.5}
      className="clr-i-outline clr-i-outline-path-5"
    />
    <circle
      cx={15}
      cy={18}
      r={1.5}
      className="clr-i-outline clr-i-outline-path-6"
    />
    <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </svg>
        </DragHandle>
    )}
    <EditorContent editor={editor} />
    </>
  
  )
}

export default Tiptap
