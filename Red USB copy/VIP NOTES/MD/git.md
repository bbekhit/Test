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

---

### NEW COURSE NEW COURSE NEW COURSE NEW COURSE NEW COURSE NEW COURSE NEW COURSE

### Three stages

1- modified
2- staged (git add) add to staging area
3- committed (git commit) added to git database on local machine

### git help -a

- shows all explanation of commands
- git help commmit

### pwd

- shows path of directories ,where we at

### config

- git config --global --list (check what config exists)
- check .gitconfig 1-code ~/.gitconfig or 2-open ~/.gitconfig (open .gitconfig file)
- git config --global user.name "Boutros Bekhit" (setup name)
- git config --global user.email "bbekhit@apple.com" (setup email)
- git config --global core.editor "code --wait" (setup code editor) + next step
- open the Command Palette (⇧⌘P) and type 'shell command' to find the Shell Command: Install 'code' command in PATH command.

### github

- git repository with web interface

### steps

- new branch
  1- git pull origin develop
  2- git checkout -b <new branch name>
  3- git add .
  4- git commit -m ""
  5- git pull --rebase origin master
  6- git push origin <new branch name>
  7- create PR
  or
  5- git stash
  6- git pull origin master
  7- git stash apply
  8- git push origin <new branch name>

- changes requested
  1- git add .
  2- git commit --amend
  3- git push -f origin <new branch name>
  or
  2- git commit -m ""
  3- git pull
  4-

### going back from staged

- git add . ====> go back ====> git rm --cached <file name>(VIP: at the beginning of everything)
- git commit
- if files modified after committing ===> go back ====> git restore <file name>
- git add . ====> go back ====> git restore --staged <file name>
  VIP #git reset one.js ---- works the same as #git restore --staged <file name> ---- video 36
- untracked are in red
- staged are in green ready to commit
- modified red(modified but not added to index yet) ===> git restore <file name>
- modified green(mofified and added to index) ===> git restore --staged <file name>

### git status

- git status -s (shows a shot of the status)
- A <file name>

### git log

- git log --oneline
- git log -3
- git log <file name> (check commit for one file)
- git log 456htee..4555644 --oneline (since..untill) not including since
- git log -n 3 --oneline (last thre)
- git log --oneline --decorate --graph --all
- git log --stat --oneline -n 3
- git log -p --oneline -1 (shows what changed, video 74)
- git log <directory name> (to see changes in a directory from master branch)(video 74)
  (git log master ===> for remote master logs)(git log origin/master ===> for local master logs)
- git log --oneline --grep="fix"(find commits with fix word)

### changes inside commit

- git diff 2a70012~ 2a70012
- git show 2a70012
- git diff 1e7dbd2^!
- git log p -3 --oneline

### ls command

- ls -al
- ls -l

### branching

- git branch <filename> (create new branch)
- git branch (local branches only) -a(shows all local and remote branches) -r(remote branches only)
- git checkout <branch name> (to switch to that branch)
- git checkout -b <new branch name> (to create and switch new branch in one step)
- git branch -m <old name> <new name> (to rename branch)
- git branch -d <branch name> (to delete)
- git branch -D <branch name> (to delete branch with commits and wasn't merged, forced deleted)

### diff

- git diff master ff-branch (video 78 2:30)
- https://stackoverflow.com/questions/6412516/configuring-diff-tool-with-gitconfig

### merge

- git merge <file name> (i have to be in master branch)
  (if no changes to master before merging so the merge is fast forward)
- best practice before merge: git diff master <branch need to be merged>
- git merge <file name> --no-ff(result in a merge commit)
- git merge <file name> -m "message" (3-way merge)
- https://nvie.com/posts/a-successful-git-branching-model/
- https://stackoverflow.com/questions/9069061/what-is-the-difference-between-git-merge-and-git-merge-no-ff
- add \*.orig to .gitignore file
- git config --global mergetool.keepBackup false

### Head

- Head is points to last commit
- video 77

### git checkout

- git checkout 2a70012 ===> will make the Head points to this commit(detached Head) lesson 32
- ===> go back ===> git checkout master
- change file ===> git commit -am "" ===> git checkout -b <new branch name> ===> all changes will stay on new branch

- git checkout 2270bd7 <file name> (goes back to this commit without detach head video 34) ===> go back ===> git checkout Head <file name>

### revert

- git revert Head(undo changes to files but keep commit history)

### git reset

- git reset <file name> get the file back to unstaged area(out of index area after using <git add .>) look up at git (### going back from staged)("git restore --staged<file name>...")
- git reset get all files out of staged area if they are in but the file contents remain the same(all modification will be there) just going back from index stage (same as git restore --staged <filename>)
- git reset --hard (remove everything, out of staging area + clear all changes)(goes back to last commit)
- git reset 2a70012 (get back to this commit id and unstage all changes after this commit)
- git reset --hard 2a70012 (get back to this commit and delete all changes after it asif nothing)(video 38)
- git reset --hard (is a one step to git restore --staged <file name> then git restore <file name>)

git reset ============================================================================== git checkout

- git reset <file name> works as git restore --staged(go back from git add) ============== no git checkout <file name>
- git reset resets all file back to unstaged area ========== no git checkout
- git reset 2270bd7(go back to this commit and after that commit all goes to in modified state) ========= git checkout 2270bd7 ((detached Head))
  -- git reset 3d0c9d2 --hard (delete all history after that commit) ======== git checkout 3d0c9d2 <file name> (works as git reset 8d9a2ff)

### git clean (untracked)

- git clean -n
- git clean -f
- git clean -f <path>
- git clean -df (remove untracked directory)
- git clean -xf (remove untracked and files in .gitignore)

### git amend

- git commit --amend --no-edit (let us don't update commit message)

### branch sent by denys

- git fetch origin <branch name>

### fetch

- origin/master is local copy of remote repo
- if i have commits on origin/master and i just fetch it i get the commits and not merge it (video 90)
  (- git fetch origin master
- (in master) git merge origin/master ---- to sync my local master
- to check commits on a branch before fetching ---- git log --online origin/master
  )
- brings my local copy of remote repo up to date

### gir remote -v

### origin/master

- local copy of remote repo
- git branch -r(will show origin/master)
- git branch -a(will show master branch)

### git pull

- git fetch + git merge

https://www.youtube.com/watch?v=-H2U3kJ_urw vip
https://www.youtube.com/watch?v=oFYyTZwMyAg conflict

## shortcuts

 <git diff>
- git diff 2a70012~ 2a70012
- git show 2a70012
- git diff 1e7dbd2^!
- git log p -3 --oneline

<git reset>
to delete last commit we can reset till the one before it
- git reset 2a70012 (remove anything after this commit)
- git reset --hard 2a70012 (destroy anything after this commit)
- git reset --hard (works before commiting)
- git reset --hard HEAD^ (removes last commit)
- git reset --hard HEAd~2 (removes last 2 from top)
-git update-ref -d HEAD (vip if the one i wan to remove is the initial commit)
