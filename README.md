# html_benchmark

### Proof of concept project to demonstrate how web browser can be used for instrumentation UI

#### Overview
Web browser security models prevents them from being used directly to obtain external data required for instrumentation.
That is, client side javascript is sand-boxed to communicate only with its server.

A work around to this limitation is to include a small local sever on the same machine that proxies the browser request and returns the result
In this example, the client contains a "speedometer" control and a button. After the button is pressed the browser requests an update from the server.

The server connects to third party machine via ssh and runs a sample command which stores the results in a temporary file.
The sever then reads the temporary file and completes the browser request.




How scripts are made
how keys are made and copied to remote ssh-keygen/ ssh-copy-id pi@192.168.50.24
Git clone
create server
create client
build client and update server
