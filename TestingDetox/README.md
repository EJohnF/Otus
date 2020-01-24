# Detox testing system

## Requirements
* python2
* >brew tap wix/brew
   brew install applesimutils
* `npm install -g detox-cli`
 
Make sure you run metro bundler. 


## To test Release build of your app
### Step 2: Build 
* Build the demo project
 
 ```sh
 detox build --configuration ios.sim.release
 ```
 
### Step 3: Test 
* Run tests on the demo project
 
 ```sh
 detox test --configuration ios.sim.release
 ```
 This action will open a new simulator and run the tests on it.

## To test Debug build of your app
### Step 2: Build 
* Build the demo project
 
 ```sh
 detox build --configuration ios.sim.debug
 ```
 
### Step 3: Test 

 * start react-native packager
 
  ```sh
 npm run start
 ```
 * Run tests on the demo project
 
 ```sh
 detox test --configuration ios.sim.debug
 ```
 This action will open a new simulator and run the tests on it.
