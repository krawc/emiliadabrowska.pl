"use client";

import Script from "next/script";

const FORM_CSS = `
@import url("https://assets.mlcdn.com/fonts.css?version=1775464");
.ml-form-embedSubmitLoad{display:inline-block;width:20px;height:20px}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
.ml-form-embedSubmitLoad:after{content:" ";display:block;width:11px;height:11px;margin:1px;border-radius:50%;border:4px solid #fff;border-color:#fff #fff #fff transparent;animation:ml-form-embedSubmitLoad 1.2s linear infinite}
@keyframes ml-form-embedSubmitLoad{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
#mlb2-39784807.ml-form-embedContainer{box-sizing:border-box;display:table;margin:0 auto;position:static;width:100%!important}
#mlb2-39784807.ml-form-embedContainer h4,#mlb2-39784807.ml-form-embedContainer p,#mlb2-39784807.ml-form-embedContainer span,#mlb2-39784807.ml-form-embedContainer button{text-transform:none!important;letter-spacing:normal!important}
#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper{background-color:#f6f6f6;border-width:0;border-color:transparent;border-radius:4px;border-style:solid;box-sizing:border-box;display:inline-block!important;margin:0;padding:0;position:relative}
#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper.embedForm{max-width:400px;width:100%}
#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody{padding:20px 20px 0 20px}
#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent,#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent{text-align:left;margin:0 0 20px 0}
#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4,#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4{color:#000;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:30px;font-weight:400;margin:0 0 10px 0;word-break:break-word}
#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p,#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p{color:#000;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px;font-weight:400;line-height:20px;margin:0 0 10px 0}
#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form{margin:0;width:100%}
#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent,#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow{margin:0 0 20px 0;width:100%}
#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow{margin:0 0 10px 0;width:100%}
#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-last-item{margin:0}
#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input{background-color:#fff!important;color:#333!important;border-color:#ccc;border-radius:4px!important;border-style:solid!important;border-width:1px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px!important;height:auto;line-height:21px!important;margin:0;padding:10px!important;width:100%!important;box-sizing:border-box!important}
#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit{margin:0 0 20px 0;float:left;width:100%}
#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button{background-color:#000!important;border:none!important;border-radius:4px!important;box-shadow:none!important;color:#fff!important;cursor:pointer;font-family:'Open Sans',Arial,Helvetica,sans-serif!important;font-size:14px!important;font-weight:700!important;line-height:21px!important;height:auto;padding:10px!important;width:100%!important;box-sizing:border-box!important}
#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover{background-color:#333!important}
#mlb2-39784807.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading{display:none}
.ml-error input,.ml-error textarea,.ml-error select{border-color:red!important}
`;

const FORM_HTML = `
<div id="mlb2-39784807" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-39784807">
  <div class="ml-form-align-center">
    <div class="ml-form-embedWrapper embedForm">
      <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
        <div class="ml-form-embedContent" style="margin-bottom:0"></div>
        <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/1817847/forms/184530050376270911/subscribe" data-code="" method="post" target="_blank">
          <div class="ml-form-formContent">
            <div class="ml-form-fieldRow ml-last-item">
              <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                <input aria-label="email" aria-required="true" type="email" class="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autocomplete="email">
              </div>
            </div>
          </div>
          <input type="hidden" name="ml-submit" value="1">
          <div class="ml-form-embedSubmit">
            <button type="submit" class="primary">Subskrybuj</button>
            <button disabled="disabled" style="display:none" type="button" class="loading">
              <div class="ml-form-embedSubmitLoad"></div>
              <span class="sr-only">Loading...</span>
            </button>
          </div>
          <input type="hidden" name="anticsrf" value="true">
        </form>
      </div>
      <div class="ml-form-successBody row-success" style="display:none">
        <div class="ml-form-successContent">
          <h4>Dziękujemy!</h4>
          <p>Zostałaś zapisana. Sprawdź skrzynkę — czeka na Ciebie prezent!</p>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export default function MailerLiteForm() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: FORM_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: FORM_HTML }} />
      <Script id="ml-form-success-39784807">{`
        function ml_webform_success_39784807() {
          var $ = ml_jQuery || jQuery;
          $('.ml-subscribe-form-39784807 .row-success').show();
          $('.ml-subscribe-form-39784807 .row-form').hide();
        }
      `}</Script>
      <Script
        src="https://groot.mailerlite.com/js/w/webforms.min.js?v95037e5bac78f29ed026832ca21a7c7b"
        strategy="afterInteractive"
      />
      <Script id="ml-takel" strategy="afterInteractive">{`
        fetch("https://assets.mailerlite.com/jsonp/1817847/forms/184530050376270911/takel");
      `}</Script>
    </>
  );
}
