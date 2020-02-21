const DATA_DIR = "C:/gdrive/avails_dev/Commercials/";

<!-- https://github.com/bobthecow/git-flow-completion/wiki/Install-Bash-git-completion -->

## VIP VIP VIP ADDING VSC

- git config --global core.editor "code --wait"
- Now open the Command Palette (⇧⌘P) and type 'shell command' to find the Shell Command: Install 'code' command in PATH command.
- TO check code ~/.gitconfig or open ~/.gitconfig

## killing

- lsof -nP -i4TCP:\$PORT | grep LISTEN
- kill id
- for windows https://stackoverflow.com/questions/48198/how-can-you-find-out-which-process-is-listening-on-a-port-on-windows
  importance of git:

// back up
// versioning - History
// undo changes
// team collabration
// isolation

types:
centerlized: need to be connected to company network
-subversion
-CVS

decenterlized/distributed: most operations are local
-git
-mecurial

###

git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global --list
git commit --amend --author="Philip J Fry <someone@example.com>"

\*\* to open to modify name editor code ~/.gitconfig

three stages:
1-working directory untracked file
2-staging pre-commit holding area
3-repository(history) - commit

\*\* git status to show all untracked files and the modified ones
\*\* git add demo.txt will add the file to staging area
\*\* git status now will show a new file to be committed or reset to remove it
\*\* git rm --cached demo.txt to remove it from staging
\*\* git commit -m "first"
\*\* git push origin(github is the remote repo i cloned from) master(the branch to be pushed)
\*\* git push origin master

\*\* git init fresh-project (creates a folder and add git init in one step)

\*\* git commit (to pop up text editor)

\*\* git reset HEAD index.html
git checkout index.html

\*\* git pull origin master

\*\* git commit -am "message"
a : add m : message
only for files being tracked

\*\* git ls-files
to find out all files being tracked

\*echo "# hello" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/bbekhit/hello.git
git push -u origin master \*

\*\* git help -a git help -g

\*\* git commit -am "message"
to add and commit at same time

\*\* mkdir -p level1/level2/level3/level3
to make a folder structure

\*\* git reset HEAD <filename>
to unstage, remove from repository

\*\* git checkout -- <filename>
to return file to original last commit

\*\* git mv <oldname> <newname>

\*\* VIP \* if i just used mv witout git i have to le git nknow about renaming by this command
git add -A

\*\* git mv level2.txt level3
to move a file to a different directory

\*\* if i update from computer ican't use \*git add -A\* becouse of ../.DS_store
instead add the file indivisuall then update -u \* git add <filename> \* git add -u

\*so three ways to rename
best : git mv <old> <new>
better: mv <old> <new>
then git add -A
then git commit
least: from directory
git add <filename>
git add -u\*

\* git rm <filename> \* git commit -m "delete"

to return a deleted file \* git reset HEAD <filename>
then \* git checkout -- <filename>

\*deleting file being tracked:
git rm <filename>
git commit -m "delete"\*

\* git help log \*
to get help page

<!-- History -->

\* git log \*

\* git log --abbrev-commit \*

\* git log --oneline --graph --decorate \*

\* git log --since="3 days ago" \*

\* git log -- <filename> \*

\* git log follow -- level1/level1.txt \*

\* git show <commitID> \*

<!-- alias -->

git config --global alias.hist "log --all --graph --decorate --oneline"

<!-- to modify -->

VIP---
code ~/.gitconfig
git config --global -e

<!-- patching -->

\* git format-patch develop \*

<!-- branching -->

\* listing
git branch -a
git branch without -a list local only

\* creating
git branch <branch name>

\* switching
git checkout boutros

\*renaming
git branch -m boutros boutrossamir

\* delete
git branch -d boutros

\* creating a branch and check it out in one step
git checkout -b <new branch name>

<!-- Merging -->

p4merge install
git config --global merge.tool p4merg
git config --global mergetool.p4merge.path "C:/Program Files/Perforce/p4merge.exe"
git config --global difftool.prompt false

we have to go first to master branch:
git checkout master
then git merge new-title(branch name need to be merged) -m "adding message to merge"

\* merging with no fast forward
git merge add-copyright --no-ff

\*conflicts:
git merge realwork (will give a conflict and change to master/merging)
git mergetool (will open the p4merge for me to edit then save)
then git commit -m "merging complete" (master/merging ==> master)

three ways:
on master and no changes on master:git merge <branch name> fast forward
on master and no changes on master: git merge <branch name> --no-ff
on master and there are changes on master: git merge <branch name> -m "add message"

\*but this way a new dummy commit is added,
if you want to avoid spaghetti-history you can rebase:
This time, since the topic branch has the same
commits of master plus the commits with the new feature, the merge will be just a fast-forward.\*

<!-- diff -->

to see it in terminal:
git diff master new-title

to see it in terminal:
git difftool master new-title

<!-- gitignore -->

\ \*.orig
.DS_store
/log

<!-- <rebasing> -->

to merge the master into a branch
git checkout <branch name>
git rebase master

aborting rebase
git rebase --abort

\*to fix conflict\*
on any branch: git rebase master(will give conflict rebase)
git mergetool
will open p4merge(fix all conflicts and save)
git status(will show a modified file in green and i need to commit)
git add <file name>
git rebase --continue

\* if a developer updating github directly so i can't use (git pull)
instead use "git fetch origin master"
then git pull --rebase origin master (to add the changes on github to my master)

## Stashing

git stash(to postpone)
git stash apply(to recall)
git stash list(to see all staches)
git stash drop(to delete stashes)

for untracked files:
git stash -u

git stash apply + git stash drop === git stash pop

<!-- multiple stashes -->

git stash save "add message here"
git stash show stash@{1} (to show stash)
git stash apply stash@{1} (to recall only one stash)
git stash drop stash@{1} (to delete only one stash)
git stash clear (delete all stashes)

VIP:
git stash branch <new branch name>
creates new branch,switch to new branch,drop stash(delete it)

<!-- git push origin bbekhit-test -->

\* moving login page:
1-git fetch origin (i get all branches from the origin)
2-git branch(to see what branches i have)
3-git checkout sandbox/boutros
4-git cherry-pick e519e325b6b2936922b1db612ae8282ad7895f2b(add a certain commit to current branch)
5-make previous step for each commit
6-git push origin sandbox/boutros\*

\* <!-- \*making a PR : -->
\*\*git add first
1-git commit --amend (adding changes to last commit instead of creating new commit)
2-git push origin <branch name> (to push branch to github-origin)
3-go to github and green button to create a PR
4-add reviewers from right hand
5-

## mistake creating a branch not from master

1-git checkout -b 51448582_backup
create a copy of that branch
2-git branch -D 51448582 (delete wrong branch)
3-git checkout develop then git pull(switch to develop and pull)
4-git checkout -b 51448582 (create a new fresh branch from develop or master)
5-git cherry-pick kmd88893mmdj3idmj3mmdj
inside the new fresh branch we pick the commits i want to add
6-git push -f origin 51448582 (will force the changes to origin be carefull) \*

---

<!-- VIP VIP VIP -->

## pushin my branch

1-go to my local master branch (develop)
2-<!-- git pull origin develop -->
3-git checkout -b <branch name>
now i am adding new commits(orange) and the origin/master(develop) has changes added by different developers(brown) and i need to bring those changes to my branch before pushing it so i have to rebase
4-while inside the branch run <!-- "git pull --rebase origin develop" -->(get all brown commits from origin develop )
(when working locally, go to branch and run <!--"git rebase master" -->, this will get all the changes on master and put it under my changes on the branch. if found conflict run <!-- git mergetool --> see above)
5-<!-- git push origin <branch name> -->
6-create the PR on github and merge

<!-- <second way > -->

1-make all changes to develop
2-git stash -u
3-go to the local develop
4-git pull origin/develop(to get all updates from remote)
4-git checkout -b <branch name>
6-git stash apply
7-then git push origin <branch name>

---

<!-- steps to add remote or setup -->

- git remote add scope-demo(any name) git@deploy.orchard.apple.com:
- git remote -v
- git push scope-demo aligment:master

<!--git remote set-url origin git@github.pie.apple.com:siri-epm/scope-react.git -->

##########################################################
if there is a mistake and want to revert the commits:
1-git reset --soft HEAD~1
2-make all modification as if from begining
3-git push -f <branch name>: to force overwrite the existing branch name

####

git reset HEAD~1 --soft
git reset HEAD .
git checkout .
git fetch origin <branch name>
git pull origin <branch name>

## to see what inside comit

- git diff c099a81da11ae2c6f3d2efad6a85c2f2ed54d5e5^!

## what inside stash

- git stash show -p stash@{1}

## deleting all branches that are merged

git branch --merged | grep -v "\*" | xargs -n 1 git branch -d

## fixing branch to match remote branch

git -D <branch name (analayze ...)> // delete branch from local
git checkout <develop or master>
git pull // we pull all update including branch i want it on my local
git checkout <branch name>

## denys fix

i have a branch that isn't updated and have some changes not committed and i want it to get the updates from master or develop so i can run

- git rebase develop

### fetching one branch 
- git fetch <origin/or master> <branch name>
- to reset all commits git reset --soft HEAD~1

### test update
npm test -- -u
