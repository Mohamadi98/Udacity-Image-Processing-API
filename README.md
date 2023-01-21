# Udacity-Image-Processing-API
## Project Summary
The functionality of this project is resizing images files that can be found in the images folder, using URL parameters provided by the user.
## Scripts
You can first use <code>npm install</code> to install the dependecies found in the package.json file.
<br>
There are multiple scripts that can be used to explore the project functionalities.
<br>
<code>npm run build</code> converts the typescripts files to javascript.
<br>
<code>npm run test</code> builds the project, and executes the written tests found in the <code>build/tests</code>.
<br>
<code>npm run prettier</code> formats all files found in <code>src</code>.
<br>
<code>npm run lint</code> runs linter on all files found in <code>src</code>, along with fixing them if possible.
<br>
<code>npm run start</code> starts the server in development.
## Usage
Project listens on port=3000.
<br>
Endpoint for using the project <code>https://localhost:3000/images</code>
<br>
The URL parameters that can be used with the enpoint: 
* name (current available images): 
  * fjord. 
  * santamonica.
  * encenadaport.
  * palmtunnel.
  * icelandwaterfall.
* width (numerical value).
* height (numerical value).
### Example
<code>https://localhost:3000/images?name=fjord&width=250&height=250</code>
<br>
If the image successfuly resized a new image file with the .jpg extension will appear in the <code>thumbnails</code> folder.
<br>
The file name will be in this format <code>name_width_height.jpg</code>
### Example
<code>fjord_250_250.jpg</code>
<br>
<br>
The project will detect cases where there is missing parameters, invalid values, or non existing files, and a message will appear in the browser detailing the error.
### Examples
<code>https://localhost:3000/images?height=300</code> missing parameters.
<br>
<code>https://localhost:3000/images?name=santamonica&width=ipsum&height=400</code> invalid values.
<br>
<code>https://localhost:3000/images?name=seashore&width=480&height=300</code> non existing file name.
### Note
you can also use other images than the ones used, just add the image in the <code>images</code> folder.
