tailwind.config = {
  theme: {
    extend: {
      // Color Start 
      colors: {
        headerColor: ' rgba(109, 94, 241, 0.5)',
        hoverColor: '#1BBF00',
        overlyColor: 'rgba(106, 98, 197, 0.9);'
      },
      // Color End 

      // Container Start 
      maxWidth: {
        'headerContainer': '1170px',
        'bannerContainer': '962px',
      },
      // Container End 

      // Font Family 
      fontFamily: {
             'open': ['Open Sans'],
             'papri': ['Paprika'],
      },
       // Font Family 
      //  Background
      backgroundImage: {
        'bannerBg': "url('../images/bannerBg.jpg')",
        
      }, 
      // Background 
    }
  }
}