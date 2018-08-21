##usersテーブル

|Column|Try|Options|
|-----|---|-------|
|name|string|null: false, index: true|
|email|string|null: false, unique: true|
|password|string|null: false|

###Asociation
- has_many :messages
- has_many :members
- has_many :groups, through: :members

##groupsテーブル

|Column|Try|Options|
|-----|---|-------|
|name|string|null: false|

###Asociation
- has_many :messages
- has_many :members
- has_many :users, through: :members

##messagesテーブル

|Column|Try|Options|
|-----|---|-------|
|body|text|
|image|string|
|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|

###Asociation
- belongs_to :user
- belongs_to :group

##membersテーブル

|Column|Try|Options|
|-----|---|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

###Associstion
- belongs_to :group
- belongs_to :user



