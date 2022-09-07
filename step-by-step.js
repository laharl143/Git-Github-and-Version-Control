Step by step method on how to push in working Dir to remote(github):

…or create a new repository on the command line

echo "# kotlin-notes" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/laharl143/kotlin-notes.git
git push -u origin main




…or push an existing repository from the command line
git remote add origin https://github.com/laharl143/kotlin-notes.git
git branch -M main
git push -u origin main
