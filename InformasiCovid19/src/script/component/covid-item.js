class ClubItem extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    set club(club) {
        this._club = club;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    
                }
                :host {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
               
                .covid-info {
                    padding: 50px;
                    background: #fff;
                }
               
                .covid-info > h1 {
                    font-weight: lighter;
                    font-size: 50px;
                }
               
                .covid-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }
               p.sembuh {
                   color:green;
                }
                
                
            </style>
            <div class="covid-info">
            <h1>${this._club.region.name}</h1>
            <p><h2>${this._club.region.province}</h2></p>
            <p><h2 style="color:red;">Terkonfirmasi : ${this._club.confirmed}</h2></p>
            <p><h3 style="color:orange;">Kasus Aktif : ${this._club.active}</h3></p>
            <p class="sembuh">Sembuh : ${this._club.recovered}</p>
            <p>Meninggal : ${this._club.deaths}</p>
            <p><i>Terakhir update : ${this._club.last_update}</i></p>

        </div>`;
      
    }
   
 }
  
 customElements.define("club-item", ClubItem);