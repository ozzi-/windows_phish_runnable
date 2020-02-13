# windows_phish_runnable
This setup is used by me in red teaming situations. Using GoPhish I get users to visit a page and download the JS file.
When it is executed, it does a callback to the phishing host (see the PHP file), tracking the executions in a log file.

Example of the confirmation Popup after running the JS:

![alt text](https://i.imgur.com/Pb8RHdE.png "popup")


Example of log file written:
```
CAMPAIGN NAME@2020-01-17 15:32:30 - WorkStation_1
CAMPAIGN NAME@2020-01-28 15:26:07 - WorkStation_8
CAMPAIGN NAME@2020-01-28 15:29:08 - WS9
CAMPAIGN NAME@2020-02-11 15:57:49 - WorkStation_2
CAMPAIGN NAME@2020-02-13 09:04:25 - WS1124
```
