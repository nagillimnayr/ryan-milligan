import re
import subprocess
import os
import sys
import pathlib
import glob
from pathlib import Path 


model_path="../public/assets/models/"
output_path="../src/components/canvas/gltfjsx/"

def main():
  argv = sys.argv
  argc = len(argv)
  if(argc != 2): 
    print("Invalid number of arguments.")
    return
  
  dir_name = argv[1]
  if dir_name[-1] != '/':
    dir_name += '/'
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
    path = dir_name +  file_name
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
    
    command = 'npx gltfjsx@6.2.13 ' + new_path + ' -T -t -s -k'
    
    subprocess.run(args=['C:/Program Files/nodejs/npx', 'gltfjsx@6.2.13', new_path, '-T', '-t', '-s', '-k'], capture_output=True, text=True, shell=True)
  
  # Sort generated files.
  listdir = os.listdir()
  #  Get all files in working directory.
  files = [f for f in listdir if os.path.isfile(f)]
  for file_name in files:
    #  Get file extension.
    match = re.search(r'(.*)(\.\w*)$', file_name)
    if not match: 
      print("No match.")
      continue
    ext = match.group(2)
    model_name = match.group(1)
    print('ext:', ext)
    print('model name:', model_name)
    if ext == './b' or ext == '.gltf':
      # Move file into model directory.
      subprocess.run(['mv', file_name, f'{model_path}{file_name}'])
      
      
      
    elif ext == '.tsx':
      # Edit path to assets in the public directory.
      # -i to modify in place.
      subprocess.run(['perl', '-i', '-e', "s/(?<useGLTF\()'/'assets\/models/", file_name])
      subprocess.run(['perl', '-i', '-e', "s/(?<preload\()'/'assets\/models/", file_name])
      # subprocess.run(['sed', '-i', r"s/useGLTF('/useGLTF('assets\/models/", file_name], shell=True)
      # subprocess.run(['sed', '-i', r"s/preload('/preload('assets\/models/", file_name], shell=True)
      # subprocess.run(r"sed -i -e s/useGLTF(\'/useGLTF(\'assets\/models/ " + file_name, shell=True)
      # subprocess.run(r"sed -i -e s/preload(\'/preload(\'assets\/models/ " + file_name, shell=True)
      
      file_str = ""
      print('file name:', file_name)
      with open(file_name, "rt") as f:
        file_str = f.read()
        file_str = re.sub("useGLTF('", "useGLTF('assets/models", file_str)
        file_str = re.sub("preload('", "preload('assets/models", file_str)
        file_str = re.sub("preload('", "preload('assets/models", file_str)
      
      with open(file_name, "wt") as f:
        f.write(file_str)
      
      
      
      # Change component name.
      pattern = r's/(?<=\s)Model/' + model_name + r'/'
      subprocess.run(['perl', '-i', '-e', pattern, file_name])
      
      # Move file.
      new_path = output_path + dir_name + file_name
      # -f to force overwrite.
      subprocess.run(['mv', file_name, new_path])

  
  
if __name__ == '__main__':
    main()
