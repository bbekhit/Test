\*\* ls -la //will show all . files but i have to be in ~

---

\*\*customizing terminal :
https://www.youtube.com/watch?v=j6vKLJxAKfw&list=PL-osiE80TeTvGhHkpvfmKWOiIPF8UVy6c

---

\*\* pwd to know path

---

\*\* echo "add text here" >> demo.txt (to add a file with content)
\*\* cat demo.txt (to see the content of a file)

\*\* unzip ~/Downloads/initializr-verekia-4.0.zip (go to folder to unzip file)

\*\* mv hipster.txt mytest.txt (a way to rename files or folders)

\*\* rm -rf to delete
\*\* rm -rf .git

\*\* ../../..
git mv <oldname> <newname>

<!-- https://www.youtube.com/watch?v=LXgXV7YmSiU -->  customozing
<!-- https://www.youtube.com/watch?v=vDOVEDl2z84&list=PL-osiE80TeTvGhHkpvfmKWOiIPF8UVy6c&index=8 -->

---

- .bash_profile
  if [ -f ~/.bashrc ]; then
  source ~/.bashrc
  fi

---

- .bashrc
  PS1="\[$(tput setaf 163 )\]@\h ";
PS1+="\[$(tput setaf 71 )\]\W "
  PS1+="\[$(tput setaf 166 )\] ==> "
PS1+="\[$(tput sgr0)\]";
  parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/_ \(._\)/ (\1)/'
  }
  PS1+="\[\033[32m\]\$(parse_git_branch)\[\033[00m\] \$ "

# bash-completion

[ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion || { # if not found in /usr/local/etc, try the brew --prefix location
[ -f "$(brew --prefix)/etc/bash_completion.d/git-completion.bash" ] && \
 . \$(brew --prefix)/etc/bash_completion.d/git-completion.bash
}
export PS1;

# Android studios

export /Users/boutrosbekhit/Library/Android/sdk;
export PATH=/Users/boutrosbekhit/Library/Android/sdk/platform-tools:\$PATH;

---

# brew install git bash-completion

---

<!-- https://code.visualstudio.com/docs/editor/intellisense -->
