# データベース設計

## groups_usersテーブル（中間テーブル）

|Column|Type|Options|
|------|----|-------|
|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

* * *

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :groups_users
- has_many :users, through: :groups_users
- has_many :chats

* * *

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, unique: true|

### Association
- has_many :groups_users
- has_many :groups, through: :groups_users
- has_many :chats

* * *

## chatsテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|string| |
|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

* * *

## インデックス設定
- add_index :users, :name