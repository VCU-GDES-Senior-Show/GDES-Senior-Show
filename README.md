

Hey there! This info was put here by Kyree to help streamline the editing process for this project. If you have any questions, just reach out to me through the slack.


# Please make sure to read this file, and check the bottom of the file under "<!-- UPDATES -->" for updates about the project or code. Jekyll has a few rules that you have to follow or it'll break and I'll have to fix it lol. You can read more about jekyll at [this link](https://jekyllrb.com/docs/step-by-step/01-setup/).





<!-- HOW TO RUN THE SERVER -->
The local server runs through your browser and lets you view how the code will look on the internet. It will show all edits you've made and lets you also catch errors in code. It is easy to start up as long as there are no errors in your code.


1. In Visual Studio Code (VScode), click "Terminal" along the top bar (by File, Edit, View, Window, etc). Click "New Terminal". The new terminal will likely pop up at the bottom of the code editor.

    - Or if you don't have VScode, you can right click on the folder for this file in the file explorer, then hit services > New Terminal

2. In the terminal, type "bundle exec jekyll serve" and hit enter

    - If the terminal shows no "Error: ..." in red text, then the server has started up perfectly and there are no errors in the code. Continue to step 4.
    - If the terminal shows "Error: ..." in red text but still has the last line "Server running... press ctrl-c to stop.", that means the server is working but there is a minor error in the code. You can follow the path of the error message to find the error in the code.
    - If the terminal shows "Error: ..." in red text and then shows "➜  VCU-GDES-Senior-Show git:(main)" again, that means that the server couldn't start because of that error. First, try typing "bundle update" in the terminal and hitting enter, then "bundle install" and hitting enter. If that doesn't work, find the error through the path in the error message and try and fix it, then try to run "bundle exec jekyll serve" again.

3. Open your browser, preferably chrome. In the second to last line of the terminal, you should see "Server address: ..." followed by an http:// link. For me, it is "http://127.0.0.1:4000/" or "localhost:4000", but it may be different for you. Copy that link and paste it into your browser. That link will always be the same link and it will only work while the server is running.
4. You can now make any edits to the code that you want. In order to see the changes in the local host:

    - Save the files you're editing.
    - Refresh or hit CMD + R in your terminal

5. Everytime you hit save on a file, this will show up in your terminal: 

        Regenerating: 1 file(s) changed at 2023-04-07 16:43:28
                    path/to/file.file
        Jekyll Feed: Generating feed for posts
                    ...done in 0.031709 seconds.
    
    If you notice red or yellow text above this message, that means there is an error in the code you just did. You can follow the error message path to figure out where the error is and fix it. 

6. To end the live server, hit CTRL + C in the terminal. If you have an error in the code when you finish working and upload to github, make sure to type [ERROR] as the first word in the "Summary" box on github desktop before uploading it to github.






<!-- DO NOT EDIT THE FOLLOWING FILES AND FOLDERS -->
These files are necessary for Jekyll to function, and it will mess up the project if they are edited at all.

- ANYTHING under the folder _site (this is what jekyll generates out of out code, don't touch it)
- assets/css/styles.scss (edit under the _sass file instead)
- Gemfile 
- Gemfile.lock
- _config.yml

I have locked some of these files so that they cannot be edited, but not all of them. If you need me to unlock a file for some reason, let me know.






<!-- UPDATES -->