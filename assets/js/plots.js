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

  function initializeViz2() {
    // JS object that points at empty div in the html
    var placeholderDiv = document.getElementById("viz2");
    // URL of the viz to be embedded
    var url = "https://public.tableau.com/views/HistoricalApproval/HApp?:language=es&:display_count=y&publish=yes&:origin=viz_share_link";
    // An object that contains options specifying how to embed the viz
    var options2 = {
      hideTabs: true,
      hideToolbar: true,
    };
    viz = new tableau.Viz(placeholderDiv, url, options2);
  }
  
  initializeViz2();


  function initializeViz3() {
    // JS object that points at empty div in the html
    var placeholderDiv = document.getElementById("viz3");
    // URL of the viz to be embedded
    var url = "https://public.tableau.com/views/TweetsperUser/Dashboard1?:language=es&:display_count=y&publish=yes&:origin=viz_share_link";
    // An object that contains options specifying how to embed the viz
    var options2 = {
      hideTabs: true,
      hideToolbar: true,
    };
    viz = new tableau.Viz(placeholderDiv, url, options2);
  }
  
  initializeViz3();

  function initializeViz4() {
    // JS object that points at empty div in the html
    var placeholderDiv = document.getElementById("viz4");
    // URL of the viz to be embedded
    var url = "https://public.tableau.com/views/Negativity/Dashboard1?:language=es&:display_count=y&publish=yes&:origin=viz_share_link";
    // An object that contains options specifying how to embed the viz
    var options2 = {
      hideTabs: true,
      hideToolbar: true,
      // width: '500px',
      // height: '500px',
    };
    viz = new tableau.Viz(placeholderDiv, url, options2);
  }
  
  initializeViz4();