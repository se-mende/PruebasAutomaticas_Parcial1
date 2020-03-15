require 'calabash-android/calabash_steps'
Then /^I touch the menu button$/ do
    tap_when_element_exists("* contentDescription:'More options'")
end