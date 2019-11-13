// 1- // to find out if i have SSH keys
// cat ~/.ssh/id_rsa.pub
// or ls -a ~/.ssh

//2-Epam Work "name"
// SHA256:gS6OC2FTHKiCHHbko4kIGB/vWAeSC+V1Pas71q2I9KM boutros_bekhit@epam.com

// 3-to change password
// ssh-keygen -p <keyname>.

// 4-Epam instructions
// https://git.epam.com/help/ssh/README#generating-a-new-ssh-key-pair
// https://git.epam.com/profile/keys/41170

1-//ls -a ~/.ssh
2-connecting to github using ssh googling
3-//ssh-keygen -t rsa -b 4096 -C "bbekhit@apple.com"
4- check if we got the keys //ls -a ~/.ssh
5-check if ssh is running  //eval "$(ssh-agent -s)"
6- adding ssh key //ssh-add ~/.ssh/id_rsa
7- copy ssh key //pbcopy < ~/.ssh/id_rsa.pub
8- now go to github > settings > ssh keys and GPG > copy
9- check communication //ssh -T git@github.pie.apple.com or git@github.com
10- get welcome message //Hi bbekhit! You've successfully authenticated, but GitHub does not provide shell access.
