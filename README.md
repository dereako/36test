# 36test
I wanted to show 36creative my front end skills. Thank you for sending me this project, it was a bit more elaborate than I anticipated, but in the end I really did enjoy it.


## Installation
1. This project uses WordPress, so you'll need to set up a local server on your [Mac](https://codex.wordpress.org/Installing_WordPress_Locally_on_Your_Mac_With_MAMP) or [PC](http://www.devside.net/howto/wordpress-manual-install).

2. Now you'll need to install my theme "test36", copying and pasting it inside your new WordPress install in the wp->content > themes directory.

3. I do have a few extra files in my main WordPress folder, but they are grunt (package.json, Gruntfile.js, the node_modules directory) and git (.git, this readme.md) related, so feel free to ignore these, unless you are going to use them to modify the project further.

4. Now install the database, I find it's quickest to do this in command line (use a Mac's built in Terminal app, or get PuTTY for Windows), but you need to be comfortable with that first. Hopefully you'll find this command isn't too daunting:
mysql -u root -p -h localhost databasename < ~/Downloads/database.sql
Where root is your mysql username, and ~/Downloads is the path to my database export on your hard drive. Provided you already created a database name and user in step 1, that will then prompt you for your mysql user's password, and install the database onto your local server.

5. You will also want to copy and paste the wp-content > uploads folder as it contains dynamic imagery to pre-populate the site. These can be further managed or removed in favor of new images in the Media Library section of WordPress. For more on that...


## Modification
Within my theme's folder (test36) there are easier to read and edit JavaScript files in the js folder, with 36test.js providing most of the functionality. This was then combined and compressed, or minified, into the final/36test.min.js file. If you want to enqueue the other files then you can modify functions.php in my theme's folder, or you can re-run the same process I did in grunt.

Similarly, the LESS files are in a less directory, but are processed and become styles.css within the theme's directory itself.

Go to localhost/wordpressdirectory/wp-admin in a web browser to login to the WordPress, I believe the username and password have already been given to you.

From there you use the WordPress as a Content Management System (CMS) to edit the Pages, there's one for each navigation link. You can also add posts to the blog (The Latest), and you can show off your new work by adding image files on the appropriate pages.

This is how the logic for images works on the home page:
- Up to 7 images are pulled from the Works page, if the images are "attached" to that page in the Media Library, they will also be pulled into the home page.
- The main artist is an image attached to the About page.
- The latest is a quick preview of your most recent Post.
- The fellow artist is a single image chosen at random from the pool of all attached images for the Fellow Artists page.
	
That's a maximum of 10 moving blocks on the home page, all pulled from other places on the site, but together providing a nice thorough overview of the company right on the front page.