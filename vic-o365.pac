/**
 * vic-o365.pac
 * @authors	Gao, Jiezhang (Vic)
 * @date	2020-03-07
 * @update	2020-03-07
 * NOTE - This PAC script is hosted on GitHub. It does not check users' location like what Zscaler does on its Hosted PAC.
 */

// Proxy function configuration (1: enabled | 0: disabled)
var Config = {
	GoHK_CN: 1,
	Zscaler_878: 1,
	MustGoZscaler: 0,
	MustDirect: 0,
};
 
// Domain names which need to direct to Zscaler HK nodes for China users
var HK_FQDN = [
	// Miscellaneous
	{domain:'*.cisco.com'},
	{domain:'*.verizon.com'},
	{domain:'*.verizonenterprise.com'},
	{domain:'hcyn.login.em2.oraclecloud.com'},
	{domain:'hcyn.fs.em2.oraclecloud.com'},
	{domain:'hcyn.fa.em2.oraclecloud.com'},
	{domain:'*.em2.oraclecloud.com'},
	{domain:'*.bmwgroup.net'},
	{domain:'admin.zscalertwo.net'},
	{domain:'ips.zscalertwo.net'},
	// O365 Exhcange
	{domain:'outlook.office.com'},
	{domain:'outlook.office365.com'},
	{domain:'smtp.office365.com'},
	{domain:'r1.res.office365.com'},
	{domain:'r3.res.office365.com'},
	{domain:'r4.res.office365.com'},
	{domain:'*.outlook.office.com'},
	{domain:'*.outlook.com'},
	{domain:'attachments.office.net'},
	{domain:'*.protection.outlook.com'},
	{domain:'*.mail.protection.outlook.com'},
	// O365 Skype and Teams
	{domain:'*.lync.com'},
	{domain:'*.teams.microsoft.com'},
	{domain:'teams.microsoft.com'},
	{domain:'*.broadcast.skype.com'},
	{domain:'broadcast.skype.com'},
	{domain:'quicktips.skypeforbusiness.com'},
	{domain:'*.sfbassets.com'},
	{domain:'*.urlp.sfbassets.com'},
	{domain:'skypemaprdsitus.trafficmanager.net'},
	{domain:'*.keydelivery.mediaservices.windows.net'},
	{domain:'*.msecnd.net'},
	{domain:'*.streaming.mediaservices.windows.net'},
	{domain:'ajax.aspnetcdn.com'},
	{domain:'mlccdn.blob.core.windows.net'},
	{domain:'aka.ms'},
	{domain:'amp.azure.net'},
	{domain:'*.users.storage.live.com'},
	{domain:'*.adl.windows.com'},
	{domain:'*.skypeforbusiness.com'},
	{domain:'*.msedge.net'},
	{domain:'compass-ssl.microsoft.com'},
	{domain:'*.mstea.ms'},
	{domain:'*.secure.skypeassets.com'},
	{domain:'mlccdnprod.azureedge.net'},
	{domain:'videoplayercdn.osi.office.net'},
	{domain:'*.tenor.com'},
	{domain:'*.skype.com'},
	{domain:'statics.teams.microsoft.com'},
	// O365 Sharepoint
	{domain:'*.sharepoint.com'},
	{domain:'*.log.optimizely.com'},
	{domain:'click.email.microsoftonline.com'},
	{domain:'ssw.live.com'},
	{domain:'storage.live.com'},
	{domain:'*.search.production.apac.trafficmanager.net'},
	{domain:'*.search.production.emea.trafficmanager.net'},
	{domain:'*.search.production.us.trafficmanager.net'},
	{domain:'*.wns.windows.com'},
	{domain:'admin.onedrive.com'},
	{domain:'officeclient.microsoft.com'},
	{domain:'g.live.com'},
	{domain:'oneclient.sfx.ms'},
	{domain:'*.sharepointonline.com'},
	{domain:'cdn.sharepointonline.com'},
	{domain:'privatecdn.sharepointonline.com'},
	{domain:'publiccdn.sharepointonline.com'},
	{domain:'spoprod-a.akamaihd.net'},
	{domain:'static.sharepointonline.com'},
	{domain:'prod.msocdn.com'},
	{domain:'watson.telemetry.microsoft.com'},
	{domain:'*.svc.ms'},
	{domain:'myyfai-files.sharepoint.com'},
	{domain:'myyfai-myfiles.sharepoint.com'},
	// O365 Common
	{domain:'*.api.microsoftstream.com'},
	{domain:'amsglob0cdnstream11.azureedge.net'},
	{domain:'nps.onyx.azure.net'},
	{domain:'*.azureedge.net'},
	{domain:'*.online.office.com'},
	{domain:'*.cdn.office.net'},
	{domain:'*.onenote.com'},
	{domain:'*.microsoft.com'},
	{domain:'*cdn.onenote.net'},
	{domain:'ad.atdmt.com'},
	{domain:'ccs.login.microsoftonline.com'},
	{domain:'*.msappproxy.net'},
	{domain:'*.microsoftonline.com'},
	{domain:'*.manage.office.com'},
	{domain:'*.portal.cloudappsecurity.com'},
	{domain:'apc.delve.office.com'},
	{domain:'*.blob.core.windows.net'},
	{domain:'*.helpshift.com'},
	{domain:'*.aria.microsoft.com'},
	{domain:'*.o365weve.com'},
	{domain:'*.office365.com'},
	{domain:'*.cloudapp.net'},
	{domain:'*.aadrm.com'},
	{domain:'testconnectivity.microsoft.com'},
	{domain:'*.hockeyapp.net'},
	{domain:'vortex.data.microsoft.com'},
	{domain:'nexus.officeapps.live.com'},
	{domain:'o15.officeredir.microsoft.com'},
	{domain:'ocws.officeapps.live.com'},
	{domain:'odc.officeapps.live.com'},
	{domain:'roaming.officeapps.live.com'},
	{domain:'activation.sls.microsoft.com'},
	{domain:'crl.microsoft.com'},
	{domain:'ols.officeapps.live.com'},
	{domain:'office15client.microsoft.com'},
	{domain:'ocsa.officeapps.live.com'},
	{domain:'insertmedia.bing.office.net'},
	{domain:'go.microsoft.com'},
	{domain:'mrodevicemgr.officeapps.live.com'},
	{domain:'officecdn.microsoft.com'},
	{domain:'ajax.microsoft.com'},
	{domain:'*.acompli.net'},
	{domain:'*.manage.microsoft.com'},
	{domain:'account.live.com'},
	{domain:'accounts.google.com'},
	{domain:'api.login.yahoo.com'},
	{domain:'api.dropboxapi.com'},
	{domain:'app.box.com'},
	{domain:'graph.facebook.com'},
	{domain:'www.evernote.com'},
	{domain:'a.wunderlist.com'},
	{domain:'bit.ly'},
	{domain:'by.uservoice.com'},
	{domain:'api.diagnostics.office.com'},
	{domain:'data.flurry.com'},
	{domain:'app.adjust.com'},
	{domain:'rink.hockeyapp.net'},
	{domain:'acompli.helpshift.com'},
	{domain:'play.google.com'},
	{domain:'*.appex.bing.com'},
	{domain:'api.meetup.com'},
	{domain:'*.yammer.com'},
	{domain:'*.assets-yammer.com'},
	{domain:'tasks.office.com'},
	{domain:'www.outlook.com'},
	{domain:'eus-www.sway-cdn.com'},
	{domain:'www.google-analytics.com'},
	{domain:'sway.com'},
	{domain:'*.entrust.net'},
	{domain:'officespeech.platform.bing.com'},
	{domain:'*.loki.delve.office.com'},
	{domain:'*.measure.office.com'},
	{domain:'*.office.com'},
	{domain:'cdnprod.myanalytics.microsoft.com'},
	{domain:'workplaceanalytics.cdn.office.net'},
	{domain:'r3.res.outlook.com'},
	{domain:'*.notification.api.microsoftstream.com'},
	{domain:'amsglob0cdnstream12.azureedge.net'},
	{domain:'*.media.azure.net'},
	{domain:'*broadcast.officeapps.live.com'},
	{domain:'contentstorage.osi.office.net'},
	{domain:'s.ytimg.com'},
	{domain:'apis.live.net'},
	{domain:'*.msftidentity.com'},
	{domain:'*.microsoftonline-p.com'},
	{domain:'*.protection.office.com'},
	{domain:'account.office.net'},
	{domain:'aus.delve.office.com'},
	{domain:'*.localytics.com'},
	{domain:'*.events.data.microsoft.com'},
	{domain:'*.azurerms.com'},
	{domain:'nexusrules.officeapps.live.com'},
	{domain:'*.msocdn.com'},
	{domain:'ocsredir.officeapps.live.com'},
	{domain:'support.office.com'},
	{domain:'cdn.odc.officeapps.live.com'},
	{domain:'officecdn.microsoft.com.edgesuite.net'},
	{domain:'c.bing.net'},
	{domain:'*.outlookmobile.com'},
	{domain:'api.office.com'},
	{domain:'mail.google.com'},
	{domain:'social.yahooapis.com'},
	{domain:'www.dropbox.com'},
	{domain:'m.facebook.com'},
	{domain:'www.wunderlist.com'},
	{domain:'www.acompli.com'},
	{domain:'outlook.uservoice.com'},
	{domain:'sdk.hockeyapp.net'},
	{domain:'*.appex-rf.msn.com'},
	{domain:'secure.meetup.com'},
	{domain:'auth.gfx.ms'},
	{domain:'*.yammerusercontent.com'},
	{domain:'eus-www.sway-extensions.com'},
	{domain:'sway.office.com'},
	{domain:'*.geotrust.com'},
	{domain:'*.officeconfig.msocdn.com'},
	{domain:'loki.delve.office.com'},
	{domain:'myanalytics.microsoft.com'},
	{domain:'workplaceanalytics.office.com'},
	{domain:'*excel.officeapps.live.com'},
	{domain:'*.office.net'},
	{domain:'www.youtube.com'},
	{domain:'cdn.optimizely.com'},
	{domain:'*.msidentity.com'},
	{domain:'*.msauth.net'},
	{domain:'manage.office.com'},
	{domain:'admin.microsoft.com'},
	{domain:'can.delve.office.com'},
	{domain:'analytics.localytics.com'},
	{domain:'appsforoffice.microsoft.com'},
	{domain:'*.informationprotection.azure.com'},
	{domain:'*.staffhub.office.com'},
	{domain:'portal.microsoftonline.com'},
	{domain:'officepreviewredir.microsoft.com'},
	{domain:'excelbingmap.firstpartyapps.oaspapps.com'},
	{domain:'www.googleapis.com'},
	{domain:'*.itunes.apple.com'},
	{domain:'c.bing.com'},
	{domain:'wus-www.sway-cdn.com'},
	{domain:'www.sway.com'},
	{domain:'*.omniroot.com'},
	{domain:'config.office.com'},
	{domain:'loki.delve-gcc.office.com'},
	{domain:'myanalytics-gcc.microsoft.com'},
	{domain:'api.microsoftstream.com'},
	{domain:'*onenote.officeapps.live.com'},
	{domain:'officeapps.live.com'},
	{domain:'account.activedirectory.windowsazure.com'},
	{domain:'*.msauthimages.net'},
	{domain:'protection.office.com'},
	{domain:'home.office.com'},
	{domain:'delve.office.com'},
	{domain:'api.localytics.com'},
	{domain:'assets.onestore.ms'},
	{domain:'ecn.dev.virtualearth.net'},
	{domain:'*.onmicrosoft.com'},
	{domain:'officeredir.microsoft.com'},
	{domain:'excelcs.officeapps.live.com'},
	{domain:'login.windows-ppe.net'},
	{domain:'login.live.com'},
	{domain:'c.live.com'},
	{domain:'wus-www.sway-extensions.com'},
	{domain:'*.public-trust.com'},
	{domain:'lpcres.delve.office.com'},
	{domain:'az416426.vo.msecnd.net'},
	{domain:'*powerpoint.officeapps.live.com'},
	{domain:'www.onedrive.com'},
	{domain:'accounts.accesscontrol.windows.net'},
	{domain:'portal.office.com'},
	{domain:'delve-gcc.office.com'},
	{domain:'connect.facebook.net'},
	{domain:'informationprotection.hosting.portal.azure.net'},
	{domain:'cdn.forms.office.net'},
	{domain:'r.office.microsoft.com'},
	{domain:'ocos-office365-s2s.msedge.net'},
	{domain:'secure.aadcdn.microsoftonline-p.com'},
	{domain:'cl2.apple.com'},
	{domain:'*.symcb.com'},
	{domain:'s0.assets-yammer.com'},
	{domain:'*rtc.officeapps.live.com'},
	{domain:'adminwebservice.microsoftonline.com'},
	{domain:'*.msftauth.net'},
	{domain:'www.office.com'},
	{domain:'eur.delve.office.com'},
	{domain:'firstpartyapps.oaspapps.com'},
	{domain:'az826701.vo.msecnd.net'},
	{domain:'dc.applicationinsights.microsoft.com'},
	{domain:'omextemplates.content.office.net'},
	{domain:'client.hip.live.com'},
	{domain:'*.symcd.com'},
	{domain:'*shared.officeapps.live.com'},
	{domain:'api.passwordreset.microsoftonline.com'},
	{domain:'*.msftauthimages.net'},
	{domain:'gbr.delve.office.com'},
	{domain:'c1.microsoft.com'},
	{domain:'dc.services.visualstudio.com'},
	{domain:'peoplegraph.firstpartyapps.oaspapps.com'},
	{domain:'directory.services.live.com'},
	{domain:'*.verisign.com'},
	{domain:'web.microsoftstream.com'},
	{domain:'*view.officeapps.live.com'},
	{domain:'autologon.microsoftazuread-sso.com'},
	{domain:'*.phonefactor.net'},
	{domain:'ind.delve.office.com'},
	{domain:'prod.firstpartyapps.oaspapps.com.akadns.net'},
	{domain:'forms.microsoft.com'},
	{domain:'pptcs.officeapps.live.com'},
	{domain:'d.docs.live.net'},
	{domain:'docs.live.net'},
	{domain:'*.verisign.net'},
	{domain:'*visio.officeapps.live.com'},
	{domain:'becws.microsoftonline.com'},
	{domain:'enterpriseregistration.windows.net'},
	{domain:'jpn.delve.office.com'},
	{domain:'forms.office.com'},
	{domain:'store.office.com'},
	{domain:'en-us.appex-rf.msn.com'},
	{domain:'aia.entrust.net'},
	{domain:'*word-edit.officeapps.live.com'},
	{domain:'clientconfig.microsoftonline-p.net'},
	{domain:'management.azure.com'},
	{domain:'kor.delve.office.com'},
	{domain:'dgps.support.microsoft.com'},
	{domain:'mem.gfx.ms'},
	{domain:'templateservice.office.com'},
	{domain:'foodanddrink.services.appex.bing.com'},
	{domain:'apps.identrust.com'},
	{domain:'*word-view.officeapps.live.com'},
	{domain:'companymanager.microsoftonline.com'},
	{domain:'policykeyservice.dc.ad.msft.net'},
	{domain:'lam.delve.office.com'},
	{domain:'telemetryservice.firstpartyapps.oaspapps.com'},
	{domain:'docs.microsoft.com'},
	{domain:'office365servicehealthcommunications.cloudapp.net'},
	{domain:'tse1.mm.bing.net'},
	{domain:'cacert.a.omniroot.com'},
	{domain:'office.live.com'},
	{domain:'device.login.microsoftonline.com'},
	{domain:'nam.delve.office.com'},
	{domain:'web.localytics.com'},
	{domain:'msdn.microsoft.com'},
	{domain:'securescore.office.com'},
	{domain:'uci.officeapps.live.com'},
	{domain:'cacert.omniroot.com'},
	{domain:'graph.microsoft.com'},
	{domain:'suite.office.net'},
	{domain:'webanalytics.localytics.com'},
	{domain:'platform.linkedin.com'},
	{domain:'signup.microsoft.com'},
	{domain:'watson.microsoft.com'},
	{domain:'odcsm.officeapps.live.com'},
	{domain:'office.microsoft.com'},
	{domain:'cacerts.digicert.com'},
	{domain:'graph.windows.net'},
	{domain:'webshell.suite.office.com'},
	{domain:'wus-firstpartyapps.oaspapps.com'},
	{domain:'staffhub.ms'},
	{domain:'wikipedia.firstpartyapps.oaspapps.com'},
	{domain:'officeimg.vo.msecnd.net'},
	{domain:'cdp1.public-trust.com'},
	{domain:'login.microsoft.com'},
	{domain:'products.office.com'},
	{domain:'staffhub.office.com'},
	{domain:'wordcs.officeapps.live.com'},
	{domain:'p100-sandbox.itunes.apple.com'},
	{domain:'cert.int-x3.letsencrypt.org'},
	{domain:'login.microsoftonline.com'},
	{domain:'staffhub.uservoice.com'},
	{domain:'www.bing.com'},
	{domain:'partnerservices.getmicrosoftkey.com'},
	{domain:'crl.entrust.net'},
	{domain:'login.microsoftonline-p.com'},
	{domain:'staffhubweb.azureedge.net'},
	{domain:'crl.globalsign.com'},
	{domain:'login.windows.net'},
	{domain:'res.delve.office.com'},
	{domain:'sas.office.microsoft.com'},
	{domain:'crl.globalsign.net'},
	{domain:'logincert.microsoftonline.com'},
	{domain:'shellprod.msocdn.com'},
	{domain:'signup.live.com'},
	{domain:'crl.identrust.com'},
	{domain:'loginex.microsoftonline.com'},
	{domain:'support.content.office.net'},
	{domain:'view.atdmt.com'},
	{domain:'login-us.microsoftonline.com'},
	{domain:'support.microsoft.com'},
	{domain:'crl3.digicert.com'},
	{domain:'nexus.microsoftonline-p.com'},
	{domain:'weather.tile.appex.bing.com'},
	{domain:'crl4.digicert.com'},
	{domain:'passwordreset.microsoftonline.com'},
	{domain:'technet.microsoft.com'},
	{domain:'evintl-aia.verisign.com'},
	{domain:'provisioningapi.microsoftonline.com'},
	{domain:'templates.office.com'},
	{domain:'evintl-crl.verisign.com'},
	{domain:'videocontent.osi.office.net'},
	{domain:'evintl-ocsp.verisign.com'},
	{domain:'evsecure-aia.verisign.com'},
	{domain:'evsecure-crl.verisign.com'},
	{domain:'evsecure-ocsp.verisign.com'},
	{domain:'isrg.trustid.ocsp.identrust.com'},
	{domain:'mscrl.microsoft.com'},
	{domain:'ocsp.digicert.com'},
	{domain:'ocsp.entrust.net'},
	{domain:'ocsp.globalsign.com'},
	{domain:'ocsp.int-x3.letsencrypt.org'},
	{domain:'ocsp.msocsp.com'},
	{domain:'ocsp.omniroot.com'},
	{domain:'ocsp2.globalsign.com'},
	{domain:'ocspx.digicert.com'},
	{domain:'s1.symcb.com'},
	{domain:'s2.symcb.com'},
	{domain:'sa.symcb.com'},
	{domain:'sd.symcb.com'},
	{domain:'secure.globalsign.com'},
	{domain:'sr.symcb.com'},
	{domain:'sr.symcd.com'},
	{domain:'su.symcb.com'},
	{domain:'su.symcd.com'},
	{domain:'vassg142.crl.omniroot.com'},
	{domain:'vassg142.ocsp.omniroot.com'},
	{domain:'www.digicert.com'},
	{domain:'www.microsoft.com'},
];

var Site_878_IP = [
	{ip:'10.96.0.0', mask:'255.255.240.0'},
	{ip:'10.97.128.0', mask:'255.255.240.0'},
	{ip:'10.97.144.0', mask:'255.255.240.0'},
	{ip:'10.98.120.0', mask:'255.255.252.0'},
	{ip:'10.98.128.0', mask:'255.255.248.0'},
	{ip:'10.100.144.0', mask:'255.255.254.0'},
	{ip:'10.108.148.0', mask:'255.255.254.0'},
	{ip:'10.109.0.0', mask:'255.255.240.0'},
	{ip:'10.109.192.0', mask:'255.255.224.0'},
	{ip:'10.111.160.0', mask:'255.255.240.0'},
	{ip:'10.124.48.0', mask:'255.255.240.0'},
	{ip:'10.126.224.0', mask:'255.255.240.0'},
	{ip:'10.127.48.0', mask:'255.255.240.0'},
	{ip:'10.178.148.0', mask:'255.255.252.0'},
	{ip:'10.178.155.0', mask:'255.255.255.0'},
	{ip:'10.178.156.0', mask:'255.255.255.0'},
	{ip:'10.178.157.0', mask:'255.255.255.0'},
	{ip:'10.178.166.0', mask:'255.255.255.0'},
	{ip:'10.178.176.0', mask:'255.255.240.0'},
	{ip:'10.178.189.0', mask:'255.255.255.0'},
];

var Zscaler_878_FQDN = [
	{domain:'webdx.adient.com'},
	{domain:'ag.adient.com'},
	{domain:'agsm.adient.com'},
	{domain:'agsm.ga.adient.com'},
	{domain:'bpm.adient.com'},
	{domain:'sts.ga.adient.com'},
	{domain:'ecountjq.saic-gm.com'},
];

var MustGoZscaler_FQDN = [
	{domain:'www.yanfengco.com'},
	{domain:'www.yanfeng.com'},
	{domain:'sqwechat.yanfengco.com'},
	{domain:'sqfiles.yanfengco.com'},
	{domain:'sqadmin.yanfengco.com'},
	{domain:'cn001.yfai.com'},
	{domain:'brand-center.yfai.com'},
	{domain:'www.yfai.com'},
	{domain:'www.iaa2015.yfai.com'},
	{domain:'www.iaa2015-training.yfai.com'},
	{domain:'www.iaa2015-products.yfai.com'},
	{domain:'iaa2015.yfai.com'},
	{domain:'iaa2015-training.yfai.com'},
	{domain:'iaa2015-products.yfai.com'},
	{domain:'iaa2015-media.yfai.com'},
	{domain:'www.iaa2015-media.yfai.com'},
	{domain:'ex-proxy.yfai.com'},
	{domain:'yfaiqyh.yfai.com'},
	{domain:'yfaifile.yfai.com'},
	{domain:'yfaiadmin.yfai.com'},
	{domain:'yfcoexchange.yfai.com'},
	{domain:'qvaryfgldb01.yfai.com'},
	{domain:'qvaryfgldb02.yfai.com'},
	{domain:'qvaryfgldb03.yfai.com'},
	{domain:'vpnap.yfai.com'},
	{domain:'vpnna.yfai.com'},
	{domain:'vpnemea.yfai.com'},
	{domain:'supply-sgm.yfai.com'},
	{domain:'careers.yfai.com'},
	{domain:'oftp2-yfai-cla.factoryworkx.com'},
	{domain:'oftp2-yfai-exp.factoryworkx.com'},
	{domain:'analyticsprod.yfai.com'},
	{domain:'analyticsdev.yfai.com'},
	{domain:'evdi-plm.yfai.com'},
	{domain:'chinahelpline.yfai.com'},
];

var MustDirect_FQDN = [
	{domain:'.yfco.com'},
	{domain:'.yanfengco.com'},
	{domain:'.yfai.com'},
	{domain:'.yf.sh.cn'},
	{domain:'.saicomotor.com'},
	{domain:'.saicportal.com'},
	{domain:'imanweb1.eur.corp.gm.com'},
	{domain:'tcss.eur.corp.gm.com'},
	{domain:'db7072-scan.eur.corp.gm.com'},
	{domain:'db70-vip.eur.corp.gm.com'},
	{domain:'db71-vip.eur.corp.gm.com'},
	{domain:'db72-vip.eur.corp.gm.com'},
	{domain:'fmsvol1.eur.corp.gm.com'},
	{domain:'fmsvol2.eur.corp.gm.com'},
	{domain:'deruhtcavpias12.eur.corp.gm.com'},
	{domain:'deruhtcavpias13.eur.corp.gm.com'},
	{domain:'dbdr7071-scan.eur.corp.gm.com'},
	{domain:'dbdr70-vip.eur.corp.gm.com'},
	{domain:'dbdr71-vip.eur.corp.gm.com'},
	{domain:'tc-pgcs.naeng.gm.com'},
	{domain:'wrnpc034.edc.nam.gm.com'},
	{domain:'mpgpc018.edc.nam.gm.com'},
	{domain:'plm.adient.com'},
	{domain:'ts-home.stnd.toyota.co.jp'},
	{domain:'warpsi.toyota.co.jp'},
	{domain:'www.u-diex.jp'},
	{domain:'www.at.toyota.co.jp'},
	{domain:'doc-atsp.kitora.toyota.co.jp'},
	{domain:'tdl3.mx.toyota.co.jp'},
	{domain:'impact.jnx.honda.co.jp'},
	{domain:'www.jnx.amigo-edi.com'},
	{domain:'yfmro.yf.sh.cn'},
	{domain:'support.yfai-2320.com'},
	{domain:'.jlrint.com'},
	{domain:'oftp2-yfai-cla.factoryworkx.com'},
	{domain:'oftp2-yfai-exp.factoryworkx.com'},
	{domain:'yfai-connects.com'},
	{domain:'vpn.yf-usa.com'},
	{domain:'connect.kiefel.de'},
	{domain:'tcss.naeng.gm.com'},
	{domain:'secure7.telenium.net'},
	{domain:'secure8.telenium.ca'},
	{domain:'secure.telpay.ca'},
	{domain:'secure.telenium.ca'},
	{domain:'secure2.telenium.net'},
	{domain:'secure.telenium.net'},
	{domain:'v.magidglove.info'},
	{domain:'7r7fe.x.incapdns.net'},
	{ip:'45.60.153.28', mask:'255.255.255.255'},
	{ip:'195.56.148.76', mask:'255.255.255.255'},
	{ip:'64.78.189.81', mask:'255.255.255.255'},
	{ip:'64.78.189.34', mask:'255.255.255.255'},
	{ip:'64.78.189.35', mask:'255.255.255.255'},
	{ip:'64.78.189.70', mask:'255.255.255.255'},
	{ip:'136.1.24.200', mask:'255.255.255.255'},
	{ip:'136.1.28.200', mask:'255.255.255.255'},
	{ip:'159.222.52.0', mask:'255.255.252.0'},
	{ip:'64.141.32.33', mask:'255.255.255.255'},
	{ip:'159.222.56.0', mask:'255.255.252.0'},
];
 
function FindProxyForURL(url, host) {
	
	// ** VARIABLE DECLARATION STARTS *
	var privateIP = /^(0|10|127|192.168|172.1[6-9]|172.2[0-9]|172.3[01]|169.254)\.[0-9.]+$/;
	var internalPublicIP =  /^(159.222.5[23456789]|198.36.101|198.36.96|192.88.99).[0-9.]+$/;
	var resolved_ip = dnsResolve(host);
	var TestFQDN = 'sts.yfai.com';
	var IPofFQDN = '180.166.112.46';
	var ResultIP = dnsResolve(TestFQDN);
	// Proxy server definition
	var Zscaler_HK_CN_NAT = '10.196.58.10:10792';
	var Zscaler_SH_CN = 'sha1.sme.zscalertwo.net:10792';
	var Zscaler_BJ_CN = 'bjs1.sme.zscalertwo.net:10792';
	var Sangfor_SH_CN_YFAS = '172.27.116.50:8080';
	for (i in Site_878_IP) {
		if (isInNet(myIpAddress(), Site_878_IP[i].ip, Site_878_IP[i].mask)) {
			var TargetProxy1 = Sangfor_SH_CN_YFAS;
			var TargetProxy2 = Zscaler_SH_CN;
			break;
		}
		else {
		var TargetProxy1 = Zscaler_SH_CN;
		var TargetProxy2 = Zscaler_BJ_CN;
		}
	}
	// ** VARIABLE DECLEARATION ENDS **
	
	// ** PROXY FUNCTIONS START **
	// If TestFQDN resolves to IPofFQDN, the user is external, else internal
	if (ResultIP == IPofFQDN) 
		return 'DIRECT';

	// Don't send non-FQDN or private IP or internal public IP auths to proxy servers
	if (isPlainHostName(host) || privateIP.test(resolved_ip) || privateIP.test(host) || internalPublicIP.test(resolved_ip)|| internalPublicIP.test(host)) {
		return 'DIRECT';
	}
	
	// PAC servers and Zscaler updates are directly accessible
	if (((localHostOrDomainIs(host, 'trust.zscaler.com')) ||
		(localHostOrDomainIs(host, 'trust.zscaler.net')) ||
		(localHostOrDomainIs(host, 'trust.zscalerone.net')) ||
		(localHostOrDomainIs(host, 'trust.zscalertwo.net')) ||
		(localHostOrDomainIs(host, 'trust.zscloud.net')) ||
		(localHostOrDomainIs(host, 'pac.zscalertwo.net')) ||
		(localHostOrDomainIs(host, 'raw.githubusercontent.com')) ) &&
		(url.substring(0,5) == 'http:' || url.substring(0,6) == 'https:')){
		return 'DIRECT';
	}
	
	// Send oversea applications' domain names to Zscaler HK nodes for China users
	if (Config.GoHK_CN) {
		for (i in HK_FQDN) {
			if (shExpMatch(host, HK_FQDN[i].domain)) {
				return 'PROXY '+Zscaler_HK_CN_NAT+'; '+'PROXY '+TargetProxy1+'; '+'DIRECT';
			}
		}
	}
	
	// For YFAS 878 and its downstream sites, send special FQDNs through Zscaler instead of Sangfor
	if (Config.Zscaler_878) {
		for (i in Site_878_IP) {
			if (isInNet(myIpAddress(), Site_878_IP[i].ip, Site_878_IP[i].mask)) {
				for (j in Zscaler_878_FQDN) {
					if (shExpMatch(host, Zscaler_878_FQDN[j].domain)) {
						return 'PROXY '+Zscaler_SH_CN+'; '+'PROXY '+Zscaler_BJ_CN+'; '+'DIRECT';
					}
				}
			}
		}
	}
	
    // Send these domains through proxy
	if (Config.MustGoZscaler) {
		for (i in MustGoZscaler_FQDN) {
			if (shExpMatch(host, MustGoZscaler_FQDN[i].domain)) {
				return 'PROXY '+TargetProxy1+'; '+'PROXY '+TargetProxy2+'; '+'DIRECT';
			}
		}
	}
	
	// Internal FQDNs are directly accessible
	if (Config.MustDirect) {
		for (i in MustDirect_FQDN) {
			if (shExpMatch(host, MustDirect_FQDN[i].domain)) {
				return 'DIRECT';
			}
			if (isInNet(dnsResolve(host), MustDirect_FQDN[i].ip, MustDirect_FQDN[i].mask)) {
				return 'DIRECT';
			}
		}
	}
	
	// Default traffic forwarding. Forwarding to the targeted proxy servers
	return 'PROXY '+TargetProxy1+'; '+'PROXY '+TargetProxy2+'; '+'DIRECT';
	// ** PROXY FUNCTIONS END **
}
			
