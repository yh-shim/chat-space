json.text       @chat.text
json.image      @chat.image
json.name       @chat.user.name
json.created_at @chat.created_at.strftime("%Y/%m/%d %H:%M")

json.user_id    @chat.user.id
