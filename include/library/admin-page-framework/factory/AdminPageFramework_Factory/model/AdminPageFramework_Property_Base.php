<?php
/**
 Admin Page Framework v3.5.4b05 by Michael Uno
 Generated by PHP Class Files Script Generator <https://github.com/michaeluno/PHP-Class-Files-Script-Generator>
 <http://en.michaeluno.jp/admin-page-framework>
 Copyright (c) 2013-2015, Michael Uno; Licensed under MIT <http://opensource.org/licenses/MIT>
 */
abstract class WPGitHubButtons_AdminPageFramework_Property_Base {
    private static $_aStructure_CallerInfo = array('sPath' => null, 'sType' => null, 'sName' => null, 'sURI' => null, 'sVersion' => null, 'sThemeURI' => null, 'sScriptURI' => null, 'sAuthorURI' => null, 'sAuthor' => null, 'sDescription' => null,);
    static public $_aLibraryData;
    public $_sPropertyType = '';
    protected $oCaller;
    public $sCallerPath;
    public $sClassName;
    public $sClassHash;
    public $sScript = '';
    public $sStyle = '';
    public $sStyleIE = '';
    public $aFieldTypeDefinitions = array();
    public static $_sDefaultScript = "";
    public static $_sDefaultStyle = "";
    public static $_sDefaultStyleIE = '';
    public $aEnqueuingScripts = array();
    public $aEnqueuingStyles = array();
    public $aResourceAttributes = array();
    public $iEnqueuedScriptIndex = 0;
    public $iEnqueuedStyleIndex = 0;
    public $bIsAdmin;
    public $bIsMinifiedVersion;
    public $sCapability;
    public $sFieldsType;
    public $sTextDomain;
    public $sPageNow;
    public $_bSetupLoaded;
    public $bIsAdminAjax;
    public $aFieldCallbacks = array('hfID' => null, 'hfTagID' => null, 'hfName' => null, 'hfNameFlat' => null, 'hfClass' => null,);
    public $oUtil;
    public function __construct($oCaller, $sCallerPath, $sClassName, $sCapability, $sTextDomain, $sFieldsType) {
        $this->oUtil = new WPGitHubButtons_AdminPageFramework_WPUtility;
        $this->oCaller = $oCaller;
        $this->sCallerPath = $this->oUtil->getAOrB($sCallerPath, $sCallerPath, null);
        $this->sClassName = $sClassName;
        $this->sClassHash = md5($sClassName);
        $this->sCapability = $this->oUtil->getAOrB(empty($sCapability), 'manage_options', $sCapability);
        $this->sTextDomain = $this->oUtil->getAOrB(empty($sTextDomain), 'admin-page-framework', $sTextDomain);
        $this->sFieldsType = $sFieldsType;
        $GLOBALS['aWPGitHubButtons_AdminPageFramework'] = isset($GLOBALS['aWPGitHubButtons_AdminPageFramework']) && is_array($GLOBALS['aWPGitHubButtons_AdminPageFramework']) ? $GLOBALS['aWPGitHubButtons_AdminPageFramework'] : array('aFieldFlags' => array());
        $this->sPageNow = $this->oUtil->getPageNow();
        $this->bIsAdmin = is_admin();
        $this->bIsAdminAjax = in_array($this->sPageNow, array('admin-ajax.php'));
    }
    public function _getCallerObject() {
        return $this->oCaller;
    }
    static public function _setLibraryData() {
        self::$_aLibraryData = array('sName' => WPGitHubButtons_AdminPageFramework_Registry::NAME, 'sURI' => WPGitHubButtons_AdminPageFramework_Registry::URI, 'sScriptName' => WPGitHubButtons_AdminPageFramework_Registry::NAME, 'sLibraryName' => WPGitHubButtons_AdminPageFramework_Registry::NAME, 'sLibraryURI' => WPGitHubButtons_AdminPageFramework_Registry::URI, 'sPluginName' => '', 'sPluginURI' => '', 'sThemeName' => '', 'sThemeURI' => '', 'sVersion' => WPGitHubButtons_AdminPageFramework_Registry::getVersion(), 'sDescription' => WPGitHubButtons_AdminPageFramework_Registry::DESCRIPTION, 'sAuthor' => WPGitHubButtons_AdminPageFramework_Registry::AUTHOR, 'sAuthorURI' => WPGitHubButtons_AdminPageFramework_Registry::AUTHOR_URI, 'sTextDomain' => WPGitHubButtons_AdminPageFramework_Registry::TEXT_DOMAIN, 'sDomainPath' => WPGitHubButtons_AdminPageFramework_Registry::TEXT_DOMAIN_PATH, 'sNetwork' => '', '_sitewide' => '',);
        return self::$_aLibraryData;
    }
    static public function _getLibraryData() {
        return isset(self::$_aLibraryData) ? self::$_aLibraryData : self::_setLibraryData();
    }
    protected function getCallerInfo($sCallerPath = null) {
        $_aCallerInfo = self::$_aStructure_CallerInfo;
        $_aCallerInfo['sPath'] = $sCallerPath;
        $_aCallerInfo['sType'] = $this->_getCallerType($_aCallerInfo['sPath']);
        if ('unknown' == $_aCallerInfo['sType']) {
            return $_aCallerInfo;
        }
        if ('plugin' == $_aCallerInfo['sType']) {
            return $this->oUtil->getScriptData($_aCallerInfo['sPath'], $_aCallerInfo['sType']) + $_aCallerInfo;
        }
        if ('theme' == $_aCallerInfo['sType']) {
            $_oTheme = wp_get_theme();
            return array('sName' => $_oTheme->Name, 'sVersion' => $_oTheme->Version, 'sThemeURI' => $_oTheme->get('ThemeURI'), 'sURI' => $_oTheme->get('ThemeURI'), 'sAuthorURI' => $_oTheme->get('AuthorURI'), 'sAuthor' => $_oTheme->get('Author'),) + $_aCallerInfo;
        }
        return array();
    }
    protected function _getCallerType($sScriptPath) {
        if (preg_match('/[\/\\\\]themes[\/\\\\]/', $sScriptPath, $m)) {
            return 'theme';
        }
        if (preg_match('/[\/\\\\]plugins[\/\\\\]/', $sScriptPath, $m)) {
            return 'plugin';
        }
        return 'unknown';
    }
    protected function _getOptions() {
        return array();
    }
    protected function _getLastInput() {
        $_sKey = 'apf_tfd' . md5('temporary_form_data_' . $this->sClassName . get_current_user_id());
        $_vValue = $this->oUtil->getTransient($_sKey);
        $this->oUtil->deleteTransient($_sKey);
        if (is_array($_vValue)) {
            return $_vValue;
        }
        return array();
    }
    public function __get($sName) {
        if ('aScriptInfo' === $sName) {
            $this->sCallerPath = $this->sCallerPath ? $this->sCallerPath : WPGitHubButtons_AdminPageFramework_Utility::getCallerScriptPath(__FILE__);
            $this->aScriptInfo = $this->getCallerInfo($this->sCallerPath);
            return $this->aScriptInfo;
        }
        if ('aOptions' === $sName) {
            $this->aOptions = $this->_getOptions();
            return $this->aOptions;
        }
        if ('aLastInput' === $sName) {
            $this->aLastInput = $this->_getLastInput();
            return $this->aLastInput;
        }
    }
}