function initializeViz() {
    // JS object that points at empty div in the html
    var placeholderDiv = document.getElementById("viz");
    // URL of the viz to be embedded
    var url = "https://public.tableau.com/views/AMLOPollofPolls/Dashboard1?:language=es&:display_count=y&publish=yes&:origin=viz_share_link";
    // An object that contains options specifying how to embed the viz
    var options = {
    //   width: '600px',
    //   height: '300px',
      hideTabs: true,
      hideToolbar: true,
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
  }
  
  initializeViz();