Add <semantic> to code and remove some <div> tags.
Many of your <img> tags don’t have any alt text, which is also not good for accessibility.
You have duplicated code in your CSS files, which is not recommended. For example, the CSS code for your the body and header is present in several files.
You could have used CSS variables for easier maintenance and enhanced scalability of your code.
You mainly use pixels in your code, which messes up the responsiveness for smaller screen sizes. For example, the header and footer are not responsive at all. The product detail page is also not responsive.
The naming and organization of your files and folders could be improved. For example, CSS files should go in their own folder and you should never use spaces in file names. Choose one naming convention (e.g., dashes/underscores between lowercase words or camelCase and stick to it).
