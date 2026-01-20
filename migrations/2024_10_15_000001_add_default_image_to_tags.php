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
        if (!$schema->hasColumn('tags', 'walsgit_discussion_cards_tag_default_image')) {
            $schema->table('tags', function (Blueprint $table) {
                $table->text('walsgit_discussion_cards_tag_default_image')->nullable();
            });
        }
    },

    'down' => function (Builder $schema) {
        $schema->table('tags', function (Blueprint $table) {
            if ($schema->hasColumn('tags', 'walsgit_discussion_cards_tag_default_image')) {
                $table->dropColumn('walsgit_discussion_cards_tag_default_image');
            }
        });
    },
];