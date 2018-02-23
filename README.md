# MMM-Alexa-X-GoogleAssistant-Simultaneously
## One installer for both Google Asistant and Amazon Alexa For MagicMirror²  
## Simultaneously run Google Assistant and Alexa on MagicMirror² Raspberry Pi 


![Alexa](MMM-Alexa-X-GoogleAssistant-Simultaneously/MMM-Alexa-X-GoogleAssistant-Alexa.gif)
![GoogleAssistant](MMM-Alexa-X-GoogleAssistant-Simultaneously/MMM-Alexa-X-GoogleAssistant.gif)




### Note:  
**Due to the 20th Dec update to Google Assistant SDK, the installation process has remarkably changed. Please Read through this document carefully**  
**Refer to this video https://youtu.be/vprJBDDYE8Q for critical steps in Google Assistant installation** 

**The Google Assistant Component used in this project is the GassistPi project. So for 'Preliminary Setups for the customizations and respective How-Tos' check this [out](https://github.com/shivasiddharth/GassistPi/blob/master/README.md#using-the-customizations)**  
****************************************************************
**Before Starting the setup**
****************************************************************
**For Google Assistant**  
1. Download credentials--->.json file (refer to this doc for creating credentials https://developers.google.com/assistant/sdk/develop/python/config-dev-project-and-account)   

2. Place the .json file in/home/pi directory  

3. **DO NOT RENAME THE JSON FILE**

**For Amazon Alexa**  
1. Create a security profile for alexa-avs-sample-app if you already don't have one.  
https://github.com/alexa/alexa-avs-sample-app/wiki/Create-Security-Profile

***************************************************************
**Setup Amazon Alexa, Google Assistant or Both**     
***************************************************************

- Video Setup here https://www.youtube.com/watch?v=3kgT4OJrevA
1. Clone the git using:
```
git clone https://github.com/shivasiddharth/Assistants-Pi  
```
2. Make the installers executable using:
```
sudo chmod +x /home/pi/Assistants-Pi/prep-system.sh    
sudo chmod +x /home/pi/Assistants-Pi/audio-test.sh   
sudo chmod +x /home/pi/Assistants-Pi/installer.sh  
```
3. Prepare the system for installing assistants by updating, upgrading and setting up audio using:  
```
sudo /home/pi/Assistants-Pi/prep-system.sh
```
4. Restart the Pi using:
```
sudo reboot
```
5. Make sure that contents of asoundrc match the contents of asound.conf    
   Open a terminal and type:  
```
sudo nano /etc/asound.conf
```
Open a second terminal and type:    
```
sudo nano ~/.asoundrc
```
If the contents of .asoundrc are not same as asound.conf, copy the contents from asound.conf to .asoundrc, save using ctrl+x and y

6. Test the audio setup using:  
```
sudo /home/pi/Assistants-Pi/audio-test.sh  
```
7. Restart the Pi using:
```
sudo reboot
```
8. Install the assistant/assistants using the following. This is an interactive script, so just follow the onscreen instructions:
```
sudo /home/pi/Assistants-Pi/installer.sh  
```
9. After verification of the assistants, to make them auto start on boot:  
Pi 3 and Pi2 users, open the gassistpi-ok-google.service in the /home/pi/Assistants-Pi/systemd folder and add your project-id and model-id in the indicated points.    
Pi Zero users, open the gassistpi-push-button.service in the /home/pi/Assistants-Pi/systemd folder and add your project-id and model-id in the indicated points.  
After that, open a terminal and run the following commands:  
```
sudo chmod +x /home/pi/Assistants-Pi/scripts/service-installer.sh
sudo chmod +x /home/pi/Assistants-Pi/scripts/clientstart.sh  
sudo chmod +x /home/pi/Assistants-Pi/scripts/companionstart.sh  
sudo chmod +x /home/pi/Assistants-Pi/scripts/wakeword.sh  
sudo /home/pi/Assistants-Pi/scripts/service-installer.sh  
sudo systemctl enable companionapp.service
sudo systemctl enable client.service
sudo systemctl enable wakeword.service
sudo systemctl enable stopbutton.service
```
#If using Pi 2B or Pi 3B  
```
sudo systemctl enable gassistpi-ok-google.service  
```
#If using Pi zero  
```
sudo systemctl enable gassistpi-push-button.service  
```
### Manually Start The Google Assistant

At any point of time, if you wish to manually start the assistant:

**Ok-Google Hotword/Pi3/Pi2/Armv7 users**   
Open a terminal and execute the following:
```
/home/pi/env/bin/python -u /home/pi/GassistPi/src/main.py --project_id 'replace this with your project id'  --device_model_id 'replace this with the model id'

```
**Pushbutton/Pi Zero/Pi B+ and other users**   
Open a terminal and execute the following:
```
/home/pi/env/bin/python -u /home/pi/GassistPi/src/pushbutton.py --project-id 'replace this with your project id'  --device-model-id 'replace this with the model id'

```



*******************************************************************************************************************************
### ** Credit for @shivasiddharth  :coffee: :smile:** [![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7GH3YDCHZ36QN)  

*******************************************************************************************************************************

# Special Thanks
- Michael Teeuw for creating the awesome MagicMirror2 project that made this module possible.
- shivasiddharth for making them installed together easier .

The MIT License (MIT)
=====================

Copyright © 2017 Sebastian Hodapp

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

**The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.**
