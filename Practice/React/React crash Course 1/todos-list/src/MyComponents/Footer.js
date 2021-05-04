import React from 'react';

export const Footer = () => {

    let footerStyle= {
        position: "relative",
        top: "50vh",
        width:"100%"
    }
    return (
        <footer class="footer">
        <div class="container">
          <span class="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>
    )

}