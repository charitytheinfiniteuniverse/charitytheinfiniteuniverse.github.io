/* ၁။ Layout အခြေခံ (Sepia Theme) */
body.sepia-mode {
    margin: 0;
    font-family: 'Pyidaungsu', sans-serif;
    overflow-x: hidden; 
    position: relative;
    width: 100%;
    background-color: #f4ecd8;
}
.container {
    max-width: 700px;
    margin: 0 auto;
    padding-bottom: 80px;
    padding-top: 70px;
    width: 100%;
    box-sizing: border-box;
}

/* ၂။ Top Bar & Setting Controls */
.top-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px; 
    background: #eadebc;
    position: fixed; 
    top: 0;
    left: 0;
    width: 100vw; 
    height: 60px; 
    z-index: 1000;
    border-bottom: 1px solid #d4c5a0;
    box-sizing: border-box;
}
.back-link {
    display: flex;
    align-items: center;    
    justify-content: center;
    text-decoration: none;
    color: #443300;
    gap: 4px; 
    background: #f4ecd8;                
    border: 1px solid #443300 !important; 
    width: 70px;              
    height: 30px;             
    border-radius: 8px;                 
    cursor: pointer;                    
    font-weight: bold;                  
}
.nav-icon {
    font-size: 28px !important;
    font-weight: 900 !important;
    line-height: 1 !important;
    display: inline-block;
    margin-top: -4px;
}
.nav-text {
    font-size: 18px !important;
    font-weight: bold;
    line-height: 1; 
}
.right-controls {
    display: flex;
    align-items: center;
    color: #443300;
    gap: 8px; 
    font-size: 20px !important;
    margin-right: 35px; 
}
.font-size-control {
    display: flex;
    align-items: center;
    gap: 5px;
}
.font-btn {
    width: 30px;
    height: 30px;
    font-size: 20px !important;
    background: #f4ecd8;
    border: 1px solid #443300;
    border-radius: 8px;
    cursor: pointer;
    color: #443300;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}
.setting-btn {
    display: inline-flex !important;
    align-items: center;
    justify-content: center;
    width: 30px;            
    height: 30px;
    color: #443300;
    font-size: 20px !important; 
    padding: 0 !important;
    background: #f4ecd8;
    border: 1px solid #443300;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}
#font-size-display {
    margin: 0 8px;
    font-weight: bold;
    color: #443300;
    font-size: 1.2rem;
}

/* ၃။ Setting Menu Popup Layout Window */
.setting-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.5);
    display: none;
    z-index: 1100;
}
.setting-content {
    background: #f4ecd8;
    width: 320px;
    position: absolute;
    top: 65px;
    right: 20px;
    padding: 0;
    max-height: 85vh;
    border-radius: 12px;
    border: 2px solid #443300;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.setting-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    background: #eadebc;
    border-bottom: 2px solid #443300;
}
.setting-title {
    margin: 0;
    color: #443300;
    font-size: 1.3rem;
    font-weight: bold;
}
.setting-close-btn {
    font-size: 28px;
    color: #443300;
    cursor: pointer;
    line-height: 1;
    font-weight: bold;
}
.setting-body {
    padding: 15px;
    overflow-y: auto;
    flex-grow: 1;
}
.setting-item {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 6px 0;
    background: #eadebc;
    border: 1px solid #443300;
    border-radius: 6px;
    color: #443300;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    font-size: 15px !important;
    transition: background 0.2s;
}
.setting-item:active {
    background: #d4c5a0;
}
.setting-item-group {
    padding: 12px;
    background: #eadebc;
    border: 1px solid #443300;
    border-radius: 8px;
    margin-bottom: 15px;
}
.setting-title2 {
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
    color: #443300;
    font-size: 15px !important;
    border-bottom: 1px dashed #443300;
    padding-bottom: 3px;
}

/* ❌ စာဖတ်ခန်း ခေတ္တပိတ်ရန် ခလုတ် သီးသန့်စတိုင် */
.close-view-btn {
    background: #f4ecd8 !important;
    color: #882200 !important;
    border: 1px solid #882200 !important;
    margin-top: 10px !important;
}

/* ⚠️ Factory Reset Button Style Configuration */
.factory-reset-btn {
    display: block;
    width: 100%;
    padding: 8px;
    margin-top: 12px;
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    font-size: 12px !important;
    text-align: center;
}
.factory-reset-btn:active {
    background: #f5c6cb;
}

/* 📚 Digital Bookshelf Cards UI Design */
.storage-usage-text {
    font-size: 13px;
    font-weight: bold;
    color: #443300;
    margin-bottom: 8px;
    text-align: right;
}
.recent-file-box {
    max-height: 200px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-right: 2px;
}
.bookshelf-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f4ecd8;
    border: 1px solid #b4a580;
    border-radius: 6px;
    padding: 8px 10px;
    cursor: pointer;
    transition: all 0.2s ease;
}
.bookshelf-card:hover {
    border-color: #443300;
}

/* 🌟 Active Bookmark - ဖတ်နေဆဲစာအုပ်ကို Highlight ပြောင်းလဲမှုစနစ် */
.active-card-highlight {
    background: #fff8e3 !important;
    border: 2px solid #b38b00 !important;
    box-shadow: 0 2px 6px rgba(179, 139, 0, 0.2);
}
.active-card-highlight .bookshelf-card-title {
    color: #b38b00 !important;
    font-weight: 900 !important;
}

.bookshelf-card-info {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.bookshelf-card-title {
    font-size: 14px;
    font-weight: bold;
    color: #443300;
}
.bookshelf-delete-btn {
    background: #eddcc4;
    border: 1px solid #aa9977;
    color: #554422;
    padding: 3px 6px;
    border-radius: 4px;
    font-size: 11px !important;
    cursor: pointer;
    font-weight: bold;
    margin-left: 6px;
}
.bookshelf-delete-btn:hover {
    background: #e4c4bd;
    color: #a02010;
    border-color: #a02010;
}

/* ⏳ PDF Loader Style CSS Animation Indicator */
.pdf-loading-indicator {
    background: #fff3cd;
    border: 1px solid #ffeeba;
    color: #856404;
    padding: 15px;
    text-align: center;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    margin: 20px 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

/* ၄။ Floating Buttons (Left Side) */
.floating-left-group {
    position: fixed;
    bottom: 25px;
    left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    gap: 12px; 
    z-index: 999;
}
.toc-toggle-btn {
    background: rgba(68, 51, 0, 0.8) !important; 
    color: #f4ecd8;
    border: none;
    padding: 12px 20px;
    border-radius: 25px; 
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    text-align: center;
}

/* ၅။ မာတိကာ Popup Overlay */
.toc-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.6);
    display: none;
    z-index: 1050;
}
.toc-content {
    background: #f4ecd8;
    width: 85%; 
    max-width: 400px;
    margin: 50px auto;
    padding: 0;
    border-radius: 12px;
    border: 2px solid #443300;
    position: relative;
    max-height: 80vh; 
    display: flex; 
    flex-direction: column; 
    overflow: hidden;
}
.toc-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #eadebc;
    border-bottom: 2px solid #443300;
    padding: 10px 15px;
}
.toc-content h1 {
    margin: 0;
    font-size: 1.5rem;
    color: #443300;
    background: transparent;
}
.close-btn {
    font-size: 30px;
    color: #443300;
    cursor: pointer;
    line-height: 1;
    font-weight: bold;
}
#toc-search {
    margin: 10px 15px 5px 15px;
    padding: 10px 14px;
    border: 1px solid #443300;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
    background: #f4ecd8;
    color: #443300;
}
.toc-list { 
    list-style: none; 
    padding: 5px 25px 20px 25px;
    margin: 0; 
    overflow-y: auto;
    flex-grow: 1; 
}
.toc-list li a {
    color: #443300 !important; 
    text-decoration: none !important;
    display: block;
    padding: 12px 0;
    border-bottom: 1px solid #d4c5a0;
    font-weight: bold;
}
.toc-list li a:visited { color: #443300 !important; }

.toc-list li a.active-chapter {
    color: #b38b00 !important; 
    font-weight: bold !important;
    border-left: 3px solid #443300;
    padding-left: 10px;
}

.toc-jump-buttons {
    position: absolute;
    right: 16px;
    bottom: 16px;
    display: flex;
    gap: 10px;
    z-index: 50;
    width: fit-content;
}
.toc-jump-buttons button {
    width: 42px;
    height: 42px;
    border: 1px solid #443300;
    background: #eadebc;
    color: #443300;
    border-radius: 50%;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.2s ease;
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
.toc-jump-buttons button:hover { transform: scale(1.08); }

/* ၆။ စာကိုယ်ပိုင်း Typographic Rendering Canvas */
.raw-text p {
    margin-bottom: 1.5em; 
    display: block;
}
.big-gap {
    height: 40px;
    width: 100%;
}
.paste-box {
    width: 100%;
    min-height: 120px;
    resize: vertical;
    background: #f4ecd8;
    color: #443300;
    border: 1px solid #443300;
    border-radius: 8px;
    padding: 12px;
    box-sizing: border-box;
    font-size: 15px;
    line-height: 1.6;
    margin-top: 5px;
}
.paste-actions {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 10px;
}
.upload-btn {
    display: block;
    width: 100%;
    padding: 10px;
    background: #eadebc;
    color: #443300;
    border: 1px solid #443300;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    box-sizing: border-box;
    font-size: 15px;
}
.upload-btn:active { transform: scale(0.98); }

/* 🎚️ Display Preset Adjusters Settings */
.preset-group, .adjust-group {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 6px;
    margin-bottom: 10px;
}
.preset-btn, .adjust-group button {
    background: #f4ecd8;
    border: 1px solid #443300;
    color: #443300;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s;
}
.preset-btn:hover, .adjust-group button:hover { transform: translateY(-1px); }
.preset-btn.active-preset {
    background: #443300;
    color: #f4ecd8;
}
#lh-display, #ls-display {
    min-width: 50px;
    text-align: center;
    background: #f4ecd8;
    border: 1px solid #443300;
    border-radius: 6px;
    padding: 6px 10px;
    font-weight: bold;
    color: #443300;
}

/* ✍️ Font Weight Adjuster UI CSS */
.weight-spinner-wrapper {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 5px;
}
.spinner-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f4ecd8;
    border: 1px solid #443300;
    border-radius: 4px;
    width: 40px;
}
.spinner-box button {
    background: none;
    color: #443300;
    border: none;
    cursor: pointer;
    padding: 3px;
    width: 100%;
    font-weight: bold;
}
.spinner-box span {
    font-size: 1.2rem;
    font-weight: bold;
    color: #443300; 
    padding: 2px 0;
}

/* ⛶ Fullscreen / Focus Mode Core Settings */
.fullscreen-round-btn {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid #443300;
    background: rgba(234, 222, 188, 0.4);
    color: #443300;
    cursor: pointer;
    position: fixed; 
    top: 80px;
    left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000; 
    transition: 0.3s;
}
body.focus-mode .top-controls .back-link,
body.focus-mode .top-controls .right-controls,
body.focus-mode .floating-left-group,
body.focus-mode .book-header {
    display: none !important;
}
body.focus-mode .top-controls {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
}

/* 📋 Long-Press Text Selection Block Mechanics */
article {
    -webkit-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    line-height: 2.0;
    word-wrap: break-word;
    overflow-wrap: break-word;
}
::selection { background-color: #ffcc00 !important; color: #000000 !important; }
::-moz-selection { background-color: #ffcc00 !important; color: #000000 !important; }
* { -webkit-tap-highlight-color: rgba(255, 204, 0, 0.4) !important; }
*:focus { outline: 2px solid #ffcc00 !important; outline-offset: 1px; }

/* 🖨️ High-Quality Black and White Printing Configurations */
@media print {
    .top-controls, .floating-left-group, .setting-overlay, .toc-overlay, .fullscreen-round-btn {
        display: none !important;
    }
    .container { width: 100% !important; margin: 0 !important; padding: 0 !important; }
    body { background: #ffffff !important; color: #000000 !important; }
    * { color: #000000 !important; background: transparent !important; }
}
