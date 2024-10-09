*** Settings ***
Library         SeleniumLibrary
Resource        ../keywords/RegisterPageKeywords.robot
Variables       ../resources/config/config.yaml
Variables       ../resources/testdata/testdata.yaml
Suite Setup        Open Browser    ${baseUrl}    chrome
Suite Teardown     Close Browser


*** Test Cases ***
Register with valid data
    When user register to future skill platform with ${email}, ${firstName}, ${lastName}, ${phoneNumber}, ${password} and ${confirmPassword}
    Then future skill should display validate register message as "ระบบได้ส่งรหัส OTP ไปยังเบอร์โทรศัพท์"
