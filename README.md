# Selene

This is an application on which I will practice my knowledge of front-end.\
I will use Unsplash API and try to build something on it.

This is based on `create-react-app`, so all its functionality should be present here.

## Setting up

In order to run this app by yourself, you have to have an unsplash account and API key.\
To get that, access [Unsplash's developer site](https://unsplash.com/developers) and register your own application to get your keys.

Also, in the `Redirect URI & Permissions` section of the newly registered application settings on [unsplash](https://unsplash.com/developers),\
add a redirect URI to the server adress you will be running this code.\
If you will run this with `npm start`, just add `http://localhost:3000`, save it and you will be fine.\
You can also add more addresses: for example, if you want to check this on the phone,\
add the address shown in your terminal as `on Your Network` to the list.

Once you are set up, in the project (that is Selene), in `/src` directory,\
create a file named `secrets.js`, where you should put two lines: 

``` javascript
export const accessKey = '[your access key]' 
export const secretsKey = '[your secret key]'
```

After thatn your terminal, in the root folder of the project, do a `npm install`\
or `yarn install` in order to install all the depenencies.

## Run
`npm start`


## Ideas for future
- Add a node.js server with a fixed ip and port, to have less hard time\
  setting up the allowed URI's for the key.