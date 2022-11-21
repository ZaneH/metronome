curl -s https://api.github.com/repos/zaneh/metronome/releases/latest \
| grep ".*dmg" \
| cut -d : -f 2,3 \
| tr -d \" \
| sed -n 2p

curl -s https://api.github.com/repos/zaneh/metronome/releases/latest \
| grep ".*AppImage" \
| cut -d : -f 2,3 \
| tr -d \" \
| sed -n 2p

curl -s https://api.github.com/repos/zaneh/metronome/releases/latest \
| grep ".*msi" \
| cut -d : -f 2,3 \
| tr -d \" \
| sed -n 2p