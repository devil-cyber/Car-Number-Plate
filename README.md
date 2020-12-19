<h1 align="center">Welcome to Car Number Plate Detection 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> This is a tensorflow based object detection model that take car image as input and return the coordinate of the bounding boxes across the number plate of the car. After detecting the number plate will crop the number plate image using the cordinate and open-cv, then after that image is feed to OCR api that returns the number plate data.


![DEMO](https://github.com/devil-cyber/Car-Number-Plate/blob/master/images/ezgif-3-34b8c823a58d.gif)

### This project has been divided into two part
- API
- Webpage
`First run the server after server started the go to webpage folder and open index.html in browser for this UI`
## Install

```sh
# Create enivornment using python pipvenv or conda then install all required file
pip install -r requirements.txt
# To run the server follow the below command
python rest-server.py
# Now go inside webpage folder and open index.html file for the demo or you can used postman
```

## Author

👤 **Manikant Kumar**

* Website: https://devil-cyber.github.io/CodingSpace/
* Github: [@devil-cyber](https://github.com/devil-cyber)

## Show your support

Give a ⭐️ if this project helped you!

***
 
