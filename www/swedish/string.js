﻿
var str_index1="Anmärkning:";
var str_index2="Observera att det är logga metoder, för IE webbläsare, vänligen välj ActiveX-läge, för Safari, Firefox, Google Chrome, välj läget Server Push, för mobiltelefon, välj det tredje läget.";



//var str_led_mode='Signallampor kontrollerar';
var str_ir='Infrarött ljus kontroll';
var str_cate_1 = 'grundläggande information om enheten';
var str_cate_2 = 'utrustning, ljud och video konfiguration';
var str_cate_3 = 'Spara inställningar';
var str_cate_4 = 'enhet nätverkskonfiguration';
var str_cate_5 = 'PTZ-konfiguration';
var str_cate_6 = 'Enhetshanteraren';
var str_cate_7 = 'underhåll';
var str_alarm_x_1 = 'larm utlösande händelse';
var str_alarm_x_2 = 'alarm beväpna tid';
var str_alarm_x_rec = 'larm video';
var str_alarm_x_anap = 'larm capture';
var str_weihu = 'underhåll';
var str_rec_x_1 = 'videofil mode';
var str_rec_x_2 = 'timingen';
var str_rec_x_3 = 'fast längd';
var str_rec_x_4 = 'Videons längd';
var str_rec_x_5 = '(Om det är tid, om den fasta längden, sade längd)';
var str_for_ie_h264 = 'livestreamläge(for IE)';
var str_for_others_jpeg = 'videostreamläge(for FireFox)';
var str_for_mobile_h264 = 'snapshotläge (for smartphone)';
var str_Saturation = 'mättnad';
var str_Chroma = 'kroma';
var str_video_x= 'ljud och video';
//var str_video_option='<option value=1>主码流(有音频)</option><option value=2>主码流(无音频)</option><option value=3>子码流(有音频)</option><option value=4>子码流(无音频)</option>';
var str_video_option='<option value=1>Ljud och video</option><option value=2>video</option>';
var str_la = 'Språk';
var str_Ptz_leftUpText='övre vänstra';
var str_Ptz_leftDownText='nedre vänstra';
var str_Ptz_rightUpText='övre högra';
var str_Ptz_rightDownText='nere till höger';
var str_valid_ip = 'Ange korrekt IP-adress';
var str_valid_ip1 = 'Var god ange rätt nätmask';
var str_valid_ip2 = 'Var god ange rätt gateway';
var str_valid_ip3 = 'Vänligen ange korrekt DNS1';
var str_valid_ip4 = 'Vänligen ange korrekt DNS2';
var str_speed_xh='marschfart';
var str_here = "här"
var str_user_111 = "besökare";
var str_user_222 = "operatör";
var str_user_333 = "administrator";
var str_ptz_speed_1 = "långsam";
var str_ptz_speed_2 = "medelhastighet";
var str_ptz_speed_3 = "snabb";
var str_user_x1 = "administratörskonto användarnamn måste fyllas";
var str_user_x2 = "användarnamn får inte vara samma";
var str_log_clr = "clear";
var str_wps = "Wi-Fi Protected Setup (WPS)";
var str_wps_1 = "inaktiverad";
var str_ddns_service_list_new="<option value=0>no</option><option value=2>DynDns.org(dyndns)</option><option value=8>3322.org(dyndns)</option><option value=10>9299.org</option><option value=17>NO-IP</option>"; 
var str_wps_status = "Wi-Fi Protected Setup (WPS) staten";
var str_wps_msg0 = "inga åtgärder";
var str_wps_msg1 = "WPS misslyckades";
var str_wps_msg2 = "WPS framgång";
var str_wps_msg3 = "WPS överlappar upptäckt";
var str_wps_msg4 = "wps bearbetning";
var str_wps_msg5 = "okänt tillstånd";
var str_wifi_mode_x = "Wireless Point to Point läge";
var str_wifi_mode_x_1 = "på väg in den trådlösa punkt till punkt-läge, se";
var str_wifi_mode_x_2 = "Trådlöst läge";
var str_wifi_mode_msg0 = "Wireless Point to Point läge";
var str_wifi_mode_msg1 = "IIPCAM läge";
var str_wifi_mode_list_x='<option value=0> wifi peer-to-peer-läge </ option> </ option>';
var str_9299_chat_err="9299 misslyckande: fick inte rätt server response";
var str_recpath_sel="Välj...";
var str_alarm_Sensibility="Ju mindre värdet på mer känslig";
var str_mail_sel_ser="<option value='' valts> Välj </ option>";
var str_not_null="kan inte vara tom";
var str_port_range="portintervallet (1 till 65535)";
var str_ftp_upimg_time="Töm eller 0 anger att från tid till annan att ladda upp bilder";
var str_mail_reviver_null="Åtminstone en mottagare";
var str_media_main_1="main stream";
var str_media_sub_1="Sub Stream";
var str_fac_dns="device domän";
var str_ptz_run_1="<option value='0' valts> förbudet </ option>";
var str_ocx_down="plug-in nedladdning";
var str_refresh='Refresh';


var str_wireless_single="signalstyrka";
var str_pt_run_always = "obegränsad";
var str_osd_option__a='<option value=0> förbudet </ option> den <option value=1> aktivera </ option>';


var str_sun='Sön';
var str_mon='Mån';
var str_tue='Tis';
var str_wed='Ons';
var str_thu='Tor';
var str_fri='Fre';
var str_sat='Lör';
var str_day='Dag';
var str_schedule='Schemaläggare';
var str_url_record_file='Online video-uppspelning SD-kort(För IE)';
var str_rebootinfo='Enheten startar om. Bryt inte strömförsörjningen. Vänligen vänta ...';
var str_refreshcameraparams='Uppdatera kameraparametrar';
var str_refreshvideo='Uppdatera video';
var str_alarmstatus='Larmstatus';
var str_motion_alarm='Rörelselarm';
var str_input_alarm='Ingångslarm';
var str_livevideo='Live Video';
var str_devicemanagement='Enhetshantering';
var str_ie_protected_mode_info='Inspelningsfunktionen kan inte startas p.g.a att IE Skyddsläge (IE Protected Mode) är på. Du kan lägga till denna sida till tillförlitliga webbplatser för att lösa problemet.';
var str_buffer='Ljudbuffer';
var str_osd_option='<option>Avstängd</option><option>Svart</option><option>Gul</option><option>Röd</option><option>Vit</option><option>Blå</option>';
var str_reversal='Återtagande';
var str_mirror='Spegel';
var str_anonymous='Ej namngiven';
var str_mode_activex='ActiveX läge (För Internet Explorer)';
var str_mode_serverpush='Server Push läge (För FireFox, Safari, Google Browser etc.)';
var str_ipcam_title='ansluta till nätverket kamerans'; 
var str_ipcam_user='Användarnamn';
var str_ipcam_pwd='Lösenord';
var str_ipcam_til='Spara lösenord (R)';
var str_ipcam_ok='bekräftat';
var str_ipcam_no='Avbryt';
var str_user='Användarnamn';
var str_pwd='Lösenord';
var str_signin='Logga in';
var str_attention='Observera:';
var str_attention1='Versalkänslig';
var str_attention2='Rekommenderad upplösning är 1024x768 pixlar eller högre.';
var str_devicestatus='Enhetsinformation';
var str_4visitor='För besökare';
var str_4operator='För operatör';
var str_4administrator='För administratör';
var str_configdevice='Enhetskonfiguration';
var str_talk='Prata';
var str_audio='Ljud';
var str_video='Video';
var str_play='Spela';
var str_stop='Stoppa';
var str_snapshot='Ögonblicksbild';
var str_record='Spela in';
var str_alias='Alias';
var str_switch='Brytare';
var str_switchon='Brytare på';
var str_switchoff='Brytare av';
var str_open='Öppna';
var str_close='Stäng';
var str_resolution='Upplösning';
var str_mode='Läge';
var str_brightness='Ljus';
var str_contrast='Kontrast';
var str_outdoor='Utomhus';
var str_default='Återställ inställningar';
var str_unselected='Ej vald';
var str_device='Enhet';
var str_err_connect='Kan inte ansluta till enheten';
var str_err_socket='Socket fel';
var str_err_timeout='Timeout';
var str_err_version='Felaktig mjukvaruversion';
var str_err_cancel='Avbrutet av användare';
var str_err_closed='Frånkopplad av enheten';
var str_err_file='Filexekveringsfel';
var str_err_param='Ogiltiga parametrar';
var str_err_thread='Trådexekveringsfel';
var str_err_status='Ogiltig status';
var str_err_id='Felaktigt enhets ID';
var str_fail_user='Felaktig användare';
var str_fail_maxconns='Gränsen för maximalt antal användare har uppnåtts';
var str_fail_version='Felaktig mjukvaruversion';
var str_fail_id='Felaktigt enhets ID';
var str_fail_pwd='Felaktigt lösenord';
var str_fail_pri='Ej tillåten operation';
var str_fail_unsupport='Enheten stödjer inte denna funktion';
var str_err_unknown='Okänt fel';
var str_failtoconnect='Anslutning till enheten misslyckades';
var str_failtorecord='Inspelning misslyckades';
var str_failtoplayvideo='Videouppspelning misslyckades';
var str_failtoplayaudio='Ljuduppspelning misslyckades';
var str_failtostarttalk='Kommunikationsläget misslyckades';
var str_save='Spara';
var str_dev_info='Enhetsinformation';
var str_alias_config='Aliasinställningar';
var str_goback='Tillbaka';
var str_datetime_config='Datum och Tidsinställningar';
var str_users_config='Användarinställningar';
var str_multidevice_config='Multipla enheter';
var str_network_config='Grundläggande nätverksinställningar';
var str_dns_config='Domain Name Service-inställningar';
var str_dns_enable='domännamn för att börja';
var str_wireless_config='Trådlöst nätverk';
var str_adsl_config='ADSL';
var str_upnp_config='UPnP';
var str_ddns_config='DynDNS';
var str_mail_config='E-post';
var str_ftp_config='FTP';
var str_alarm_config='Larminställning';
var str_upgrade_firmware='Uppgradera enhetens mjukvara (Firmware)';
var str_restore_factory='Fabriksåterställning';
var str_reboot='Starta om enheten';
var str_dev_id='Enhets ID';
var str_sw_ver='Mjukvaruversion';
var str_aw_ver='Webbgränssnittets version';
var str_set='Bekräfta';
var str_upgrade='uppgradering';
var str_failtoset='Parameterinställning misslyckades';
var str_oktoset='Parameterinställning lyckades';
var str_oktoset_reboot='Parameterinställning lyckades. Enheten startar om.';
var str_failtoreboot='Omstart misslyckades';
var str_oktoreboot='Enheten startar om';
var str_failtorestore='Fabriksåterställning misslyckades';
var str_oktorestore='Fabriksåterställning lyckades. Enheten startar om';
var str_upgrade_swware='Uppgradera mjukvara (Firmware)';
var str_upgrade_awware='Uppgradera Webbgränssnittet (Web UI)';
var str_failtoupgrade='Uppgradering misslyckades';
var str_oktoupgrade='Uppgraderar... Bryt inte strömförsörjningen förens processen avslutats !!!';
var str_upgrading_progress='Uppgraderingsprocess';
var str_group='Grupp';
var str_pri_list='<option>Besökare</option><option>Operatörer</option><option>Administratörer</option>';
var str_visitor='Besökare';
var str_operator='Operatör';
var str_administrator='Administratör';
var str_refresh='Uppdatera';
var str_device_clock_time='Enhetens tid';
var str_failtofetch='Misslyckades att hämta parametrar';
var str_device_tz='Enhetens tidzon';
var str_ntp_choice='Synkronisera med NTP server';
var str_ntp_server='NTP Server';
var str_syncwithpc='Synkronisera med aktuell dators tid';
var str_dhcp_choice='Automatisk IP via DHCP';
var str_dns='domain';
var str_dns_port='domain port';
var str_dns_times='heartbeat paketintervall';
var str_ip='IP adress';
var str_mask='Subnätsmask';
var str_gateway='Gateway';
var str_dns='DNS Server';
var str_dns1='DNS-server';
var str_dns2='DNS-server';
var str_cmdport='kommandot port';
var str_dataport='medier hamnarnas';
var str_port='Http Port';
var str_cmd_port='kontroll port';
var str_data_port='media hamnarnas';
var str_rtsp_port='rtsp port';
var str_adsl_choice='Använd ADSL uppringning';
var str_rtsp_config='rtsp set';
var str_rtsp_choice='rtsp autentisering'
var str_rtsp_user='rtsp Användare';
var str_rtsp_pwd='rtsp Lösenord';
var str_adsl_user='ADSL Användare';
var str_adsl_pwd='ADSL Lösenord';
var str_mail_inet_ip='Rapportera Extern IP via E-post';
var str_upnp_choice='Använd UPnP för portmappning';
var str_upnp_status='UPnP Status';
var str_upnp_msg0='Ingen åtgärd';
var str_upnp_msg1='UPnP lyckades';
var str_upnp_msg2='UPnP misslyckades: Systemfel';
var str_upnp_msg3='UPnP misslyckades: Nätverkskomunikationsfel';
var str_upnp_msg4='UPnP misslyckades: Kommunikationsfel med UPnP enhet';
var str_upnp_msg5='UPnP misslyckades: Nekad av UPnP enhet. Kan bero på portkonflikt';
var str_sender='Avsändare';
var str_receiver='Mottagare';
var str_mailssl='SSL';
var str_smtp_svr='SMTP Server';
var str_smtp_auth='Kräver autentifikation';
var str_smtp_user='SMTP Användare';
var str_smtp_pwd='SMTP Lösenord';
var str_ftp_svr='FTP Server';
var str_ftp_port='FTP Port';
var str_ftp_user='FTP Användare';
var str_ftp_pwd='FTP Lösenord';
var str_ftp_dir='FTP Uppladdningsmapp';
var str_ftp_mode='FTP Läge';
var str_ftp_upload_enable='Ladda upp bild nu';
var str_ftp_upload_interval='Uppladdningsintervall (Sekunder)';
var str_motion_enable='Rörelselarm aktivt';
var str_motion_sensitivity='Känslighet för rörelselarm';
var str_high='Hög';
var str_medium='Medium';
var str_low='Låg';
var str_extern_enable='Larmingång aktiv';
var str_alarm_mail_enable='Skicka e-post vid larm';
var str_alarm_ftp_enable='Ladda upp bild vid larm';
var str_alarm_linkage_enable='Aktivera I/O vid larm';
var str_alarm_http_enable='larm, Http meddelande';
var str_alarm_http_url='http URL';
var str_ddns_service='DDNS Tjänst';
var str_ddns_user='DDNS Användare';
var str_ddns_pwd='DDNS Lösenord';
var str_ddns_host='DDNS Värd';
var str_proxy_svr='DDNS eller Proxyserver';
var str_proxy_port='DDNS eller Proxyport';
var str_ddns_mode='DDNS mode';
var str_dns_status='DNS" som';
var str_ddns_status='DDNS Status';
var str_restart_dyndns='Återuppdatering, bortser alla fel';
var str_restart_dyndns_comment='Använd inte detta ifall ditt värdnamn är blockerat!';
var str_dyndns_proxy_comment='OBS! Proxykonfiguration krävs ifall enheten är bakom brandvägg.';
var str_ddns_noaction='Ingen åtgärd';
var str_ddns_waiting='Ansluter ...';
var str_ddns_cannotconnect='Fel påträffades i nätverkskommunikationen';
var str_easynx_ok='EasyNX framgång';
var str_easynx_noauth='EasyNX misslyckande: har inte tillstånd';
var str_easynx_noid='EasyNX misslyckades: kontot finns inte';
var str_easynx_over='EasyNX misslyckande: Hänsyn har gått ut';
var str_easynx_iddisable='EasyNX misslyckande: Kontot är inaktivt';
var str_easynx_errparam='EasyNX misslyckades: parameter fel';
var str_easynx_unknownerr='EasyNX misslyckades: okänt fel';
var str_3322_ok='3322 framgång';
var str_3322_sys_err='3322 misslyckades: systemfel';
var str_3322_badauth = '3322 misslyckande: användaren eller lösenord är felaktigt';
var str_3322_donator='3322 misslyckades: icke-kredit användare';
var str_3322_notfqdn='3322 misslyckande: domännamnet formatet är felaktigt';
var str_3322_nohost='3322 misslyckande: Domain finns inte';
var str_3322_yours = '3322 misslyckades: domännamn inte tillhör dig';
var str_3322_numhost='3322 misslyckades: för mycket eller för lite av domännamnet begäran';
var str_3322_abuse='3322 misslyckande: domännamnet är blockerad på grund av missbruk';
var str_3322_server_err='3322 misslyckades: Server Error in';
var str_3322_chat_err='3322 misslyckades: fick inte rätt server svar';
var str_dyndns_ok='DynDns Lyckades';
var str_dyndns_sys_err='DynDns Misslyckades: Dyndns.org Systemfel';
var str_dyndns_badauth='DynDns Misslyckades: Fel användarnamn eller Lösenord';
var str_dyndns_donator='DynDns Misslyckades: Kräver krediterad användare';
var str_dyndns_notfqdn='DynDns Misslyckades: Ogilitigt värdnamn';
var str_dyndns_nohost='DynDns Misslyckades: Värdnamnet finns inte';
var str_dyndns_yours='DynDns Misslyckades: Värdnamnet tillhör inte er';
var str_dyndns_numhost='DynDns Misslyckades: För många eller för lite värdar';
var str_dyndns_abuse='DynDns Misslyckades: Värdnamnet är blockerat för felaktigt användande';
var str_dyndns_server_err='DynDns Misslyckades: Dyndns.org Serverfel';
var str_dyndns_chat_err='DynDns Misslyckades: Ogiltigt svar från server';
var str_oray_chat_err='Oray Misslyckades: Ogiltigt svar från server';
var str_oray_bad_auth='Oray Misslyckades: Fel användarnamn eller Lösenord';
var str_oray_bad_host='Oray Misslyckades: Ogilitigt värdnamn';
var str_oray_standard_ok='Oray(Standard) Lyckades';
var str_oray_professional_ok='Oray(Professional) Lyckades';
var str_ddns_ok='DDNS framgång';
var str_ddns_failed='DDNS misslyckades';
var str_yu_ddns_ok='Vidamax framgång';
var str_yu_ddns_failed='Vidamax misslyckades';
var str_9299_ok='9299 framgång';
var str_9299_er='Användaren har löpt ut';
var str_9299_da='inte aktiv';
var str_9299_sne='Användarinformation fel';
var str_9299_ne='en domän fel';
var str_smart_ok='registrering framgångsrika';
var str_smart_noauth='Kunde inte registrera';
var str_devicelist_inlan='Enhetslista i LAN';
var str_subnet_nomatch='Subnät matchar inte';
var str_1st_device='Kamera 1';
var str_2nd_device='Kamera 2';
var str_3rd_device='Kamera 3';
var str_4th_device='Kamera 4';
var str_5th_device='Kamera 5';
var str_6th_device='Kamera 6';
var str_7th_device='Kamera 7';
var str_8th_device='Kamera 8';
var str_9th_device='Kamera 9';
var str_none='Ingen';
var str_this_device='Denna enhet';
var str_host='Värd';
var str_add='Lägg till';
var str_remove='Ta bort';
var str_multidevice_attention='OBS! Om enheten ska kunna nås över Internet måste värdnamnet och porten som anges kunna nås utanför det lokala nätverket.';
var str_wifi_choice='Använd trådlöst nätverk';
var str_wifi_power='WIFImakt';
var str_wifi_encryption='Kryptering';
var str_wifi_wep_key_index='Stadard TX Nyckel';
var str_wifi_wep_key1='Nyckel 1';
var str_wifi_wep_key2='Nyckel 2';
var str_wifi_wep_key3='Nyckel 3';
var str_wifi_wep_key4='Nyckel 4';
var str_wifi_channel='Kanal';
var str_wifi_authtype='Autentifikation';
var str_auth_open='Öppet system';
var str_auth_share='Delad nyckel';
var str_wifi_keytype='Nyckelformat';
var str_hex='Hexadecimalt nummer';
var str_ascii='ASCII Tecken';
var str_sure_reboot='Är du säker på att du vill starta om enheten';
var str_sure_restore='Är du säker på att du vill återställa till fabriksinställningar';
var str_center='Center';
var str_vertical_patrol='Vertikal patrullering';
var str_horizon_patrol='Horisontal patrullering';
var str_stop_vertical_patrol='Avbryt verktikal patrullering';
var str_stop_horizon_patrol='Avbryt horisontal patrullering';
var str_start='Start';
var str_test='Test';
var str_succeed='Lyckades';
var str_failed='Misslyckades';
var str_ftp_error_connect='Kan inte ansluta till server';
var str_ftp_error_network='Nätverksfel. Vänligen försök igen senare';
var str_ftp_error_server='Serverfel';
var str_ftp_error_user='Felaktig användare eller lösenord';
var str_ftp_error_pwd='Felaktig användare eller lösenord';
var str_ftp_error_dir='Kan inte få tillgång till mappen. Verifiera att mappen existerar samt att kontot har rättigheter';
var str_ftp_error_pasv='Fel vid PASV läge. Verifiera att servern stödjer PASV läge';
var str_ftp_error_port='Fel vid PORT läge. PASV läge bör väljas ifall enheten är bakom en NAT brandvägg';
var str_ftp_error_stor='Kan inte ladda upp fil. Verifiera kontots rättigheter';
var str_smtp_error_connect='Kan inte ansluta till servern';
var str_smtp_error_network='Nätverksfel. Vänligen försök igen senare';
var str_smtp_error_server='Serverfel';
var str_smtp_error_user='Felaktig användare eller lösenord';
var str_smtp_error_pwd='Felaktig användare eller lösenord';
var str_smtp_error_sender='Avsändaren nekades av servern. Eventuell autentifikation kan krävas av servern. Kontrollera detta och försök sedan igen';
var str_smtp_error_receiver='Mottagaren nekades av servern. Kontrollera serverns Anti-SPAM policy';
var str_smtp_error_message='Meddelandet nekades av servern. Kontrollera serverns Anti-SPAM policy';
var str_smtp_error_auth='Servern stödjer inte autentifikationsläget specificerat för enheten';
var str_test_info='Vänligen bekräfta inställningarna innan test sker!';
var str_lowest='Lägsta';
var str_wifi_mode_list='<option>Accesspunkt</option><option>Peer to Peer</option>';
var str_smtp_port='SMTP Port';
var str_ddns_service_list='<option value=0>ingen</option><option value=2>DynDns.org(dyndns)</option><option value=3>DynDns.org(statdns)</option><option value=4>DynDns.org(custom)</option><option value=8>3322.org(dyndns)</option><option value=9>3322.org(statdns)</option><option value=10>9299.org</option>';
var str_ddns_service_list11='<option value=0>ingen</option><option value=2>DynDns.org(dyndns)</option><option value=3>DynDns.org(statdns)</option><option value=4>DynDns.org(custom)</option><option value=8>3322.org(dyndns)</option><option value=9>3322.org(statdns)</option><option value=10>9299.org</option>><option value=11>ipcam</option>';
var str_ddns_service_list12='<option value=0>ingen</option><option value=2>DynDns.org(dyndns)</option><option value=3>DynDns.org(statdns)</option><option value=4>DynDns.org(custom)</option><option value=8>3322.org(dyndns)</option><option value=9>3322.org(statdns)</option><option value=10>9299.org</option>><option value=12>ipcam</option>';
var str_ddns_service_list13='<option value=0>ingen</option><option value=2>DynDns.org(dyndns)</option><option value=3>DynDns.org(statdns)</option><option value=4>DynDns.org(custom)</option><option value=8>3322.org(dyndns)</option><option value=9>3322.org(statdns)</option><option value=10>9299.org</option>><option value=13>ipcam</option>';
var str_ddns_service_list14='<option value=0>ingen</option><option value=2>DynDns.org(dyndns)</option><option value=3>DynDns.org(statdns)</option><option value=4>DynDns.org(custom)</option><option value=8>3322.org(dyndns)</option><option value=9>3322.org(statdns)</option><option value=10>9299.org</option>><option value=14>ipcam</option>';
var str_yu_ddns_service_list = '<option value=0>ingen</option><option value=2>DynDns.org(dyndns)</option><option value=3>DynDns.org(statdns)</option><option value=4>DynDns.org(custom)</option><option value=8>3322.org(dyndns)</option><option value=9>3322.org(statdns)</option><option value=5>Jiangxi Telecom</option><option value=6>VidaMax</option><option value=7>EasyNX.cn</option>';
var str_psd_ddns_service_list='<option value=0>ingen</option><option value=7>IPCam</option><option value=2>DynDns.org(dyndns)</option><option value=3>DynDns.org(statdns)</option><option value=4>DynDns.org(custom)</option><option value=8>3322.org(dyndns)</option><option value=9>3322.org(statdns)</option>';
var str_tz_list='<option value=39600>(GMT -11:00) Midway Islands, Samoa Islands</option><option value=36000>(GMT -10:00) Hawaii</option><option value=32400>(GMT -09:00) Alaska Standard</option><option value=28800 selected="selected">(GMT -08:00) Pacific Standard(USA and Canada)</option><option value=25200>(GMT -07:00) Mountain Standard(USA and Canada)</option><option value=21600>(GMT -06:00) Central Standard(USA and Canada), Mexico City</option><option value=18000>(GMT -05:00) Eastern Standard(USA and Canada), Lima, Bogota</option><option value=14400>(GMT -04:00)Atlantic Standard (Canada), Santiago, La Paz</option><option value=12600>(GMT -03:30) Newfoundland</option><option value=10800>(GMT -03:00) Brasilia, Buenos Aires, Georgetown</option><option value=7200>(GMT -02:00) South Geogia I.</option><option value=3600>(GMT -01:00) Reykjavik</option><option value=0>(GMT) Greenwich mean time; London, Lisbon, Casablanca</option><option value=-3600>(GMT +01:00) Brussels, Paris, Berlin, Rome, Madrid, Stockholm, Beograd, Praha</option><option value=-7200>(GMT +02:00) Athens, Jerusalem, Cairo, Helsinki</option><option value=-10800>(GMT +03:00) Nairobi, Riyadh, Moscow</option><option value=-12600>(GMT +03:30) Tehran</option><option value=-14400>(GMT +04:00) Baku, Tbilisi, Abu Dhabi, Muscat</option><option value=-16200>(GMT +04:30) Kabul</option><option value=-18000>(GMT +05:00) Islamabad, Karachi, Tashkent</option><option value=-19800>(GMT +05:30) Bombay, Calcutta, Madras, New Delhi</option><option value=-21600>(GMT +06:00) Astana, Almaty, Dhaka, Colombo</option><option value=-25200>(GMT +07:00) Bangkok, Hanoi, Jakarta</option><option value=-28800>(GMT +08:00) Beijing, Singapore, Taipei</option><option value=-32400>(GMT +09:00) Seoul, Yakutsk, Tokyo</option><option value=-34200>(GMT +09:30) Darwin</option><option value=-36000>(GMT +10:00) Guam, Melbourne, Sydney, Port Moresby, Vladivostok</option><option value=-39600>(GMT +11:00) Magadan, Solomon Islands, New Calenonia</option><option value=-43200>(GMT +12:00) Auckland, Wellington, Fiji Islands</option>';
var str_decoder_config='Decoderinställningar';
var str_baud='Baudrate';
var str_fail_forbidden='Förbjudet';
var str_log='Logg';
var str_wifi_list='Lista över trådlösa nätverk';
var str_scan='Skanna';
var str_wifi_scan_info='Skannar ...';
var str_backup_restore='Inställning för backup och återställning';
var str_backup='Backup';
var str_restore='Återställ';
var str_wifi_networktype='Nätverkstyp';
var str_triger_level='Triggernivå';
var str_output_level='Utgångsnivå';
var str_zoom_plus='zoom+';
var str_zoom_minus='zoom-';
var str_ptz_config='PT Inställningar';
var str_autocenter='Gå till mitten vid uppstart';
var str_pt_preset='start anpassning förinställd position';
var str_pt_speed='PTZ';
var str_pt_run='cruising ring';
var str_up_speed='Patrullhastighet uppåt';
var str_down_speed='Patrullhastighet nedåt';
var str_left_speed='Patrullhastighet vänster';
var str_right_speed='Patrullhastighet höger';
var str_p2p_status='P2P Status';
var str_p2p_msg0='Ingen åtgärd';
var str_p2p_msg1='Kan inte ansluta till server';
var str_p2p_msg2='Ansluter ...';
var str_p2p_msg3='Frånkopplad p.g.a utlöpt tidsfrist';
var str_p2p_msg4='Lyckades på lokal port: ';
var str_specify_filename='ange filnamnet (innehåller inte jpg.)';
var str_specify_numberoffiles='ange filen för att spara det maximala antalet';
var str_mode_Mobile='Ingen Plug-In-läge (för Smartphone webbläsare - JPEG)';
var str_Ptz_UpText='på';
var str_Ptz_DownText='enligt';
var str_Ptz_LeftText='vänster';
var str_Ptz_RightText='höger';
var str_Ptz_StopText='centrum';
var str_Ptz_FastText='fast';
var str_Ptz_SlowText='slow';
var str_PresetTitle='förinställd';
var str_CallPreset='samtal';
var str_SetPreset='Ställ in';
var str_forbidden_config='förbjudet att visa ljud och video inställningar';
var str_BrowseBtn = 'Bläddra ...';
var str_media_config='Media Configuration';
var str_media_size='Media Storlek';
var str_media_framerate='frame rate';
var str_media_keyframe='nyckelbildruta';
var str_media_quant='kvalitet';
var str_media_ratemode='Bithastighet mode';
var str_media_bitrate='bit rate';
var str_inter_addr='intern IP-adress';
var str_sd_status='sd kapacitet';
var str_sd_status1='sd återstående kapacitet';
var str_sd_status2='sd "som';
var str_extern_addr='extern adress';
var str_MaxRate='frame rate';
var str_PresetGroup='kryssningar grupp';
var str_PresetGroup_Excute='run';
var str_PresetGroup_Cancel='Avbryt';
var str_PresetGroup_Tip="kryssningar gruppen script: \ n \ n, till exempel: \ n \ np1w5p2w10: ring det förinställda läget i 5 sekunder, och sedan ringa det förinställda läget i 10 sekunder, upprepa \ n \ n Obs: uppehållstid i sekunder, och måste vara större än fem sekunder. "
var str_motion_preset='larm när förinställd koppling';
var str_pz_atocenter='startar automatiskt när paret (inte inaktivera förinställning)';
var str_pz_dispreset='förbjudet förinställd position';
var str_outdoor_mode='Outdoor Mode';
var str_led_mode='indikator';
var str_close='off';
var str_mode_1='Mod 1';
var str_mode_2='mode 2';
var str_paramset='set';
var str_ocx_til='Du har inte installerat OCX kontrollen <br>kan du ladda ner OCX och installera';
var str_rtsp_stream='RTSP, ström (för H264 mediespelare)';
var str_select_all='Markera alla';


var str_reversal = 'bild inverterad';
var str_mirror = 'bild spegel';
var str_switchon = 'Öppna signalindikatorn';
var str_switchoff = 'Stäng signalindikatorn';
var str_record = 'video';
var str_snapshot = 'foto';
var str_talk = 'talkback';
var str_audio = 'headset';
var str_setup = 'Admin';


var str_record_sch='video plan';
var str_record_info='video information';
var str_record_filename='video filnamn';
var str_record_download='nedladdning';
var str_record_del='Ta bort';
var str_record_path='Lokal inspelning väg';
var str_record_info_fielist='En lista med videofiler';
var str_record_path_path='lokal videofiler lista';
var str_record_schdule='video plan';
var str_record_sd_status='sd "som';
var str_sd_exist='SD-kort har satts in';
var str_sd_no='sd-kortet är inte isatt';
var str_record_cover='video täckning';
var str_record_alarm_gpio='GPIO larm video';
var str_record_alarm_motion='mobil video';
var str_record_alarm_time='timed inspelning';
var str_record_stop='video startar inte';
var str_not_record='SD-kortet är inte isatt';
var str_recording='SD-kort är video';
var str_record_osd='Datumstämpling';

var str_sd_sdtotal="SD kort kapacitet(M)";
var str_sd_sdfree="SD kort återstående kapacitet(M)";
var str_rec_FileLen="Förpackade Videofilens storlek(MB)";
var str_rec_TimeLen="Video paketet längd(Minuter)";
var str_rec_reservedDiskSpace="Reservera utrymme(MB)";
var str_rec_Cover="Täcka videor";
var str_rec_FileLen_1=" Minsta100MB,Maximalt1000MB";
var str_rec_TimeLen_1=" Minsta5Minuter,Maximalt120Minuter";
var str_rec_reservedDiskSpace_1="Minsta200MB";
var str_rec_sch_time="Video längd(Minuter)";
var str_rec_sch_time_1="Lång rad video5~180Minuter";
var str_disk_1="Format";
var str_disk_2="SD-kort inte format";
var str_la = 'Språkversion';