<?php

namespace Laravel\Nova\Testing\Browser\Pages;

use Laravel\Dusk\Browser;
use Laravel\Nova\Nova;

class Update extends Page
{
    use HasSearchableRelations;

    public $resourceName;
    public $resourceId;

    /**
     * Create a new page instance.
     *
     * @param  string  $resourceName
     * @param  int  $resourceId
     * @return void
     */
    public function __construct($resourceName, $resourceId)
    {
        $this->resourceId = $resourceId;
        $this->resourceName = $resourceName;
    }

    /**
     * Get the URL for the page.
     *
     * @return string
     */
    public function url()
    {
        return Nova::path().'/resources/'.$this->resourceName.'/'.$this->resourceId.'/edit';
    }

    /**
     * Run the inline create relation.
     */
    public function runInlineCreate(Browser $browser, $uriKey, callable $fieldCallback)
    {
        $browser->click("@{$uriKey}-inline-create")->pause(500);

        $browser->elsewhere('.modal', function ($browser) use ($fieldCallback) {
            $fieldCallback($browser);

            $browser->create()->pause(250);
        });
    }

    /**
     * Click the update button.
     */
    public function update(Browser $browser)
    {
        $browser->click('@update-button')->pause(500);
    }

    /**
     * Click the update and continue editing button.
     */
    public function updateAndContinueEditing(Browser $browser)
    {
        $browser->click('@update-and-continue-editing-button')->pause(500);
    }

    /**
     * Assert that the browser is on the page.
     *
     * @param  Browser  $browser
     * @return void
     */
    public function assert(Browser $browser)
    {
        $browser->pause(500);
    }

    /**
     * Get the element shortcuts for the page.
     *
     * @return array
     */
    public function elements()
    {
        return [];
    }
}
