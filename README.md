## fetch lab
# send data
create the function submitdata and passed in two arguments (name, email) they submit request post to the link http://localhost:3000/users 
added the headers to  specify json content and contain a request for name and email to stringfy json data.
# handle the response
used (then) to handle the code response.
the first .then  extracts data from the response.
the second .then accesses the returned object and appends new (ID) to the DOM.
# handling errors
i used (catch) to handle errors if there was any and append it to the DOM.
# 