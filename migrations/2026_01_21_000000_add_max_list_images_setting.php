<?php

/*
 * This file is part of aoang-git/flarum-discussion-cards
 *
 *  Copyright (c) 2026 aoangen.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE file that was distributed with this source code.
 */

use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        /**
         * @var SettingsRepositoryInterface $settings
         */
        $settings = resolve(SettingsRepositoryInterface::class);

        // Add default value for maxListImages setting (default: 3)
        if ($settings->get('walsgit_discussion_cards_maxListImages') === null) {
            $settings->set('walsgit_discussion_cards_maxListImages', '3');
        }
    },

    'down' => function (Builder $schema) {
        /**
         * @var SettingsRepositoryInterface $settings
         */
        $settings = resolve(SettingsRepositoryInterface::class);

        // Remove the setting
        $settings->delete('walsgit_discussion_cards_maxListImages');
    },
];
