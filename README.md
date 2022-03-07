# What is this repository
With the goal to study and learn Angular, I made a Tic-Tac-Toe game using Angular Docs and also an Youtube video tutorial as reference to understand core basics concepts of this framework. 

# Steps made

- Installed Angular CLI

- Created a new app 
  
  ```   
  ng new <project-name>
  ``` 

- Went to the workspace directory and launched the application.

```
cd angular-<project-directory>
ng serve --open
```

- Changed global styles 

- Created a new component inside app folder to managed the squares on Tic-tac-toe game (called square). This is our "dumb" component. 

  ```  
  ng g c <component-name>
  ```

- On this TS file created a new decorator (@Input) and attribute two values, also insert this variable into app component html file 

- Created a new component called board. This is our "smart" component (has internal state, so they can change) and insert 03 new properties (explained on the file which function everyone has) and methods on NgOnInit
  
- Changed board HTML 
- Added nebular to project
  
```
ng add @nebular/theme
```


# Resources 
- [Angular for Beginners - Let's build a Tic-Tac-Toe PWA](https://www.youtube.com/watch?v=G0bBLvWXBvc)
- [Angular Docs Tutorial first project](https://angular.io/tutorial/toh-pt0)
- [Customizable Angular UI KIT](https://akveo.github.io/nebular/)