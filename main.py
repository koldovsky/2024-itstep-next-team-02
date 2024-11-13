import os

def traverse_files(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            print(os.path.join(root, file))

folder_path = './public/images/goods'
traverse_files(folder_path)
