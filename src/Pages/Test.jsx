import React from "react";
import MultiStageProgress from "../Components/MultiStageProgress";
import RectangularButton from "../Components/RectangularButton";
import FileUpload from "../Components/FileUpload";
import AddFile from "../Components/AddFile.jsx";
import FilePreviewer from "../Components/FilePreviewer";
import ImageInput from "../Components/image.jsx";


function Test() {

    const handleClick = () => {
        alert('Button clicked!');
      };


      const uploadedFiles = [
        { name: 'passport.jpg', url: 'https://via.placeholder.com/150', type: 'image' },
        { name: 'driver-license.jpg', url: 'https://via.placeholder.com/150', type: 'image' },
        { name: 'proof-of-address.pdf', url: '', type: 'file' },
      ];

    const buttonImage = 'https://via.placeholder.com/30x30?text=+';


  return (
    <div>
      <h1>Application Progress</h1>
      <MultiStageProgress currentStage={1} /> {/* Only 1st oval green */}
      <MultiStageProgress currentStage={2} /> {/* 1st and 2nd ovals green */}
      <MultiStageProgress currentStage={3} /> {/* 1st, 2nd, and 3rd ovals green */}
      <MultiStageProgress currentStage={4} /> {/* All 4 ovals green */}


      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center', marginTop: '50px' }}>
      {/* Button with text */}
      <RectangularButton content="Click Me" onClick={handleClick} disabled={false} />

      {/* Button with an image */}
      <RectangularButton
        content={<img src="https://via.placeholder.com/150x50" alt="Button Icon" />}
        onClick={handleClick}
        disabled={false}
      />

      {/* Disabled button */}
      <RectangularButton content="Disabled Button" onClick={handleClick} disabled={true} />
    </div>

    <div>
      <h1>File Upload Example</h1>

      {/* Single file upload for Birth Certificate */}
      <FileUpload
        fileLabel="Birth Certificate"
        multiple={false}
        // buttonImage={buttonImage}
      />
 
      {/* Multiple file upload for Documents */}
      <FileUpload
        fileLabel="Upload Documents"
        multiple={true}
        // buttonImage={buttonImage}
      />
    </div>

    <div>
      <h1>Add File Example</h1>
      <AddFile fileName="Add File"/>
      <AddFile fileName="Add More File"/>
    </div>

    <div>
    <FilePreviewer files={uploadedFiles} />
    </div>

    <div>
    <ImageInput />
    </div>
   
    </div>
  );
}

export default Test;
