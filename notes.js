***Notes***


$ touch chapter1.txt

$ start chapter1.txt


$git init   // to make .git in the folder

$ ls -a   //command to list all files folders including hidden

$ git status    //to show untracked files inside the working directory (red ttext = untracked)

$ git add chapter1.txt  //to add the new file and to make it green ; this means it is ready to be committed

$ git commit -m "Complete Chapter 1"  // this is to commit; -m is the message

$ git log   // to see every commit; to see what time & date is the commit by the person who committed ; shows hash code


//instead of using $ git add chapter1.txt
use 
$ git add .   // to add all chapters or files you want to add so they will be all ready to be committed


***Flow of files:****

Working directory (use $ git add) ---> Staging area (use $ git commit)  --->  Local Repository



***If ever you want to recover a file use these commands:***

$ git diff chapter3.txt  //shows the deleted and new text from the old and new

$ git checkout chapter3.txt //to roll back to the previous version





***Github commands:***


$ git remote add origin https://github.com/laharl143/Story.git   //use CRTL+SHIFT+V to paste in command line
//this is to add or locate the remote repository in github 

$ git push -u origin main // this is to push your local repo to ur remote repository

//after the command above, ur repository is already uploaded




***Flow of files: from Local Repo(.git) to Remote Repo(GitHub)****


Local Repo (use $ git push) ---> Remote Repo 




$ git fetch origin main 

$ git push origin main --force //this command help me push the local git to remote git(GitHub)
//warning! this command will force a push then the commit history will be wiped out.





***GitIgnore*** // this is used to ignore files you dont want to add to the staging area

$ touch .gitignore // to make the .gitignore file

$ start .gitignore // to open the .gitignore file

$ git rm --cached -r .   //this is to remove all files in the git staging area

$ git status // to check if the green files turned to red 



***Inside the .gitignore file***
you can write the files you dont want to be added to the staging are. Example:
Secrets.txt //to add the specific file to be ignored

Common Command inside .gitignore file:
*.txt // to add all the files with .txt as extension
#  // is to put comment





***Git Clone***

$cd // cd to ur preffered directory

$ git clone https://github.com/austinzheng/swift-2048.git  //this is to clone the files from Github to ur local directory

$ git log //inside the cloned repo, you can use git log to see the owner and the date he last committed etc.







***Branching and Merging***

//main branch is the essential and master branch
//you can create other branches if you want to experiment on things and later commit it to the main branch

**Branching Step by step method :

$ git branch alien-plot   //to create new branch

$ git branch // to check the current branches you have
//note! The *(asterisk) means you are in that branch

$ git checkout alien-plot // to swith to the preferred branch

$ git branch // to check if you have successfully transferred branch

$ git add . // to add the modified files to staging area

$ git commit -m "*message*" //to commit to local git

$ git log // to check the commit status. example: HEAD -> alien-plot) 

//NOTE!. 
(HEAD -> main) = Local Repository (.git)
(origin/main)  = Remote Repository (GitHub)


**Merging Step by step method : //if you decide to merge the small branch to ur main branch

//first you need to go back to the main branch
$ git checkout main

$ git merge alien-plot //this is to merge the smaller branch to main
//now the merge is successful!

$ git push -u origin main //to push local git to remote git
