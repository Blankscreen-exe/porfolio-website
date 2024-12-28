from django.shortcuts import render
from django.http import JsonResponse
from django.urls import reverse
from django.core.serializers.json import DjangoJSONEncoder
from .models import Games, Resources, Blog

def home(request):
    context = {}
    context['list_db'] = [
        {
            "name": "Dev Resources List",
            "link": reverse("get-resources-json") 
        },
        {
            "name": "Games List",
            "link": reverse("get-games-json") 
        },
        {
            "name": "Blogs List",
            "link": reverse("get-blogs-json") 
        },
    ]
    return render(request, 'portfolio/index.html', context=context)

def get_games_json(request):
    games = Games.objects.filter(included=True).order_by('title')
    games_data = [
        {
            "id": ind+1,
            "title": game.title,
            "status": game.status,
            "recommendation": game.recommendation,
            "review": game.review,
            "studio": game.studio,
            "genre": game.genre,
        }
        for ind, game in enumerate(games)
    ]

    response = JsonResponse(games_data, safe=False, json_dumps_params={'indent': 4})
    response['Content-Disposition'] = f'attachment; filename="gamesList.json"'

    return response

def get_resources_json(request):
    resources = Resources.objects.filter(included=True).order_by('title')
    resources_data = [
        {
            "id": ind+1,
            "title": resource.title,
            "link": resource.link,
            "recommendation": resource.recommendation,
            "review": resource.review,
            "provider": resource.provider,
            "topics": resource.topics,
        }
        for ind, resource in enumerate(resources)
    ]

    response = JsonResponse(resources_data, safe=False, json_dumps_params={'indent': 4})
    response['Content-Disposition'] = f'attachment; filename="devResourceList.json"'

    return response

def get_blogs_json(request):
    blogs = Blog.objects.filter(included=True).order_by('title')
    resources_data = [
        {
            "id": ind+1,
            "title": blog.title,
            "description": blog.description,
            "tags": blog.tags,
            "mediumUrl": blog.medium_url,
            "hashnodeUrl": blog.hashnode_url,
            "publishDate": blog.get_publish_date,
            "thumbnailUrl": blog.thumbnail_url,
        }
        for ind, blog in enumerate(blogs)
    ]

    response = JsonResponse(resources_data, safe=False, json_dumps_params={'indent': 4})
    response['Content-Disposition'] = f'attachment; filename="blogList.json"'

    return response
