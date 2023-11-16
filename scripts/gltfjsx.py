import re
import subprocess
import os
import sys
import pathlib
import glob
from pathlib import Path 


def main():
  argv = sys.argv
  argc = len(argv)
  if(argc != 2): 
    print("Invalid number of arguments.")
    return
  
  dir_name = argv[1]
  print('dir_name:', dir_name)
  listdir = os.listdir(dir_name)
  print('listdir:', listdir)
  cwd = os.getcwd()
  print('cwd:', cwd)
  
  #  Get all files in working directory.
  files = [f for f in listdir if os.path.isfile(dir_name + f)]
  print(files)
  #  Iterate over files.
  for file_name in files:
    path = dir_name + file_name
    print(path)
    
    #  Check if a .gltf or .glb file.
    match = re.search(r'\.gl(tf|b)',file_name)
    if not match: 
      # print("no match")
      continue
    # print(match.group(0))
    
    # Replace invalid characters
    def repl(match):
      return ''
    new_file_name = re.sub(r'[\W^\_](?!gl)', repl, file_name)
    new_file_name = re.sub(r'0(?=\d{2,})', repl, new_file_name)
    print("New file name:", new_file_name)
    
    new_path = dir_name + new_file_name
    print("New path:", new_path)  
    
    # Rename files.
    subprocess.run(['mv', path, new_path])

if __name__ == '__main__':
    main()
