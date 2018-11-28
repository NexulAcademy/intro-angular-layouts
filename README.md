# Introduction to Angular, building Page Layouts
Introductory presentation project to learn practical application of Angular to build a new Angular project with muliple pages, create good looking layouts and display data.

The project was initially generated using Angular CLI 6.0.8.  The instructions still continue to work for Angular CLI 7.1.0 (latest at the time of this writing.)

# Prerequisites

This walkthrough can be followed using a Windows, Mac or Linux computer.  An editor is required to edit files along with a terminal app. 

(1)Editor: The recommended editor application for Windows, Mac and Linux is VS Code.
https://code.visualstudio.com/download

(2) Terminal: Each operating system includes a terminal application. On windows the terminal application is called the "Command Prompt".  You may also install 'bash' or another terminal of choice.  VS Code also includes a terminal.

(3) Node/NPM (Node Package Manager): Check if you have these installed before downloading them using your terminal application. Here is an example of the version command and likely output.  Your version may vary, and that is ok.

	PS C:\dev\Repos> node -v
	v10.13.0
	PS C:\dev\Repos> npm -v
	6.4.1

(4) Angular CLI: The Angular Command Line Interface can be installed with the terminal once NPM is installed.

Windows:

	PS C:\dev\Repos>npm install -g @angular/cli

If you already have the CLI installed, upgrading to the latest is as easy as specifying it with the command.

	PS C:\dev\Repos>npm install -g @angular/cli@latest

or a specific version with:

	PS C:\dev\Repos>npm install -g @angular/cli@7.1.0

On Mac, if the above commands do not work, try to prefix the command with 'sudo'.

    $>sudo install -g @angular/cli

For more information on the CLI, check out the documentation:
https://cli.angular.io/

Each step of the workshop is contained in commits to this repository, so you can see the exact lines of code that changed. You can see all the commit steps or follow the links in each step.

[All commits](https://github.com/NexulAcademy/intro-angular-layouts/commits/master)

# Workshop Steps

## Step 1: Create project with the CLI 
Creating an application is as simple as a single CLI command. Enter this command with the working folder set to the desired parent folder for the new application.

	 PS C:\dev\Repos>ng new intro-angular-layouts 

This will create the project and install some npm packages. If you are using Angular 7 or later the command will prompt you for some of the options. Or skip the prompts by specifying them upfront:

	PS C:\dev\Repos> ng new intro-angular-layouts --routing --style scss

Compare your result to commit ['Step 1'](https://github.com/NexulAcademy/intro-angular-layouts/commit/f89a5e31c0259c19a02a6f01e1962f479701f5ee).

Open the newly created project folder with VS Code to continue. Feel free to run the 'ng serve' command in the terminal, or by using the 'Terminal-> Run Task' command from the menu. Choose the "npm start" task, which will run "npm run serve".

## Step 2: Add Angular Material
Angular Material is an framework for the ['Google Material Design specification'](https://material.io/design/). Google has also created an ['Angular implementation'](https://material.angular.io/) which we will use now.

To enable Angular material in your project, run this command in the terminal from within the project folder.

	PS C:\dev\Repos\intro-angular-layouts> ng add @angular/material

With CLI 7 and later you will be prompted for the initial color theme and other options. Opt in to hammer js and browser animations.

Compare your result to commit ['Step 2'](https://github.com/NexulAcademy/intro-angular-layouts/commit/65d0ffe4fe6e76eb13cbd1541a8546bfa9145288).

## Step 3: Generate a main layout

Material includes custom components to make it easy to get started. You can leverage the custom schematics (code templates) using the ng generate command.

	PS C:\dev\Repos\intro-angular-layouts> ng g @angular/material:material-nav --name app-nav
	
Compare your result to commit ['Step 3'](https://github.com/NexulAcademy/intro-angular-layouts/commit/6309207691e788f6b5261b92fac25762f454c8e9).

## Step 4: Use the new layout

Step 3 generates a component but it is not automatically used by the application. Update the code within app.component.html to use the layout.

Compare your answer to commit ['Step 4'](https://github.com/NexulAcademy/intro-angular-layouts/commit/66799609ac9fe99badaa413a0fe93aa96b0940b5).

## Step 5: Generate a dashboard component
Dashboards are common in admin applications. Material includes a commonly used layout appearance with cards for specific information sections.  Generate a dashboard component with the ng generate command.

	PS C:\dev\Repos\intro-angular-layouts> ng g @angular/material:material-dashboard --name app-dashboard

Compare your result to commit ['Step 5'](https://github.com/NexulAcademy/intro-angular-layouts/commit/24b483a24ee0e9bc6f023378836522b6b16cf7aa).

## Step 6: Use the new dashboard 

The dashboard was only generated, its up to you to tell Angular where it should be used. Let's start by placing it directly in the main layout.

Look for the content placeholder comment in the layout component created earlier to add the newly generated component name.

Compare your answer to commit ['Step 6'](https://github.com/NexulAcademy/intro-angular-layouts/commit/30085ce92b5f17a98b7564477ed21d237208e804).

## Step 7: Generate table components
Tables containing data from a server API result are common in interactive data applications. Angular Material includes powerful table components supporing paging, sorting and filtering. Sometimes setting this up can be confusing. To make it easier the Angular Material package includes schematics to set one up.

Generate a table for students and another for courses with the following commands.

	PS C:\dev\Repos\intro-angular-layouts> ng g @angular/material:material-table --name course-table

	PS C:\dev\Repos\intro-angular-layouts> ng g @angular/material:material-table --name student-table
	
Compare your result to commits ['Step 7'](https://github.com/NexulAcademy/intro-angular-layouts/commit/3165c40742a4005ee016e751e5b0d3dadb29502c) and ['Step 7b'](https://github.com/NexulAcademy/intro-angular-layouts/commit/b4bf283ef05486e1225b9cdbac753a08532f6a5c).

## Step 8: Adding routing to toggle between active components 
The dashboard is currently hard-coded to always display. This should really be dynamic based on what the user has selected in the application. This is done using 'routing'. 

When the application was created the "--routing" option enabled routing features in the application.  It created an an 'app-routing.module.ts' file to configure the routes. If you had not specified the routing option, then you can still add routes directly in the "app.module.ts".

A route is defined by a path string and a component name in a JSON data structure.

	const appRoutes: Routes = [
	  { path: '', component: AppDashboardComponent},
	  ... more here
	];

These routes are passed into the RouterModule at app creation.

	RouterModule.forRoot(appRoutes)

Go ahead and add some routes for the 3 page components to the application. Then update the anchor tags in the layout component to the same path values.

Angular routing includes an element to place in your layout to place the contents of the active route.  Use this in your layout in place of the dashboard component.

	<router-outlet></router-outlet>

Compare your answer to commit ['Step 8'](https://github.com/NexulAcademy/intro-angular-layouts/commit/3101aab57040f33e164709c4322aaa9438dbc291).

## Step 9: Prevent page refreshes with 'routerLink'
After step 8, notice when you click on a sidenav link that the entire page refreshes. The application is recognizing the routes as the page loads each time, but it isn't using routing to direct the user to the next route yet.

You can replace 'href' with '[routerLink]' to fully leverage routing. Go ahead and update your usage of routing.

Compare your answer to commit ['Step 9'](https://github.com/NexulAcademy/intro-angular-layouts/commit/22316ea5b203eb3b31b67485f1bf352f56ac8da9).

## Step 10: Changing the sample data structure to your own

The generated table components both look the same, using the same sample data from the schematics. Its time to make the data reflect what should be shown.

Find the 'CourseTableItem' interface and add a 'weeks' property. Also look for the sample data returned and change it to realistic course names and week durations.

Compare your answer to commit ['Step 10'](https://github.com/NexulAcademy/intro-angular-layouts/commit/665f543d3d7349f54eca3f448596c0dde6493ec2).


## Step 11: Use the new 'weeks' column in the displayed table

The view (aka. template, markup or html) for the course table component only includes the two original columns.  Find the html and add a new column for 'weeks'.

The html only defines the available columns. The actual columns shown at any given time is configurable, possibly as a user preference. Also find the backing component array that defines the columns to display and add the new 'weeks' column.

Compare your answer to commit ['Step 11'](https://github.com/NexulAcademy/intro-angular-layouts/commit/0a654cb2bf176324eb9c1f09cc016f7c926bfed6).

## Step 12: Sorting your new column

The sort logic works out-of-the-box for the id and name columns created by the schematic.  To enable sorting on other columns, you need to tell the Angular datasource how to sort the column.

Go back to the 'CourseTableDataSource', find the sort function and add logic for the 'weeks' property added in step 10.

Compare your answer to commit ['Step 12'](https://github.com/NexulAcademy/intro-angular-layouts/commit/b31a5e75ba900258404acde88ee12bdb341a4bab).

## Next Steps:

Take a moment to explore the datasource class that came with the generated table component. In a real application the "EXAMPLE_DATA" would be replaced by a call to get real data from an API. Exploring this further is left as an exercise or a discussion with your mentor.

Look into ['Angular Services'](https://angular.io/guide/architecture-services) to learn how to make Http calls to an API.

# Using Angular CLI
The rest of this walkthrough readme is generated by creating a new angular project using the Angular CLI command line.  See Step 1 above for details.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
