import React, { useState } from 'react';
import Welcome from '@/Components/Welcome';
import AppLayout from '@/Layouts/AppLayout';


import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '../Build/ckeditor';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Dashboard() {

  let [data, setData] = useState('ok')

  return (
    <AppLayout
      title="Dashboard"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      )}
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <div>ok</div>
            {/* <Welcome /> */}

            <CKEditor
                    editor={ ClassicEditor }
                    data={data}
                    onChange={ ( event, editor ) => {
                      const data = editor.getData();
                      setData(data);
                      console.log( { event, editor, data } );
                  } }
                    /* onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } } */
                />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
