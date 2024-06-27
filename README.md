## How to run

### Start ngrok
```
ngrok http 3000 -host-header="localhost:3000"
```

### Start the app

Change the env variable REACT_APP_PUBLIC_URL to ngrok URL.

```
npm run start-web
```

You can then go to `http://localhost:9009/`

////////////////////////

To use new fonts, use the font's link in index.html "<\head>" tag then simply call it in the scripts "fontStyle" variable.
