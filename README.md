# Hilton React-Native Reservations Demo
=======================================================================================

### Architecture Decisions:
The following dependencies were used to facilitate building the UI, routing, and connection to the GraphQL service:

| Dependency: | Use: |
| ------ | ------ |
| `react-native (0.60)` | Build the Android/iOS App |
| `react-navigation` | Routing and Screen Transitions |
| `react-native-gesture-handler` | Dependency of React-Navigation |
| `apollo-boost, react-apollo, graphql` | Connection to GraphQL server and GraphQL Queries |
| `react-native-paper` | Lightweight Material UI Components (As opposed to Nativebase) |
| `react-native-vector-icons` | Material Icons |
| `react-native-daterange` | Cross Platform Date Picker |
| `react-native-simple-dialogs` | Modal that looks nice |
| `flow-bin@0.98.0 --dev` | Code formatting/linting (0.98.0 per .flowconfig) |
| `jetifier` | Resolve dependency native Java code that hasn't converted to AndroidX |
|  | See Troubleshooting Section Below |
|  | https://github.com/mikehardy/jetifier |

### Installation Instructions:

1. Extract the compressed file to the directory where you develop your apps
2. Double click to uncompress the file
3. Open your preferred terminal/Shell and navigate to the directory where you decompressed the file
4. At the command prompt, type:
```sh
$ yarn clean
```
5. Once the dependencies have finshed installing, you can run the project by typing either:
```sh
$ yarn ios
```
or
```sh
$ yarn android
```

### Troubleshooting Instructions:
Known issues with React-Native v. 060:
- https://facebook.github.io/react-native/blog/2019/07/03/version-60

Having installed the latest version of `react-navigation` and `react-native-gesture-handler` (a dependency of react-navigation), when running `react-native run-android`, the following build error prevents the build:

`> Task :react-native-gesture-handler:compileDebugJavaWithJavac FAILED`

**Solution:**

github issue #160:
https://github.com/kmagiera/react-native-gesture-handler/issues/642

_Adding these 2 lines to gradle.properties in Android Studio:_
```sh
`android.useAndroidX=true`
```
```sh
`android.enableJetifier=true`
```

_Run the following commands:_
```sh
`npm install -g jetifier`
```
```sh
`npx jetify`
```

**Package.json Shortcut Scripts:**

In the event the App becomes unresponsive or the Metro Bundler hangs, run this script at the command line:
```sh

$ yarn clean
```
This executes the following commands to clear watchman, cache, and reinstalls dependencies etc.:

`watchman watch-del-all && rm -rf node_modules/ && npm cache clean --force && npm install && npm i jetifier && npx jetify && react-native run-android -- --reset-cache`

**Installation Troubleshooting:**

In the event there are build errors on iOS, from the master directory, cd into the iOS directory:

```sh
$ cd ios
```

and at the command prompt type:

```sh
$ pod install
```

---