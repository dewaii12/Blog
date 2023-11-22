import React from "react";
import Typewriter from "typewriter-effect";
import './css/custom.css'

function Type() {
    return (
      <div className="Typewriter">
        <Typewriter
          options={{
            strings: [
              'Mahasiswa Universitas Pendidikan Indonesia',
              'Jurusan Pendidikan Ilmu Komputer - 2022',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
    );
  }
  
  export default Type;