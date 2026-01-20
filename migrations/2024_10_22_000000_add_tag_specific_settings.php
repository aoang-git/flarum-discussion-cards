<?php

/*
 * This file is part of walsgit/discussion-cards
 *
 *  Copyright (c) 2024 Wa!id.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE file that was distributed with this source code.
 */

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        // Check if column already exists to avoid conflicts with walsgit/flarum-discussion-cards
        if (!$schema->hasColumn('tags', 'walsgit_discussion_cards_tag_settings')) {
            $schema->table('tags', function (Blueprint $table) use ($schema) {
                // Try to add after the default_image column if it exists, otherwise just add it
                if ($schema->hasColumn('tags', 'walsgit_discussion_cards_tag_default_image')) {
                    $table->text('walsgit_discussion_cards_tag_settings')->nullable()->after('walsgit_discussion_cards_tag_default_image');
                } else {
                    $table->text('walsgit_discussion_cards_tag_settings')->nullable();
                }
            });
        }
    },

    'down' => function (Builder $schema) {
        $schema->table('tags', function (Blueprint $table) use ($schema) {
            if ($schema->hasColumn('tags', 'walsgit_discussion_cards_tag_settings')) {
                $table->dropColumn('walsgit_discussion_cards_tag_settings');
            }
        });
    },
];