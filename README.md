# aurelia-cordova-test
Aurelia as at 0.12 including animate.css integreation, build process slightly modified to build into cordova app.

#Getting it running
npm install<br/>
jspm install -y<br/>
cd cordova <br/>
cordova platform add android 

gulp watch 
------------------
page will be served from the cordova www directory.
modify the base url in index.html before deploying to device
(uncomment /android_asset/www/)
