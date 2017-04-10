export function populateDocument() {
  document.body.innerHTML = '<div id="dv_1">' +
      '<h1> Hello </h1>' +
      '<ol>' +
      '<li><p>Depending on what an app does, it may not care about this at all. But some apps will require major changes. Think of any code that reads a filename from within a file, or from the network, or from NSUserDefaults, or from the user&rsquo;s typing, or from a URL handler, and then looks for that file by name. Or code that reads the contents of a folder and compares the filenames with ones it has seen before. Also think of any code that compares a filename with a string, or puts filenames in a dictionary or set, or creates checksums or secure hashes of filenames. Even if code is just reading a filename from disk, so that it starts out with the right byte sequence, you have to be careful of any code that processes it changing the normalization.</p></li>' +
      '<li><p>If normalization is not handled by the file system, it becomes the responsibility of each app. Apple could update Cocoa to make the common cases easier, but it sounds like this has not been done, and it wouldn&rsquo;t handle everything, anyway. Not all file system access goes through Cocoa. And, in truth, even with a file system that does Unicode normalization, some code needs to care about this.</p></li>' +
      '<li><p>The Apple engineer&rsquo;s reply is not very helpful because it&rsquo;s not clear what the &ldquo;correct Normalization routines&rdquo; are. If APFS is not normalized, then there really is no canonical form that you can expect to find on disk. Your code has to pick one and use it consistently. Cocoa has <a href="https://developer.apple.com/library/content/qa/qa1235/_index.html">four different methods</a> for normalizing strings. None of these normalize the same way that HFS+ did. It uses a <em>variant</em> of Form D.</p></li>' +
      '<li><p>It&rsquo;s not clear what normalization the APFS to HFS+ converter uses. It doesn&rsquo;t <em>really</em> matter, though, since apps need to be able to handle all the cases, anyway.</p></li>' +
      '<li><p>Even if an app creates a file, I&rsquo;m not sure it&rsquo;s safe for it to rely on being able to find it again with the same name. The file may reside on a disk whose file system is migrated. Or the file could be restored from backup, cloud synced, or transferred in some other manner that might change its name.</p></li>' +
      '<li><p>As far as I know, there is no API to tell, given a path, whether its file system uses normalization.</p></li>' +
      '<li><p>As far as I know, if you have a path there is no easy way and efficient way to look for it on disk if the normalizations may differ. If you get unlucky, you would have to start at the top and read the contents of each folder until you find the file or folder that, when normalized, matches that component of your path. And there is ambiguity here because, with a bag-of-bytes file system, there could be multiple items at each level that match the path component.</p></li>' +
      '<li><p>More generally, once APFS is deployed users can legitimately end up with multiple files in the same folder whose names only differ in normalization. So it&rsquo;s not simply a matter of having all application code convert all filenames to a canonical normalization. Apps need to be able to support files like this that coexist <em>as well as</em> the case where there&rsquo;s only one file and the name in the file system doesn&rsquo;t exactly match the name that the app stored or calculated.</p></li>' +
      '</ol> ' +
      '<div id="dv_2">Hello <a>abc</a>' + 
      '</div>' +
      '</div> <div></div>';
  return document;
}